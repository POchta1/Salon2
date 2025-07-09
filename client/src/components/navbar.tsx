import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Gem } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Arbeitsplätze" },
    { href: "/gallery", label: "Galerie" },
    { href: "/franchise", label: "Franchise" },
    { href: "/contact", label: "Kontakt" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Gem className="text-luxury-gold text-2xl" />
            <h1 className="text-2xl font-bold text-luxury-navy">Beauty Space</h1>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors duration-300 ${
                  isActive(item.href)
                    ? "text-luxury-gold font-medium"
                    : "text-luxury-navy hover:text-luxury-gold"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button className="bg-luxury-gold text-white hover:bg-rose-gold transition-colors duration-300">
              Jetzt Buchen
            </Button>
          </div>
          
          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-lg transition-colors duration-300 ${
                      isActive(item.href)
                        ? "text-luxury-gold font-medium"
                        : "text-luxury-navy hover:text-luxury-gold"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button className="bg-luxury-gold text-white hover:bg-rose-gold transition-colors duration-300 mt-6">
                  Jetzt Buchen
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
