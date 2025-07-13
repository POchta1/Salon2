import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Gem } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/language-selector";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { href: "/", label: t('nav.home') },
    { href: "/services", label: t('nav.services') },
    { href: "/gallery", label: t('nav.gallery') },
    { href: "/franchise", label: t('nav.franchise') },
    { href: "/contact", label: t('nav.contact') },
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
            <Gem className="text-elegant-gray text-2xl" />
            <h1 className="text-2xl font-bold text-elegant-black">Beauty Space</h1>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors duration-300 ${
                  isActive(item.href)
                    ? "text-elegant-black font-medium"
                    : "text-elegant-gray hover:text-elegant-black"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <LanguageSelector />
            <Button className="bg-elegant-black text-white hover:bg-elegant-gray transition-colors duration-300">
              {t('hero.discover')}
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
                        ? "text-elegant-black font-medium"
                        : "text-elegant-gray hover:text-elegant-black"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-4">
                  <LanguageSelector />
                </div>
                <Button className="bg-elegant-black text-white hover:bg-elegant-gray transition-colors duration-300 mt-6">
                  {t('hero.discover')}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
