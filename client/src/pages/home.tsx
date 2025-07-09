import Hero from "@/components/hero";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Home() {
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
                Über uns
              </h3>
              <p className="text-gray-600 mb-6">
                Willkommen bei Beauty Space Wien, Ihrem Anlaufpunkt für hochwertige Arbeitsplätze und professionelle Beauty-Technik. Neben spezialisierten Arbeitsplätzen bieten wir Ihnen moderne Ausstattung für saubere, hygienische Arbeitsumgebungen und Kosmetikmaschinen, die modernste Technologien für Hautpflege und ästhetische Behandlungen einsetzen.
              </p>
              <p className="text-gray-600 mb-8">
                Unser flexibler Arbeitsplatz ist perfekt für Beauty-Profis, die nach Erfolg streben. Mit modernen und professionell ausgestatteten Räumlichkeiten bieten wir die ideale Umgebung für erstklassige Dienstleistungen. Du kannst dich in einem inspirierenden Umfeld mit anderen Beauty-Experten vernetzen, Ideen austauschen und gemeinsam wachsen.
              </p>
              <Link href="/services">
                <Button className="bg-luxury-gold hover:bg-yellow-600 text-white">
                  Unsere Arbeitsplätze entdecken
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
              Wie funktioniert es?
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              In nur wenigen Schritten zu Ihrem perfekten Beauty-Arbeitsplatz
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                1
              </div>
              <h4 className="text-xl font-semibold text-luxury-navy mb-3">Individuelle Arbeitsplätze</h4>
              <p className="text-gray-600">
                Wir stellen voll ausgestattete Arbeitsplätze in unseren Beauty-Salons zur Verfügung, damit du direkt loslegen kannst. Jeder Arbeitsplatz ist ergonomisch gestaltet und mit hochwertigen Geräten ausgestattet.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                2
              </div>
              <h4 className="text-xl font-semibold text-luxury-navy mb-3">Unterstützung und Beratung</h4>
              <p className="text-gray-600">
                Unser engagiertes Team steht dir zur Seite und bietet dir Unterstützung und Beratung in verschiedenen Bereichen, wie beispielsweise Geschäftsentwicklung, Marketing oder Kundenakquise.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                3
              </div>
              <h4 className="text-xl font-semibold text-luxury-navy mb-3">Flexibilität</h4>
              <p className="text-gray-600">
                Wir bieten flexible Mietoptionen an, damit du deine Arbeitszeiten anpassen und deinen Bedürfnissen gerecht werden kannst. Du kannst die Räumlichkeiten stunden- oder tageweise, aber auch langfristig mieten.
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
              Für wen ist ein Beauty Space geeignet?
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Unsere Arbeitsplätze sind perfekt für verschiedene Beauty-Profis
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              "Friseure", "Kosmetiker", "Make-up-Artists", "Nageltechniker",
              "Hautpflegetechniker", "Visagisten", "Hairstylisten", "Beautytherapeuten",
              "Wimpernstylisten", "Massage-Therapeuten", "Haarfärbespezialisten", "Schönheitsberater"
            ].map((profession, index) => (
              <div 
                key={index}
                className="bg-luxury-gray p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300 animate-scale-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <h4 className="font-semibold text-luxury-navy">{profession}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
}
