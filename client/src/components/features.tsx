import { Star, Clock, Users, MapPin, Headset, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Star,
      title: t('features.premium.title'),
      description: t('features.premium.description')
    },
    {
      icon: Clock,
      title: t('features.flexible.title'),
      description: t('features.flexible.description')
    },
    {
      icon: Users,
      title: t('features.inspiring.title'),
      description: t('features.inspiring.description')
    },
    {
      icon: MapPin,
      title: t('features.central.title'),
      description: t('features.central.description')
    },
    {
      icon: Headset,
      title: t('features.support.title'),
      description: t('features.support.description')
    },
    {
      icon: Shield,
      title: t('features.hygiene.title'),
      description: t('features.hygiene.description')
    }
  ];

  return (
    <section className="py-20 bg-elegant-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h3 className="text-4xl font-bold text-elegant-black mb-4">
            {t('features.title')}
          </h3>
          <p className="text-xl text-elegant-gray max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-elegant-gray text-4xl mb-4">
                <feature.icon />
              </div>
              <h4 className="text-xl font-semibold text-elegant-black mb-3">{feature.title}</h4>
              <p className="text-elegant-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}