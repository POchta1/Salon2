import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://static.wixstatic.com/media/bff472_ff8f129561dc493584d1a8a75e899ae1f000.jpg/v1/fill/w_1920,h_1080,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/bff472_ff8f129561dc493584d1a8a75e899ae1f000.jpg" 
          alt="Luxury beauty salon interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-luxury-navy bg-opacity-50"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 animate-fade-in">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Ihr Exklusiver<br/>
          <span className="text-luxury-gold">Beauty-Arbeitsplatz</span>
        </h2>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Mieten Sie flexible Arbeitsplätze in einem inspirierenden Umfeld für Beauty-Profis
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/services">
            <Button 
              size="lg" 
              className="bg-luxury-gold text-white hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 text-lg px-8 py-4"
            >
              Arbeitsplätze Entdecken
            </Button>
          </Link>
          <Link href="/franchise">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-luxury-navy transition-all duration-300 text-lg px-8 py-4"
            >
              Franchise Informationen
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
