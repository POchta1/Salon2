import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import { Handshake, GraduationCap, TrendingUp, Users, Star, DollarSign, CheckCircle } from "lucide-react";

const franchiseContactSchema = insertContactSchema.extend({
  type: z.literal("franchise"),
});

type FranchiseContactData = z.infer<typeof franchiseContactSchema>;

export default function Franchise() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const form = useForm<FranchiseContactData>({
    resolver: zodResolver(franchiseContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      type: "franchise"
    }
  });

  const createContactMutation = useMutation({
    mutationFn: async (data: FranchiseContactData) => {
      const response = await apiRequest("POST", "/api/contacts", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: t('franchise.request.success'),
        description: t('franchise.request.success.description'),
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: t('franchise.request.error'),
        description: t('franchise.request.error.description'),
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: FranchiseContactData) => {
    createContactMutation.mutate(data);
  };

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-5xl font-bold text-luxury-navy mb-6">
            {t('franchise.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('franchise.subtitle')}
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-luxury-navy text-center mb-12">
            {t('franchise.benefits.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up">
              <CardHeader>
                <div className="text-luxury-gold text-5xl mb-4 flex justify-center">
                  <Handshake />
                </div>
                <CardTitle className="text-luxury-navy">{t('franchise.benefit1.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {t('franchise.benefit1.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <div className="text-luxury-gold text-5xl mb-4 flex justify-center">
                  <GraduationCap />
                </div>
                <CardTitle className="text-luxury-navy">{t('franchise.benefit2.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {t('franchise.benefit2.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <div className="text-luxury-gold text-5xl mb-4 flex justify-center">
                  <TrendingUp />
                </div>
                <CardTitle className="text-luxury-navy">{t('franchise.benefit3.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {t('franchise.benefit3.description')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="mb-20 bg-luxury-gray p-12 rounded-2xl">
          <h2 className="text-3xl font-bold text-luxury-navy text-center mb-12">
            {t('franchise.why.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <CheckCircle className="text-luxury-gold h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-luxury-navy mb-2">{t('franchise.why.brand.title')}</h4>
                <p className="text-gray-600">{t('franchise.why.brand.description')}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="text-luxury-gold h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-luxury-navy mb-2">{t('franchise.why.processes.title')}</h4>
                <p className="text-gray-600">{t('franchise.why.processes.description')}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="text-luxury-gold h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-luxury-navy mb-2">{t('franchise.why.support.title')}</h4>
                <p className="text-gray-600">{t('franchise.why.support.description')}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="text-luxury-gold h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-luxury-navy mb-2">{t('franchise.why.territory.title')}</h4>
                <p className="text-gray-600">{t('franchise.why.territory.description')}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="text-luxury-gold h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-luxury-navy mb-2">{t('franchise.why.investment.title')}</h4>
                <p className="text-gray-600">{t('franchise.why.investment.description')}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="text-luxury-gold h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-luxury-navy mb-2">{t('franchise.why.roi.title')}</h4>
                <p className="text-gray-600">{t('franchise.why.roi.description')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-luxury-navy text-center mb-12">
            {t('franchise.stats.title')}
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-luxury-gold text-5xl mb-4 flex justify-center">
                <Star />
              </div>
              <div className="text-4xl font-bold text-luxury-navy mb-2">4+</div>
              <p className="text-gray-600">{t('franchise.stats.locations')}</p>
            </div>
            <div className="text-center">
              <div className="text-luxury-gold text-5xl mb-4 flex justify-center">
                <Users />
              </div>
              <div className="text-4xl font-bold text-luxury-navy mb-2">500+</div>
              <p className="text-gray-600">{t('franchise.stats.customers')}</p>
            </div>
            <div className="text-center">
              <div className="text-luxury-gold text-5xl mb-4 flex justify-center">
                <DollarSign />
              </div>
              <div className="text-4xl font-bold text-luxury-navy mb-2">95%</div>
              <p className="text-gray-600">{t('franchise.stats.satisfaction')}</p>
            </div>
            <div className="text-center">
              <div className="text-luxury-gold text-5xl mb-4 flex justify-center">
                <TrendingUp />
              </div>
              <div className="text-4xl font-bold text-luxury-navy mb-2">3</div>
              <p className="text-gray-600">{t('franchise.stats.experience')}</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-luxury-navy text-center">
                {t('franchise.form.title')}
              </CardTitle>
              <p className="text-gray-600 text-center">
                {t('franchise.form.subtitle')}
              </p>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-luxury-navy mb-2">
                    {t('franchise.request.success')}
                  </h3>
                  <p className="text-gray-600">
                    {t('franchise.request.success.description')}
                  </p>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('franchise.form.name')} *</FormLabel>
                            <FormControl>
                              <Input placeholder={t('franchise.form.name')} {...field} />
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
                            <FormLabel>{t('franchise.form.email')} *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder={t('franchise.form.email')} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('franchise.form.phone')}</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder={t('franchise.form.phone')} {...field} />
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
                          <FormLabel>{t('franchise.form.message')} *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder={t('franchise.form.placeholder')}
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
                      className="w-full bg-luxury-gold hover:bg-yellow-600 text-white py-3 text-lg"
                      disabled={createContactMutation.isPending}
                    >
                      {createContactMutation.isPending ? t('contact.sending') : t('franchise.form.title')}
                    </Button>
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
