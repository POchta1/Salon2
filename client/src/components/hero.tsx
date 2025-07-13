import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://static.wixstatic.com/media/bff472_2ea28c9ea1fd443ba110112912b9a6ac~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bff472_2ea28c9ea1fd443ba110112912b9a6ac~mv2.jpg" 
          alt="Luxury beauty salon interior with professional equipment" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 animate-fade-in backdrop-blur-sm bg-black/30 rounded-3xl py-12 shadow-2xl border border-white/20">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-up">
          Ihr Exklusiver<br/>
          <span className="text-gray-300 animate-pulse-slow">Beauty-Arbeitsplatz</span>
        </h2>
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Mieten Sie flexible Arbeitsplätze in einem inspirierenden Umfeld für Beauty-Profis
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Link href="/services">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 text-lg px-8 py-4 animate-float shadow-lg"
            >
              Arbeitsplätze Entdecken
            </Button>
          </Link>
          <Link href="/franchise">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-lg px-8 py-4 shadow-lg"
            >
              Franchise Informationen
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
