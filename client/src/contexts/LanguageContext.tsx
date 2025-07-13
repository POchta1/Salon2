import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'de' | 'en' | 'uk';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.services': 'Services',
    'nav.gallery': 'Galerie',
    'nav.franchise': 'Franchise',
    'nav.contact': 'Kontakt',
    
    // Hero Section
    'hero.title': 'Ihr Exklusiver',
    'hero.subtitle': 'Beauty-Arbeitsplatz',
    'hero.description': 'Mieten Sie flexible Arbeitsplätze in einem inspirierenden Umfeld für Beauty-Profis',
    'hero.discover': 'Arbeitsplätze Entdecken',
    'hero.franchise': 'Franchise Informationen',
    
    // Services
    'services.makeup': 'Makeup Plätze',
    'services.kosmetik': 'Kosmetikräume',
    'services.friseur': 'Friseur Plätze',
    'services.nageldesign': 'Nageldesign',
    'services.fusspflege': 'Fußpflege',
    
    // Booking
    'booking.title': 'buchen',
    'booking.description': 'Buchen Sie diesen Arbeitsplatz für Ihre Beauty-Services',
    'booking.customerName': 'Vollständiger Name',
    'booking.customerEmail': 'E-Mail-Adresse',
    'booking.customerPhone': 'Telefonnummer',
    'booking.bookingDate': 'Buchungsdatum',
    'booking.startTime': 'Startzeit',
    'booking.endTime': 'Endzeit',
    'booking.total': 'Gesamtbetrag:',
    'booking.cancel': 'Abbrechen',
    'booking.book': 'Jetzt buchen',
    'booking.booking': 'Wird gebucht...',
    
    // Footer
    'footer.company': 'Unternehmen',
    'footer.about': 'Über uns',
    'footer.career': 'Karriere',
    'footer.press': 'Press',
    'footer.partner': 'Partner',
    'footer.contact': 'Kontakt',
    'footer.privacy': 'Datenschutz',
    'footer.imprint': 'Impressum',
    'footer.terms': 'AGB',
    'footer.rights': 'Alle Rechte vorbehalten.',
    
    // Language Selector
    'language.select': 'Sprache wählen',
    'language.german': 'Deutsch',
    'language.english': 'English',
    'language.ukrainian': 'Українська'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.gallery': 'Gallery',
    'nav.franchise': 'Franchise',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Your Exclusive',
    'hero.subtitle': 'Beauty Workspace',
    'hero.description': 'Rent flexible workspaces in an inspiring environment for beauty professionals',
    'hero.discover': 'Discover Workspaces',
    'hero.franchise': 'Franchise Information',
    
    // Services
    'services.makeup': 'Makeup Studios',
    'services.kosmetik': 'Cosmetic Rooms',
    'services.friseur': 'Hair Salon',
    'services.nageldesign': 'Nail Design',
    'services.fusspflege': 'Foot Care',
    
    // Booking
    'booking.title': 'Book',
    'booking.description': 'Book this workspace for your beauty services',
    'booking.customerName': 'Full Name',
    'booking.customerEmail': 'Email Address',
    'booking.customerPhone': 'Phone Number',
    'booking.bookingDate': 'Booking Date',
    'booking.startTime': 'Start Time',
    'booking.endTime': 'End Time',
    'booking.total': 'Total Amount:',
    'booking.cancel': 'Cancel',
    'booking.book': 'Book Now',
    'booking.booking': 'Booking...',
    
    // Footer
    'footer.company': 'Company',
    'footer.about': 'About Us',
    'footer.career': 'Career',
    'footer.press': 'Press',
    'footer.partner': 'Partners',
    'footer.contact': 'Contact',
    'footer.privacy': 'Privacy',
    'footer.imprint': 'Imprint',
    'footer.terms': 'Terms',
    'footer.rights': 'All rights reserved.',
    
    // Language Selector
    'language.select': 'Select Language',
    'language.german': 'Deutsch',
    'language.english': 'English',
    'language.ukrainian': 'Українська'
  },
  uk: {
    // Navigation
    'nav.home': 'Головна',
    'nav.services': 'Послуги',
    'nav.gallery': 'Галерея',
    'nav.franchise': 'Франшиза',
    'nav.contact': 'Контакти',
    
    // Hero Section
    'hero.title': 'Ваше Ексклюзивне',
    'hero.subtitle': 'Beauty-Робоче Місце',
    'hero.description': 'Орендуйте гнучкі робочі місця у натхненному середовищі для Beauty-професіоналів',
    'hero.discover': 'Знайти Робочі Місця',
    'hero.franchise': 'Інформація про Франшизу',
    
    // Services
    'services.makeup': 'Makeup Студії',
    'services.kosmetik': 'Косметичні Кімнати',
    'services.friseur': 'Перукарня',
    'services.nageldesign': 'Нейл-Дизайн',
    'services.fusspflege': 'Педикюр',
    
    // Booking
    'booking.title': 'Забронювати',
    'booking.description': 'Забронюйте це робоче місце для ваших beauty-послуг',
    'booking.customerName': "Повне ім'я",
    'booking.customerEmail': 'Електронна пошта',
    'booking.customerPhone': 'Номер телефону',
    'booking.bookingDate': 'Дата бронювання',
    'booking.startTime': 'Час початку',
    'booking.endTime': 'Час закінчення',
    'booking.total': 'Загальна сума:',
    'booking.cancel': 'Скасувати',
    'booking.book': 'Забронювати зараз',
    'booking.booking': 'Бронюється...',
    
    // Footer
    'footer.company': 'Компанія',
    'footer.about': 'Про нас',
    'footer.career': 'Карʼєра',
    'footer.press': 'Преса',
    'footer.partner': 'Партнери',
    'footer.contact': 'Контакти',
    'footer.privacy': 'Конфіденційність',
    'footer.imprint': 'Відбиток',
    'footer.terms': 'Умови',
    'footer.rights': 'Всі права захищені.',
    
    // Language Selector
    'language.select': 'Оберіть мову',
    'language.german': 'Deutsch',
    'language.english': 'English',
    'language.ukrainian': 'Українська'
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('de');
  const [showLanguageModal, setShowLanguageModal] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('beauty-space-language') as Language;
    if (savedLanguage && ['de', 'en', 'uk'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    } else {
      // Show language selection modal for first-time visitors
      setShowLanguageModal(true);
    }
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('beauty-space-language', lang);
    setShowLanguageModal(false);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange, t }}>
      {children}
      {showLanguageModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <h2 className="text-2xl font-bold text-elegant-black mb-6 text-center">
              Welcome / Willkommen / Ласкаво просимо
            </h2>
            <p className="text-elegant-gray mb-8 text-center">
              Please select your preferred language / Bitte wählen Sie Ihre Sprache / Будь ласка, оберіть мову
            </p>
            <div className="space-y-3">
              <button
                onClick={() => handleLanguageChange('de')}
                className="w-full p-4 text-left border border-elegant-gray/20 rounded-lg hover:bg-elegant-light transition-colors duration-200 flex items-center justify-between"
              >
                <span className="font-medium">Deutsch</span>
                <span className="text-2xl">🇩🇪</span>
              </button>
              <button
                onClick={() => handleLanguageChange('en')}
                className="w-full p-4 text-left border border-elegant-gray/20 rounded-lg hover:bg-elegant-light transition-colors duration-200 flex items-center justify-between"
              >
                <span className="font-medium">English</span>
                <span className="text-2xl">🇬🇧</span>
              </button>
              <button
                onClick={() => handleLanguageChange('uk')}
                className="w-full p-4 text-left border border-elegant-gray/20 rounded-lg hover:bg-elegant-light transition-colors duration-200 flex items-center justify-between"
              >
                <span className="font-medium">Українська</span>
                <span className="text-2xl">🇺🇦</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}