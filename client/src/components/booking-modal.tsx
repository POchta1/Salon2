import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CalendarIcon, Euro } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import { insertBookingSchema } from "@shared/schema";
import { z } from "zod";
import type { Workspace } from "@shared/schema";
import { useLanguage } from "@/contexts/LanguageContext";

interface BookingModalProps {
  workspace: Workspace;
  isOpen: boolean;
  onClose: () => void;
}

const bookingFormSchema = insertBookingSchema.extend({
  bookingDate: z.date(),
});

type BookingFormData = z.infer<typeof bookingFormSchema>;

export default function BookingModal({ workspace, isOpen, onClose }: BookingModalProps) {
  const { t } = useLanguage();
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [calculatedTotal, setCalculatedTotal] = useState<number>(0);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      workspaceId: workspace.id,
      customerName: "",
      customerEmail: "",
      customerPhone: "",
      startTime: "",
      endTime: "",
      totalAmount: "0",
      status: "pending"
    }
  });

  const createBookingMutation = useMutation({
    mutationFn: async (data: BookingFormData) => {
      const bookingData = {
        ...data,
        bookingDate: data.bookingDate.toISOString(),
        totalAmount: calculatedTotal.toFixed(2)
      };
      
      const response = await apiRequest("POST", "/api/bookings", bookingData);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: t('booking.success'),
        description: t('booking.success.description'),
      });
      queryClient.invalidateQueries({ queryKey: ["/api/bookings"] });
      onClose();
      form.reset();
    },
    onError: (error) => {
      toast({
        title: t('booking.error'),
        description: t('booking.error.description'),
        variant: "destructive",
      });
    }
  });

  const calculateTotal = (startTime: string, endTime: string) => {
    if (!startTime || !endTime) return 0;
    
    const start = new Date(`2000-01-01T${startTime}:00`);
    const end = new Date(`2000-01-01T${endTime}:00`);
    const diffMs = end.getTime() - start.getTime();
    const diffHours = diffMs / (1000 * 60 * 60);
    
    if (diffHours >= 8) {
      return parseFloat(workspace.dailyRate);
    } else {
      return diffHours * parseFloat(workspace.hourlyRate);
    }
  };

  const handleTimeChange = () => {
    const startTime = form.getValues("startTime");
    const endTime = form.getValues("endTime");
    const total = calculateTotal(startTime, endTime);
    setCalculatedTotal(total);
  };

  const onSubmit = (data: BookingFormData) => {
    if (!selectedDate) {
      toast({
        title: t('booking.dateRequired'),
        description: t('booking.dateRequired.description'),
        variant: "destructive",
      });
      return;
    }

    const formData = {
      ...data,
      bookingDate: selectedDate,
    };

    createBookingMutation.mutate(formData);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-elegant-black">
            {workspace.name} {t('booking.title')}
          </DialogTitle>
          <DialogDescription className="text-elegant-gray">
            {t('booking.description')}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Workspace Info */}
          <div className="bg-elegant-light p-4 rounded-lg border border-elegant-gray/20">
            <h4 className="font-semibold text-elegant-black mb-2">{workspace.name}</h4>
            <p className="text-sm text-elegant-gray mb-2">{workspace.location}</p>
            <div className="flex items-center space-x-4">
              <span className="text-elegant-black font-bold">€{workspace.hourlyRate}/{t('workspace.per.hour')}</span>
              <span className="text-elegant-black font-bold">€{workspace.dailyRate}/{t('workspace.per.day')}</span>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Customer Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="customerName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('booking.customerName')} *</FormLabel>
                      <FormControl>
                        <Input placeholder={t('booking.customerName')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="customerEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-Mail *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="ihre@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="customerPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('booking.customerPhone')}</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder={t('booking.customerPhone')} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Date Selection */}
              <div>
                <Label>{t('booking.bookingDate')}</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={`w-full justify-start text-left font-normal ${
                        !selectedDate && "text-muted-foreground"
                      }`}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {selectedDate ? format(selectedDate, "PPP", { locale: de }) : t('booking.selectDate')}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Time Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="startTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('booking.startTime')}</FormLabel>
                      <Select onValueChange={(value) => {
                        field.onChange(value);
                        handleTimeChange();
                      }}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t('booking.selectStartTime')} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Array.from({ length: 13 }, (_, i) => {
                            const hour = i + 8;
                            const time = `${hour.toString().padStart(2, '0')}:00`;
                            return (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="endTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('booking.endTime')}</FormLabel>
                      <Select onValueChange={(value) => {
                        field.onChange(value);
                        handleTimeChange();
                      }}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t('booking.selectEndTime')} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Array.from({ length: 13 }, (_, i) => {
                            const hour = i + 8;
                            const time = `${hour.toString().padStart(2, '0')}:00`;
                            return (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Price Calculation */}
              {calculatedTotal > 0 && (
                <div className="bg-elegant-light p-4 rounded-lg border border-elegant-gray/20">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-elegant-black">{t('booking.total')}</span>
                    <div className="flex items-center text-elegant-black font-bold text-xl">
                      <Euro className="h-5 w-5 mr-1" />
                      {calculatedTotal.toFixed(2)}
                    </div>
                  </div>
                </div>
              )}

              <div className="flex space-x-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="flex-1"
                  disabled={createBookingMutation.isPending}
                >
                  {t('booking.cancel')}
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-elegant-black hover:bg-elegant-gray text-white"
                  disabled={createBookingMutation.isPending}
                >
                  {createBookingMutation.isPending ? t('booking.booking') : t('booking.book')}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
