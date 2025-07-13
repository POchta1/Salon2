import Hero from "@/components/hero";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  
  return (
    <div>
      <Hero />
      <Features />
      
      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h3 className="text-4xl font-bold text-luxury-navy mb-6">
                {t('about.title')}
              </h3>
              <p className="text-gray-600 mb-6">
                {t('about.subtitle')} {t('about.description1')}
              </p>
              <p className="text-gray-600 mb-8">
                {t('about.description2')}
              </p>
              <Link href="/services">
                <Button className="bg-luxury-gold hover:bg-yellow-600 text-white">
                  {t('about.cta')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="animate-slide-up">
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Beauty workspace interior"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-luxury-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-luxury-navy mb-4">
              {t('how.title')}
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('how.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                1
              </div>
              <h4 className="text-xl font-semibold text-luxury-navy mb-3">{t('how.individual.title')}</h4>
              <p className="text-gray-600">
                {t('how.individual.description')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                2
              </div>
              <h4 className="text-xl font-semibold text-luxury-navy mb-3">{t('how.support.title')}</h4>
              <p className="text-gray-600">
                {t('how.support.description')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                3
              </div>
              <h4 className="text-xl font-semibold text-luxury-navy mb-3">{t('how.flexibility.title')}</h4>
              <p className="text-gray-600">
                {t('how.flexibility.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-luxury-navy mb-4">
              {t('target.title')}
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('target.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              'target.hairdresser', 'target.cosmetician', 'target.makeup', 'target.nail',
              'target.skincare', 'target.visagist', 'target.stylist', 'target.therapist',
              'target.lash', 'target.massage', 'target.colorist', 'target.consultant'
            ].map((professionKey, index) => (
              <div 
                key={index}
                className="bg-luxury-gray p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300 animate-scale-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <h4 className="font-semibold text-luxury-navy">{t(professionKey)}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
}
