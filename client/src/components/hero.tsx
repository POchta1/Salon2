import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Luxury beauty salon interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-luxury-navy bg-opacity-60"></div>
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
