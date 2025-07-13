import { Link } from "wouter";
import { Gem, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-elegant-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Gem className="text-elegant-gray text-2xl" />
              <h4 className="text-xl font-bold">Beauty Space</h4>
            </div>
            <p className="text-gray-300 mb-6">
              {t('hero.description')}
            </p>
            <div className="flex space-x-4">
              <Facebook className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer" />
              <Instagram className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer" />
              <Linkedin className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer" />
              <Youtube className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('nav.services')}</h4>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors duration-300">{t('services.makeup')}</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors duration-300">{t('services.kosmetik')}</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors duration-300">{t('services.friseur')}</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors duration-300">{t('services.nageldesign')}</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors duration-300">{t('services.fusspflege')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.company')}</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300">{t('footer.about')}</Link></li>
              <li><Link href="/franchise" className="text-gray-300 hover:text-white transition-colors duration-300">{t('nav.franchise')}</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">{t('footer.career')}</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">{t('footer.press')}</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">{t('footer.partner')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.contact')}</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="mr-3 h-4 w-4" />
                <span>+43 1 234 5678</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="mr-3 h-4 w-4" />
                <span>office@beautyspace.wien</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="mr-3 h-4 w-4 mt-1" />
                <span>Weyringergasse 15-17/2/2<br/>1040 Wien</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Beauty Space Wien. {t('footer.rights')}</p>
          <div className="mt-4 space-x-6">
            <Link href="/contact" className="hover:text-white transition-colors duration-300">{t('footer.privacy')}</Link>
            <Link href="/contact" className="hover:text-white transition-colors duration-300">{t('footer.imprint')}</Link>
            <Link href="/contact" className="hover:text-white transition-colors duration-300">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
