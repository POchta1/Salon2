import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const contactFormSchema = insertContactSchema.extend({
  type: z.literal("general"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const locations = [
  {
    name: "Beauty Space Wien 1040",
    address: "Weyringergasse 15-17/2/2",
    city: "1040 Wien",
    phone: "+43 1 234 5678",
    email: "office@beautyspace.wien"
  },
  {
    name: "Beauty Space Wien 1070",
    address: "Hermanngasse 30/3/2",
    city: "1070 Wien",
    phone: "+43 1 234 5679",
    email: "office@beautyspace.wien"
  },
  {
    name: "Beauty Space Wien 1120",
    address: "Schönbrunnerstraße 189",
    city: "1120 Wien",
    phone: "+43 1 234 5680",
    email: "office@beautyspace.wien"
  }
];

export default function Contact() {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      type: "general"
    }
  });

  const createContactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contacts", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: t('contact.success'),
        description: t('contact.success.description'),
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: t('contact.error'),
        description: t('contact.error.description'),
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    createContactMutation.mutate(data);
  };

  return (
    <div className="py-20 bg-luxury-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold text-luxury-navy mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white shadow-lg animate-slide-up">
              <CardHeader>
                <CardTitle className="text-2xl text-luxury-navy">
                  {t('contact.form.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-luxury-navy mb-2">
                      {t('contact.success')}
                    </h3>
                    <p className="text-gray-600">
                      {t('contact.success.description')}
                    </p>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('contact.form.name')} *</FormLabel>
                            <FormControl>
                              <Input placeholder={t('contact.form.name')} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('contact.form.email')} *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder={t('contact.form.email')} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('contact.form.phone')}</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder={t('contact.form.phone')} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('contact.form.message')} *</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder={t('contact.form.message.placeholder')}
                                rows={4}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit"
                        className="w-full bg-luxury-gold hover:bg-yellow-600 text-white py-3"
                        disabled={createContactMutation.isPending}
                      >
                        {createContactMutation.isPending ? t('contact.sending') : t('contact.form.submit')}
                      </Button>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>

            {/* Locations */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              {locations.map((location, index) => (
                <Card key={index} className="bg-white shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-luxury-navy mb-4 flex items-center">
                      <MapPin className="text-luxury-gold mr-2 h-5 w-5" />
                      {location.name}
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">{location.address}</p>
                      <p className="text-gray-600">{location.city}</p>
                      <div className="flex items-center text-luxury-gold">
                        <Phone className="mr-2 h-4 w-4" />
                        <span>{location.phone}</span>
                      </div>
                      <div className="flex items-center text-luxury-gold">
                        <Mail className="mr-2 h-4 w-4" />
                        <span>{location.email}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* General Information */}
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-luxury-navy mb-4 flex items-center">
                    <Clock className="text-luxury-gold mr-2 h-5 w-5" />
                    {t('contact.hours.title')}
                  </h4>
                  <div className="space-y-2">
                    <p className="text-gray-600">{t('contact.hours.weekdays')}</p>
                    <p className="text-gray-600">{t('contact.hours.saturday')}</p>
                    <p className="text-gray-600">{t('contact.hours.sunday')}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-luxury-navy text-center mb-12">
            {t('contact.faq.title')}
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-lg text-luxury-navy">
                  {t('contact.faq.booking.question')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {t('contact.faq.booking.answer')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-lg text-luxury-navy">
                  {t('contact.faq.included.question')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {t('contact.faq.included.answer')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-lg text-luxury-navy">
                  {t('contact.faq.shortterm.question')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {t('contact.faq.shortterm.answer')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-lg text-luxury-navy">
                  {t('contact.faq.training.question')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {t('contact.faq.training.answer')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
