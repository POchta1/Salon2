import { Link } from "wouter";
import { Gem, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-luxury-navy text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Gem className="text-luxury-gold text-2xl" />
              <h4 className="text-xl font-bold">Beauty Space</h4>
            </div>
            <p className="text-gray-300 mb-6">
              Ihr exklusiver Beauty-Arbeitsplatz in Wien. Professionelle Ausstattung, flexible Konditionen und eine inspirierende Gemeinschaft.
            </p>
            <div className="flex space-x-4">
              <Facebook className="text-gray-300 hover:text-luxury-gold transition-colors duration-300 cursor-pointer" />
              <Instagram className="text-gray-300 hover:text-luxury-gold transition-colors duration-300 cursor-pointer" />
              <Linkedin className="text-gray-300 hover:text-luxury-gold transition-colors duration-300 cursor-pointer" />
              <Youtube className="text-gray-300 hover:text-luxury-gold transition-colors duration-300 cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-gray-300 hover:text-luxury-gold transition-colors duration-300">Makeup Plätze</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-luxury-gold transition-colors duration-300">Kosmetikräume</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-luxury-gold transition-colors duration-300">Friseur Plätze</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-luxury-gold transition-colors duration-300">Nageldesign</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-luxury-gold transition-colors duration-300">Fußpflege</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Unternehmen</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-luxury-gold transition-colors duration-300">Über uns</Link></li>
              <li><Link href="/franchise" className="text-gray-300 hover:text-luxury-gold transition-colors duration-300">Franchise</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-luxury-gold transition-colors duration-300">Karriere</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-luxury-gold transition-colors duration-300">Press</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-luxury-gold transition-colors duration-300">Partner</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Kontakt</h4>
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
          <p>&copy; 2024 Beauty Space Wien. Alle Rechte vorbehalten.</p>
          <div className="mt-4 space-x-6">
            <Link href="/contact" className="hover:text-luxury-gold transition-colors duration-300">Datenschutz</Link>
            <Link href="/contact" className="hover:text-luxury-gold transition-colors duration-300">Impressum</Link>
            <Link href="/contact" className="hover:text-luxury-gold transition-colors duration-300">AGB</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
