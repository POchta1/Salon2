import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Euro } from "lucide-react";
import { useState } from "react";
import BookingModal from "./booking-modal";
import type { Workspace } from "@shared/schema";

interface WorkspaceCardProps {
  workspace: Workspace;
}

export default function WorkspaceCard({ workspace }: WorkspaceCardProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "makeup":
        return "bg-pink-100 text-pink-800";
      case "kosmetik":
        return "bg-purple-100 text-purple-800";
      case "friseur":
        return "bg-blue-100 text-blue-800";
      case "nageldesign":
        return "bg-green-100 text-green-800";
      case "fußpflege":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <>
      <Card className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
        <div className="relative">
          <img 
            src={workspace.imageUrl} 
            alt={workspace.name}
            className="w-full h-48 object-cover"
          />
          {workspace.isAvailable && (
            <Badge className="absolute top-4 right-4 bg-green-500 text-white">
              Verfügbar
            </Badge>
          )}
        </div>
        
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-semibold text-luxury-navy">{workspace.name}</h4>
            <Badge className={getCategoryColor(workspace.category)}>
              {workspace.category}
            </Badge>
          </div>
          
          <div className="flex items-center text-gray-600 text-sm mt-2">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{workspace.location}</span>
          </div>
        </CardHeader>
        
        <CardContent className="pt-0">
          <p className="text-gray-600 mb-4 text-sm">{workspace.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {workspace.features.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {feature}
              </Badge>
            ))}
            {workspace.features.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{workspace.features.length - 3} mehr
              </Badge>
            )}
          </div>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center text-luxury-gold font-bold">
              <Euro className="h-4 w-4 mr-1" />
              <span className="text-2xl">{workspace.dailyRate}</span>
              <span className="text-sm text-gray-500 ml-1">/Tag</span>
            </div>
            <div className="flex items-center text-gray-600 text-sm">
              <Clock className="h-4 w-4 mr-1" />
              <span>ab €{workspace.hourlyRate}/Std</span>
            </div>
          </div>
          
          <Button 
            className="w-full bg-luxury-gold text-white hover:bg-yellow-600 transition-colors duration-300"
            onClick={() => setIsBookingOpen(true)}
            disabled={!workspace.isAvailable}
          >
            {workspace.isAvailable ? "Buchen" : "Nicht verfügbar"}
          </Button>
        </CardContent>
      </Card>
      
      <BookingModal 
        workspace={workspace}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
}
