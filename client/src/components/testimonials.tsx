import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import type { Testimonial } from "@shared/schema";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  // Create translation mapping for testimonials
  const getTranslatedTestimonial = (testimonial: Testimonial) => {
    const nameMapping: { [key: string]: string } = {
      'Anna Schmidt': 'anna',
      'Maria Koller': 'maria',
      'Stefan Maier': 'stefan'
    };
    
    const key = nameMapping[testimonial.name];
    if (key) {
      return {
        ...testimonial,
        name: t(`testimonial.${key}.name`),
        profession: t(`testimonial.${key}.profession`),
        comment: t(`testimonial.${key}.comment`)
      };
    }
    return testimonial;
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h3 className="text-4xl font-bold text-elegant-black mb-4">
            {t('testimonials.title')}
          </h3>
          <p className="text-xl text-elegant-gray max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials?.map((testimonial, index) => {
            const translatedTestimonial = getTranslatedTestimonial(testimonial);
            return (
              <Card 
                key={testimonial.id} 
                className="bg-elegant-light p-8 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="flex text-elegant-gray text-xl">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-elegant-gray mb-6 italic">
                    "{translatedTestimonial.comment}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-elegant-black rounded-full flex items-center justify-center text-white font-bold">
                      {translatedTestimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-elegant-black">{translatedTestimonial.name}</h4>
                      <p className="text-sm text-elegant-gray">{translatedTestimonial.profession}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
