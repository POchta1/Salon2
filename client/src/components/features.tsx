import { Star, Clock, Users, MapPin, Headset, Shield } from "lucide-react";

const features = [
  {
    icon: Star,
    title: "Hochwertige Ausstattung",
    description: "Moderne Geräte und hochwertige Kosmetikmöbel für professionelle Arbeit in luxuriöser Umgebung."
  },
  {
    icon: Clock,
    title: "Flexible Mietoptionen",
    description: "Stunden-, Tages- oder Monatsmieten – wir passen uns Ihren individuellen Bedürfnissen an."
  },
  {
    icon: Users,
    title: "Inspirierendes Umfeld",
    description: "Vernetzen Sie sich mit anderen Beauty-Profis und erweitern Sie Ihr Netzwerk."
  },
  {
    icon: MapPin,
    title: "Zentrale Lage",
    description: "Mehrere Standorte in Wien mit hervorragender Anbindung an öffentliche Verkehrsmittel."
  },
  {
    icon: Headset,
    title: "Professioneller Support",
    description: "Umfassende Unterstützung bei Marketing, Buchhaltung und Geschäftsentwicklung."
  },
  {
    icon: Shield,
    title: "Hygiene & Sicherheit",
    description: "Höchste Hygienestandards und professionelle Reinigungssysteme für Ihre Sicherheit."
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-luxury-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h3 className="text-4xl font-bold text-luxury-navy mb-4">
            Warum Beauty Space Wien?
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professionelle Ausstattung, flexible Konditionen und eine inspirierende Gemeinschaft
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-luxury-gold text-4xl mb-4">
                <feature.icon />
              </div>
              <h4 className="text-xl font-semibold text-luxury-navy mb-3">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
