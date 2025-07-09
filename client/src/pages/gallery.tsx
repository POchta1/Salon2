import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const galleryImages = [
  {
    id: 1,
    src: "https://static.wixstatic.com/media/bff472_ff8f129561dc493584d1a8a75e899ae1f000.jpg/v1/fill/w_800,h_600,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/bff472_ff8f129561dc493584d1a8a75e899ae1f000.jpg",
    title: "Hauptarbeitsbereich",
    description: "Wien 1040",
    category: "salon"
  },
  {
    id: 2,
    src: "https://static.wixstatic.com/media/28e931_d2c3cd0515214224a89ddaba6590f07f~mv2.webp/v1/fill/w_800,h_600,al_c,q_85,usm_1.20_1.00_0.01,enc_avif,quality_auto/28e931_d2c3cd0515214224a89ddaba6590f07f~mv2.webp",
    title: "Nageldesign Studio",
    description: "Professionelle Nagelbehandlung",
    category: "nails"
  },
  {
    id: 3,
    src: "https://static.wixstatic.com/media/ccce64db8e8d4d4386cd4b72c5b0b2aa.jpg/v1/fill/w_800,h_600,al_c,q_85,usm_1.20_1.00_0.01,enc_avif,quality_auto/ccce64db8e8d4d4386cd4b72c5b0b2aa.jpg",
    title: "Makeup Station",
    description: "Professionelle Ausstattung",
    category: "makeup"
  },
  {
    id: 4,
    src: "https://static.wixstatic.com/media/bff472_c0ae38d2b6cc43bbbdc6351d5c2fc92e~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/bff472_c0ae38d2b6cc43bbbdc6351d5c2fc92e~mv2.jpg",
    title: "Coworking Beauty Space",
    description: "Inspirierendes Arbeitsumfeld",
    category: "salon"
  },
  {
    id: 5,
    src: "https://static.wixstatic.com/media/bff472_0d02109a9bde451180500342011e61f7~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/bff472_0d02109a9bde451180500342011e61f7~mv2.jpg",
    title: "Maniküre & Pediküre Zone",
    description: "Wien 1040",
    category: "nails"
  },
  {
    id: 6,
    src: "https://static.wixstatic.com/media/28e931_dde8e2d9b5474d5f9f0ffcdc80d2f582~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/28e931_dde8e2d9b5474d5f9f0ffcdc80d2f582~mv2.jpg",
    title: "Makeup Arbeitsplatz",
    description: "Perfekte Beleuchtung",
    category: "makeup"
  },
  {
    id: 7,
    src: "https://static.wixstatic.com/media/28e931_02719cb1bbd14d59bb811c036a900a36~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/28e931_02719cb1bbd14d59bb811c036a900a36~mv2.jpg",
    title: "Kosmetikraum Wien 1120",
    description: "Moderne Ausstattung",
    category: "spa"
  },
  {
    id: 8,
    src: "https://static.wixstatic.com/media/bff472_36467ff8eff449b0a4cc25dce652055c~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bff472_36467ff8eff449b0a4cc25dce652055c~mv2.jpg",
    title: "Friseur Arbeitsplatz",
    description: "Professionelle Ausstattung",
    category: "hair"
  },
  {
    id: 9,
    src: "https://static.wixstatic.com/media/bff472_2ea28c9ea1fd443ba110112912b9a6ac~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bff472_2ea28c9ea1fd443ba110112912b9a6ac~mv2.jpg",
    title: "Kosmetik Raum Nr. 1",
    description: "Wien 1070",
    category: "spa"
  }
];

const filterCategories = [
  { id: "all", label: "Alle Bilder" },
  { id: "salon", label: "Salon" },
  { id: "makeup", label: "Makeup" },
  { id: "spa", label: "Kosmetik" },
  { id: "hair", label: "Friseur" },
  { id: "nails", label: "Nageldesign" }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredImages = galleryImages.filter(image => 
    activeFilter === "all" || image.category === activeFilter
  );

  return (
    <div className="py-20 bg-luxury-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold text-luxury-navy mb-4">
            Unsere Beauty Spaces
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Entdecken Sie unsere luxuriösen Arbeitsplätze und inspirierenden Räumlichkeiten
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filterCategories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              onClick={() => setActiveFilter(category.id)}
              className={`transition-colors duration-300 ${
                activeFilter === category.id
                  ? "bg-luxury-gold text-white hover:bg-rose-gold"
                  : "bg-white text-luxury-navy hover:bg-soft-pink"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id} 
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer animate-scale-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-navy to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-lg font-semibold">{image.title}</h4>
                <p className="text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Keine Bilder gefunden
            </h3>
            <p className="text-gray-500">
              Versuchen Sie es mit einer anderen Kategorie.
            </p>
          </div>
        )}

        {/* Image Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0">
            {selectedImage && (
              <div className="relative">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                  <p className="text-lg">{selectedImage.description}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
