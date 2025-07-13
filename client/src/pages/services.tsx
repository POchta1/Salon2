import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import WorkspaceCard from "@/components/workspace-card";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Workspace } from "@shared/schema";

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const { t } = useLanguage();

  const categories = [
    { id: "all", label: t('services.category.all') },
    { id: "makeup", label: t('services.category.makeup') },
    { id: "kosmetik", label: t('services.category.kosmetik') },
    { id: "friseur", label: t('services.category.friseur') },
    { id: "nageldesign", label: t('services.category.nageldesign') },
    { id: "fußpflege", label: t('services.category.fusspflege') },
  ];

  const { data: workspaces, isLoading } = useQuery<Workspace[]>({
    queryKey: ["/api/workspaces"],
  });

  const filteredWorkspaces = workspaces?.filter(workspace => {
    const matchesCategory = activeCategory === "all" || workspace.category === activeCategory;
    const matchesSearch = workspace.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         workspace.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         workspace.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (isLoading) {
    return (
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold text-luxury-navy mb-4">
            {t('services.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder={t('services.search.placeholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`transition-colors duration-300 ${
                  activeCategory === category.id
                    ? "bg-luxury-gold text-luxury-navy hover:bg-luxury-gold/80"
                    : "bg-white text-luxury-navy hover:bg-luxury-gray"
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-8 text-center">
          <p className="text-gray-600">
            {filteredWorkspaces?.length} Arbeitsplätze gefunden
          </p>
        </div>

        {/* Workspace Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorkspaces?.map((workspace, index) => (
            <div
              key={workspace.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <WorkspaceCard workspace={workspace} />
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredWorkspaces?.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">
              <Filter />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Keine Arbeitsplätze gefunden
            </h3>
            <p className="text-gray-500">
              Versuchen Sie es mit anderen Suchbegriffen oder Kategorien.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
