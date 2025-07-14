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
    'booking.success': 'Buchung erfolgreich!',
    'booking.success.description': 'Ihre Buchungsanfrage wurde erfolgreich eingereicht.',
    'booking.error': 'Buchung fehlgeschlagen',
    'booking.error.description': 'Es gab ein Problem mit Ihrer Buchung. Bitte versuchen Sie es erneut.',
    'booking.dateRequired': 'Datum erforderlich',
    'booking.dateRequired.description': 'Bitte wählen Sie ein Buchungsdatum aus.',
    'booking.selectDate': 'Datum wählen',
    'booking.selectStartTime': 'Startzeit wählen',
    'booking.selectEndTime': 'Endzeit wählen',
    
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
    'language.ukrainian': 'Українська',
    
    // Features Section
    'features.title': 'Warum Beauty Space Wien wählen?',
    'features.subtitle': 'Entdecken Sie die Vorteile unserer exklusiven Beauty-Arbeitsplätze',
    'features.flexible.title': 'Flexible Buchung',
    'features.flexible.description': 'Buchen Sie stundenweise oder tageweise nach Ihren Bedürfnissen',
    'features.premium.title': 'Premium Ausstattung',
    'features.premium.description': 'Professionelle Beleuchtung, Spiegel und hochwertige Möbel',
    'features.central.title': 'Zentrale Lage',
    'features.central.description': 'Mitten in Wien, perfekt erreichbar für Ihre Kunden',
    'features.support.title': '24/7 Support',
    'features.support.description': 'Unser Team steht Ihnen jederzeit zur Verfügung',
    
    // Testimonials
    'testimonials.title': 'Was unsere Kunden sagen',
    'testimonials.subtitle': 'Erfahrungen von Beauty-Profis, die unsere Arbeitsplätze nutzen',
    
    // Testimonials Content
    'testimonial.anna.comment': 'Die Ausstattung ist einfach fantastisch! Ich kann mich voll auf meine Kunden konzentrieren, ohne mir Sorgen um die Technik machen zu müssen.',
    'testimonial.anna.name': 'Anna Schmidt',
    'testimonial.anna.profession': 'Makeup Artist',
    'testimonial.maria.comment': 'Flexible Buchungen und eine tolle Gemeinschaft. Ich habe hier viele wertvolle Kontakte geknüpft!',
    'testimonial.maria.name': 'Maria Koller',
    'testimonial.maria.profession': 'Kosmetikerin',
    'testimonial.stefan.comment': 'Die zentrale Lage und die professionelle Atmosphäre haben mein Business auf das nächste Level gebracht.',
    'testimonial.stefan.name': 'Stefan Maier',
    'testimonial.stefan.profession': 'Friseur',
    
    // Gallery
    'gallery.title': 'Unsere Arbeitsplätze',
    'gallery.subtitle': 'Entdecken Sie unsere luxuriösen Beauty-Räume',
    

    
    // Workspace Categories
    'workspace.makeup': 'Makeup Studio',
    'workspace.kosmetik': 'Kosmetikbehandlung',
    'workspace.friseur': 'Friseur Salon',
    'workspace.nageldesign': 'Nageldesign Studio',
    'workspace.fusspflege': 'Fußpflege Behandlung',
    'workspace.per.hour': 'pro Stunde',
    'workspace.per.day': 'pro Tag',
    
    // Workspace Card
    'workspace.book': 'Buchen',
    'workspace.unavailable': 'Nicht verfügbar',
    'workspace.more': 'mehr',
    'workspace.from': 'ab',
    'workspace.per.day.short': '/Tag',
    'workspace.per.hour.short': '/Std',
    'workspace.available': 'Verfügbar',
    
    // Workspace Features (German)
    'feature.professional.lighting': 'Professionelle Beleuchtung',
    'feature.makeup.station': 'Makeup-Station',
    'feature.storage': 'Aufbewahrung',
    'feature.mirror': 'Spiegel',
    'feature.chair': 'Stuhl',
    'feature.kosmetikliege': 'Kosmetikliege',
    'feature.sterilisation': 'Sterilisation',
    'feature.schrank': 'Schrank',
    'feature.waschbecken': 'Waschbecken',
    'feature.beleuchtung': 'Beleuchtung',
    'feature.friseurplatz': 'Friseurplatz',
    'feature.foenhaartrockner': 'Föhn/Haartrockner',
    'feature.haarwaschbecken': 'Haarwaschbecken',
    'feature.handtucher': 'Handtücher',
    'feature.uv.lampe': 'UV-Lampe',
    'feature.absaugung': 'Absaugung',
    'feature.arbeitstisch': 'Arbeitstisch',
    'feature.aufbewahrung': 'Aufbewahrung',
    'feature.fusspflegestuhl': 'Fußpflegestuhl',
    'feature.instrumententisch': 'Instrumententisch',
    'feature.desinfektion': 'Desinfektion',
    
    // Franchise Page
    'franchise.title': 'Franchise-Möglichkeiten',
    'franchise.subtitle': 'Werden Sie Teil unseres erfolgreichen Beauty Space Netzwerks und starten Sie Ihr eigenes Business mit bewährten Konzepten und professioneller Unterstützung',
    'franchise.request.success': 'Anfrage erfolgreich gesendet!',
    'franchise.request.success.description': 'Wir werden uns bald bei Ihnen melden.',
    'franchise.request.error': 'Fehler beim Senden',
    'franchise.request.error.description': 'Bitte versuchen Sie es später erneut.',
    
    // Services Page
    'services.title': 'Unsere Arbeitsplätze',
    'services.subtitle': 'Professionell ausgestattete Arbeitsplätze für alle Beauty-Bereiche',
    'services.search.placeholder': 'Arbeitsplatz suchen...',
    'services.category.all': 'Alle Arbeitsplätze',
    'services.category.makeup': 'Makeup',
    'services.category.kosmetik': 'Kosmetik',
    'services.category.friseur': 'Friseur',
    'services.category.nageldesign': 'Nageldesign',
    'services.category.fusspflege': 'Fußpflege',
    
    // Additional Features
    'features.inspiring.title': 'Inspiring Environment',
    'features.inspiring.description': 'Connect with other beauty professionals and expand your network',
    'features.hygiene.title': 'Hygiene & Safety',
    'features.hygiene.description': 'Highest hygiene standards and professional cleaning systems for your safety',
    
    // Gallery Page
    'gallery.filters.all': 'Alle Bilder',
    'gallery.filters.salon': 'Salon',
    'gallery.filters.makeup': 'Makeup',
    'gallery.filters.spa': 'Kosmetik',
    'gallery.filters.hair': 'Friseur',
    'gallery.filters.nails': 'Nageldesign',
    'gallery.spaces.title': 'Unsere Beauty Spaces',
    'gallery.spaces.subtitle': 'Entdecken Sie unsere luxuriösen Arbeitsplätze und inspirierenden Räumlichkeiten',
    
    // About Us Section
    'about.title': 'Über uns',
    'about.subtitle': 'Willkommen bei Beauty Space Wien, Ihrem Anlaufpunkt für hochwertige Arbeitsplätze und professionelle Beauty-Technik.',
    'about.description1': 'Neben spezialisierten Arbeitsplätzen bieten wir Ihnen moderne Ausstattung für saubere, hygienische Arbeitsumgebungen und Kosmetikmaschinen, die modernste Technologien für Hautpflege und ästhetische Behandlungen einsetzen.',
    'about.description2': 'Unser flexibler Arbeitsplatz ist perfekt für Beauty-Profis, die nach Erfolg streben. Mit modernen und professionell ausgestatteten Räumlichkeiten bieten wir die ideale Umgebung für erstklassige Dienstleistungen. Du kannst dich in einem inspirierenden Umfeld mit anderen Beauty-Experten vernetzen, Ideen austauschen und gemeinsam wachsen.',
    'about.cta': 'Unsere Arbeitsplätze entdecken',
    
    // How It Works Section
    'how.title': 'Wie funktioniert es?',
    'how.subtitle': 'In nur wenigen Schritten zu Ihrem perfekten Beauty-Arbeitsplatz',
    'how.individual.title': 'Individuelle Arbeitsplätze',
    'how.individual.description': 'Wir stellen voll ausgestattete Arbeitsplätze in unseren Beauty-Salons zur Verfügung, damit du direkt loslegen kannst. Jeder Arbeitsplatz ist ergonomisch gestaltet und mit hochwertigen Geräten ausgestattet.',
    'how.support.title': 'Unterstützung und Beratung',
    'how.support.description': 'Unser engagiertes Team steht dir zur Seite und bietet dir Unterstützung und Beratung in verschiedenen Bereichen, wie beispielsweise Geschäftsentwicklung, Marketing oder Kundenakquise.',
    'how.flexibility.title': 'Flexibilität',
    'how.flexibility.description': 'Wir bieten flexible Mietoptionen an, damit du deine Arbeitszeiten anpassen und deinen Bedürfnissen gerecht werden kannst. Du kannst die Räumlichkeiten stunden- oder tageweise, aber auch langfristig mieten.',
    
    // Target Audience Section
    'target.title': 'Für wen ist ein Beauty Space geeignet?',
    'target.subtitle': 'Unsere Arbeitsplätze sind perfekt für verschiedene Beauty-Profis',
    'target.hairdresser': 'Friseure',
    'target.cosmetician': 'Kosmetiker',
    'target.makeup': 'Make-up-Artists',
    'target.nail': 'Nageltechniker',
    'target.skincare': 'Hautpflegetechniker',
    'target.visagist': 'Visagisten',
    'target.stylist': 'Hairstylisten',
    'target.therapist': 'Beautytherapeuten',
    'target.lash': 'Wimpernstylisten',
    'target.massage': 'Massage-Therapeuten',
    'target.colorist': 'Haarfärbespezialisten',
    'target.consultant': 'Schönheitsberater',
    
    // Franchise Benefits
    'franchise.benefits.title': 'Vorteile des Franchisings',
    'franchise.benefit1.title': 'Bewährtes Konzept',
    'franchise.benefit1.description': 'Profitieren Sie von unserem erprobten Geschäftsmodell und etablierten Prozessen.',
    'franchise.benefit2.title': 'Umfassende Schulung',
    'franchise.benefit2.description': 'Vollständige Ausbildung und laufende Unterstützung für Ihren Erfolg.',
    'franchise.benefit3.title': 'Marketing Support',
    'franchise.benefit3.description': 'Professionelle Marketingstrategien und Werbekampagnen inklusive.',
    
    // Franchise Why Choose Us
    'franchise.why.title': 'Warum Beauty Space Franchise?',
    'franchise.why.brand.title': 'Starke Marke',
    'franchise.why.brand.description': 'Etablierte Marke mit hoher Wiedererkennungswert in der Beauty-Branche',
    'franchise.why.processes.title': 'Bewährte Prozesse',
    'franchise.why.processes.description': 'Standardisierte Abläufe und erprobte Geschäftsprozesse',
    'franchise.why.support.title': 'Kontinuierliche Unterstützung',
    'franchise.why.support.description': 'Laufende Betreuung durch unser erfahrenes Team',
    'franchise.why.territory.title': 'Exklusive Gebiete',
    'franchise.why.territory.description': 'Gebietsschutz für Ihren Standort und nachhaltigen Erfolg',
    'franchise.why.investment.title': 'Flexible Investition',
    'franchise.why.investment.description': 'Verschiedene Investitionsmöglichkeiten je nach Standort',
    'franchise.why.roi.title': 'Schnelle Amortisation',
    'franchise.why.roi.description': 'Attraktive Rendite und schnelle Rückzahlung der Investition',
    
    // Franchise Stats
    'franchise.stats.title': 'Unsere Erfolgszahlen',
    'franchise.stats.locations': 'Standorte in Wien',
    'franchise.stats.customers': 'Zufriedene Kunden',
    'franchise.stats.satisfaction': 'Auslastung',
    'franchise.stats.experience': 'Jahre Erfahrung',
    
    // Franchise Form
    'franchise.form.title': 'Franchise Informationen Anfordern',
    'franchise.form.subtitle': 'Kontaktieren Sie uns für ein persönliches Beratungsgespräch',
    'franchise.form.name': 'Name',
    'franchise.form.email': 'E-Mail',
    'franchise.form.phone': 'Telefon',
    'franchise.form.message': 'Nachricht',
    'franchise.form.placeholder': 'Erzählen Sie uns von Ihrem Interesse an einer Franchise...',
    
    // Contact & Locations
    'contact.title': 'Kontakt & Standorte',
    'contact.subtitle': 'Besuchen Sie uns in einem unserer Standorte oder kontaktieren Sie uns für weitere Informationen',
    'contact.form.title': 'Kontaktieren Sie uns',
    'contact.form.name': 'Name',
    'contact.form.email': 'E-Mail',
    'contact.form.phone': 'Telefon',
    'contact.form.message': 'Nachricht',
    'contact.form.message.placeholder': 'Ihre Nachricht...',
    'contact.form.submit': 'Nachricht Senden',
    'contact.sending': 'Wird gesendet...',
    'contact.success': 'Vielen Dank für Ihre Nachricht!',
    'contact.success.description': 'Wir werden uns in Kürze bei Ihnen melden.',
    'contact.error': 'Fehler beim Senden',
    'contact.error.description': 'Bitte versuchen Sie es später erneut.',
    'contact.hours.title': 'Öffnungszeiten',
    'contact.hours.weekdays': 'Montag - Freitag: 8:00 - 20:00',
    'contact.hours.saturday': 'Samstag: 9:00 - 18:00',
    'contact.hours.sunday': 'Sonntag: Geschlossen',
    'contact.faq.title': 'Häufig gestellte Fragen',
    'contact.faq.booking.question': 'Wie kann ich einen Arbeitsplatz buchen?',
    'contact.faq.booking.answer': 'Sie können einen Arbeitsplatz direkt über unsere Website buchen oder uns telefonisch kontaktieren. Wir bieten flexible Buchungsoptionen von Stunden bis zu Monatsmieten.',
    'contact.faq.included.question': 'Was ist in der Miete enthalten?',
    'contact.faq.included.answer': 'Die Miete umfasst die Nutzung des vollständig ausgestatteten Arbeitsplatzes, Reinigung, Strom, Wasser und grundlegende Verbrauchsmaterialien. Spezielle Produkte können separat erworben werden.',
    'contact.faq.shortterm.question': 'Kann ich auch kurzfristig buchen?',
    'contact.faq.shortterm.answer': 'Ja, kurzfristige Buchungen sind möglich, sofern der gewünschte Arbeitsplatz verfügbar ist. Wir empfehlen jedoch eine Voranmeldung, um sicherzustellen, dass Ihr Wunschtermin verfügbar ist.',
    'contact.faq.training.question': 'Bieten Sie auch Schulungen an?',
    'contact.faq.training.answer': 'Ja, wir bieten regelmäßig Schulungen und Workshops für Beauty-Profis an. Diese umfassen neue Techniken, Produktschulungen und Geschäftsentwicklung.'
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
    'booking.success': 'Booking Successful!',
    'booking.success.description': 'Your booking request has been successfully submitted.',
    'booking.error': 'Booking Failed',
    'booking.error.description': 'There was a problem with your booking. Please try again.',
    'booking.dateRequired': 'Date Required',
    'booking.dateRequired.description': 'Please select a booking date.',
    'booking.selectDate': 'Select Date',
    'booking.selectStartTime': 'Select Start Time',
    'booking.selectEndTime': 'Select End Time',
    
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
    'language.ukrainian': 'Українська',
    
    // Features Section
    'features.title': 'Why Choose Beauty Space Wien?',
    'features.subtitle': 'Discover the benefits of our exclusive beauty workspaces',
    'features.flexible.title': 'Flexible Booking',
    'features.flexible.description': 'Book by hour or day according to your needs',
    'features.premium.title': 'Premium Equipment',
    'features.premium.description': 'Professional lighting, mirrors and high-quality furniture',
    'features.central.title': 'Central Location',
    'features.central.description': 'In the heart of Vienna, perfectly accessible for your clients',
    'features.support.title': '24/7 Support',
    'features.support.description': 'Our team is available to assist you anytime',
    
    // Testimonials
    'testimonials.title': 'What Our Customers Say',
    'testimonials.subtitle': 'Experiences from beauty professionals who use our workspaces',
    
    // Testimonials Content
    'testimonial.anna.comment': 'The equipment is simply fantastic! I can focus completely on my clients without worrying about the technology.',
    'testimonial.anna.name': 'Anna Schmidt',
    'testimonial.anna.profession': 'Makeup Artist',
    'testimonial.maria.comment': 'Flexible bookings and a great community. I have made many valuable contacts here!',
    'testimonial.maria.name': 'Maria Koller',
    'testimonial.maria.profession': 'Cosmetician',
    'testimonial.stefan.comment': 'The central location and professional atmosphere have taken my business to the next level.',
    'testimonial.stefan.name': 'Stefan Maier',
    'testimonial.stefan.profession': 'Hairdresser',
    
    // Gallery
    'gallery.title': 'Our Workspaces',
    'gallery.subtitle': 'Discover our luxurious beauty rooms',
    

    
    // Workspace Categories
    'workspace.makeup': 'Makeup Studio',
    'workspace.kosmetik': 'Cosmetic Treatment',
    'workspace.friseur': 'Hair Salon',
    'workspace.nageldesign': 'Nail Design Studio',
    'workspace.fusspflege': 'Foot Care Treatment',
    'workspace.per.hour': 'per hour',
    'workspace.per.day': 'per day',
    
    // Workspace Card
    'workspace.book': 'Book',
    'workspace.unavailable': 'Unavailable',
    'workspace.more': 'more',
    'workspace.from': 'from',
    'workspace.per.day.short': '/day',
    'workspace.per.hour.short': '/hr',
    'workspace.available': 'Available',
    
    // Workspace Features (English)
    'feature.professional.lighting': 'Professional Lighting',
    'feature.makeup.station': 'Makeup Station',
    'feature.storage': 'Storage',
    'feature.mirror': 'Mirror',
    'feature.chair': 'Chair',
    'feature.kosmetikliege': 'Cosmetic Bed',
    'feature.sterilisation': 'Sterilization',
    'feature.schrank': 'Cabinet',
    'feature.waschbecken': 'Sink',
    'feature.beleuchtung': 'Lighting',
    'feature.friseurplatz': 'Hair Station',
    'feature.foenhaartrockner': 'Hair Dryer',
    'feature.haarwaschbecken': 'Hair Washing Sink',
    'feature.handtucher': 'Towels',
    'feature.uv.lampe': 'UV Lamp',
    'feature.absaugung': 'Ventilation',
    'feature.arbeitstisch': 'Work Table',
    'feature.aufbewahrung': 'Storage',
    'feature.fusspflegestuhl': 'Pedicure Chair',
    'feature.instrumententisch': 'Instrument Table',
    'feature.desinfektion': 'Disinfection',
    
    // Franchise Page
    'franchise.title': 'Franchise Opportunities',
    'franchise.subtitle': 'Join our successful Beauty Space network and start your own business with proven concepts and professional support',
    'franchise.request.success': 'Request sent successfully!',
    'franchise.request.success.description': 'We will contact you soon.',
    'franchise.request.error': 'Error sending request',
    'franchise.request.error.description': 'Please try again later.',
    
    // Services Page
    'services.title': 'Our Workspaces',
    'services.subtitle': 'Professionally equipped workspaces for all beauty areas',
    'services.search.placeholder': 'Search workspace...',
    'services.category.all': 'All Workspaces',
    'services.category.makeup': 'Makeup',
    'services.category.kosmetik': 'Cosmetics',
    'services.category.friseur': 'Hair',
    'services.category.nageldesign': 'Nail Design',
    'services.category.fusspflege': 'Foot Care',
    
    // Additional Features
    'features.inspiring.title': 'Inspiring Environment',
    'features.inspiring.description': 'Connect with other beauty professionals and expand your network',
    'features.hygiene.title': 'Hygiene & Safety',
    'features.hygiene.description': 'Highest hygiene standards and professional cleaning systems for your safety',
    
    // Gallery Page
    'gallery.filters.all': 'All Images',
    'gallery.filters.salon': 'Salon',
    'gallery.filters.makeup': 'Makeup',
    'gallery.filters.spa': 'Cosmetics',
    'gallery.filters.hair': 'Hair',
    'gallery.filters.nails': 'Nail Design',
    'gallery.spaces.title': 'Our Beauty Spaces',
    'gallery.spaces.subtitle': 'Discover our luxurious workspaces and inspiring environments',
    
    // About Us Section
    'about.title': 'About Us',
    'about.subtitle': 'Welcome to Beauty Space Wien, your destination for high-quality workspaces and professional beauty technology.',
    'about.description1': 'In addition to specialized workspaces, we offer you modern equipment for clean, hygienic work environments and cosmetic machines that use the latest technologies for skincare and aesthetic treatments.',
    'about.description2': 'Our flexible workspace is perfect for beauty professionals striving for success. With modern and professionally equipped spaces, we provide the ideal environment for first-class services. You can network with other beauty experts in an inspiring environment, exchange ideas and grow together.',
    'about.cta': 'Discover Our Workspaces',
    
    
    // How It Works Section
    'how.title': 'How It Works',
    'how.subtitle': 'In just a few steps to your perfect beauty workspace',
    'how.individual.title': 'Individual Workspaces',
    'how.individual.description': 'We provide fully equipped workspaces in our beauty salons so you can get started right away. Each workspace is ergonomically designed and equipped with high-quality devices.',
    'how.support.title': 'Support and Consultation',
    'how.support.description': 'Our dedicated team is by your side and offers support and consultation in various areas, such as business development, marketing or customer acquisition.',
    'how.flexibility.title': 'Flexibility',
    'how.flexibility.description': 'We offer flexible rental options so you can adjust your working hours and meet your needs. You can rent the spaces hourly or daily, but also for longer periods.',
    
    // Target Audience Section
    'target.title': 'Who is a Beauty Space suitable for?',
    'target.subtitle': 'Our workspaces are perfect for various beauty professionals',
    'target.hairdresser': 'Hairdressers',
    'target.cosmetician': 'Cosmeticians',
    'target.makeup': 'Make-up Artists',
    'target.nail': 'Nail Technicians',
    'target.skincare': 'Skincare Technicians',
    'target.visagist': 'Visagists',
    'target.stylist': 'Hair Stylists',
    'target.therapist': 'Beauty Therapists',
    'target.lash': 'Lash Stylists',
    'target.massage': 'Massage Therapists',
    'target.colorist': 'Hair Color Specialists',
    'target.consultant': 'Beauty Consultants',
    
    // Franchise Benefits
    'franchise.benefits.title': 'Franchise Benefits',
    'franchise.benefit1.title': 'Proven Concept',
    'franchise.benefit1.description': 'Benefit from our proven business model and established processes.',
    'franchise.benefit2.title': 'Comprehensive Training',
    'franchise.benefit2.description': 'Complete training and ongoing support for your success.',
    'franchise.benefit3.title': 'Marketing Support',
    'franchise.benefit3.description': 'Professional marketing strategies and advertising campaigns included.',
    
    // Franchise Why Choose Us
    'franchise.why.title': 'Why Beauty Space Franchise?',
    'franchise.why.brand.title': 'Strong Brand',
    'franchise.why.brand.description': 'Established brand with high recognition value in the beauty industry',
    'franchise.why.processes.title': 'Proven Processes',
    'franchise.why.processes.description': 'Standardized procedures and proven business processes',
    'franchise.why.support.title': 'Continuous Support',
    'franchise.why.support.description': 'Ongoing support from our experienced team',
    'franchise.why.territory.title': 'Exclusive Territories',
    'franchise.why.territory.description': 'Territory protection for your location and sustainable success',
    'franchise.why.investment.title': 'Flexible Investment',
    'franchise.why.investment.description': 'Various investment options depending on location',
    'franchise.why.roi.title': 'Quick ROI',
    'franchise.why.roi.description': 'Attractive returns and quick payback of investment',
    
    // Franchise Stats
    'franchise.stats.title': 'Our Success Numbers',
    'franchise.stats.locations': 'Locations in Vienna',
    'franchise.stats.customers': 'Satisfied Customers',
    'franchise.stats.satisfaction': 'Utilization',
    'franchise.stats.experience': 'Years Experience',
    
    // Franchise Form
    'franchise.form.title': 'Request Franchise Information',
    'franchise.form.subtitle': 'Contact us for a personal consultation',
    'franchise.form.name': 'Name',
    'franchise.form.email': 'Email',
    'franchise.form.phone': 'Phone',
    'franchise.form.message': 'Message',
    'franchise.form.placeholder': 'Tell us about your interest in a franchise...',
    
    // Contact & Locations
    'contact.title': 'Contact & Locations',
    'contact.subtitle': 'Visit us at one of our locations or contact us for more information',
    'contact.form.title': 'Contact Us',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Your message...',
    'contact.form.submit': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success': 'Thank you for your message!',
    'contact.success.description': 'We will contact you shortly.',
    'contact.error': 'Error sending message',
    'contact.error.description': 'Please try again later.',
    'contact.hours.title': 'Opening Hours',
    'contact.hours.weekdays': 'Monday - Friday: 8:00 - 20:00',
    'contact.hours.saturday': 'Saturday: 9:00 - 18:00',
    'contact.hours.sunday': 'Sunday: Closed',
    'contact.faq.title': 'Frequently Asked Questions',
    'contact.faq.booking.question': 'How can I book a workspace?',
    'contact.faq.booking.answer': 'You can book a workspace directly through our website or contact us by phone. We offer flexible booking options from hours to monthly rentals.',
    'contact.faq.included.question': 'What is included in the rental?',
    'contact.faq.included.answer': 'The rental includes the use of the fully equipped workspace, cleaning, electricity, water and basic consumables. Special products can be purchased separately.',
    'contact.faq.shortterm.question': 'Can I also book short-term?',
    'contact.faq.shortterm.answer': 'Yes, short-term bookings are possible if the desired workspace is available. However, we recommend advance booking to ensure your preferred time is available.',
    'contact.faq.training.question': 'Do you also offer training?',
    'contact.faq.training.answer': 'Yes, we regularly offer training and workshops for beauty professionals. These include new techniques, product training and business development.'
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
    'booking.success': 'Бронювання успішне!',
    'booking.success.description': 'Ваш запит на бронювання було успішно надіслано.',
    'booking.error': 'Помилка бронювання',
    'booking.error.description': 'Виникла проблема з вашим бронюванням. Будь ласка, спробуйте знову.',
    'booking.dateRequired': 'Потрібна дата',
    'booking.dateRequired.description': 'Будь ласка, виберіть дату бронювання.',
    'booking.selectDate': 'Оберіть дату',
    'booking.selectStartTime': 'Оберіть час початку',
    'booking.selectEndTime': 'Оберіть час закінчення',
    
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
    'language.ukrainian': 'Українська',
    
    // Features Section
    'features.title': 'Чому варто обрати Beauty Space Wien?',
    'features.subtitle': 'Відкрийте переваги наших ексклюзивних beauty-робочих місць',
    'features.flexible.title': 'Гнучке Бронювання',
    'features.flexible.description': 'Бронюйте погодинно або подобово відповідно до ваших потреб',
    'features.premium.title': 'Преміум Обладнання',
    'features.premium.description': 'Професійне освітлення, дзеркала та високоякісні меблі',
    'features.central.title': 'Центральне Розташування',
    'features.central.description': 'В самому центрі Відня, ідеально доступно для ваших клієнтів',
    'features.support.title': 'Підтримка 24/7',
    'features.support.description': 'Наша команда завжди готова вам допомогти',
    
    // Testimonials
    'testimonials.title': 'Що Кажуть Наші Клієнти',
    'testimonials.subtitle': 'Досвід beauty-професіоналів, які користуються нашими робочими місцями',
    
    // Testimonials Content
    'testimonial.anna.comment': 'Обладнання просто фантастичне! Я можу повністю зосередитися на своїх клієнтах, не турбуючись про техніку.',
    'testimonial.anna.name': 'Анна Шмідт',
    'testimonial.anna.profession': 'Makeup Artist',
    'testimonial.maria.comment': 'Гнучкі бронювання та чудове співтовариство. Я знайшла тут багато цінних контактів!',
    'testimonial.maria.name': 'Марія Коллер',
    'testimonial.maria.profession': 'Косметолог',
    'testimonial.stefan.comment': 'Центральне розташування та професійна атмосфера підняли мій бізнес на новий рівень.',
    'testimonial.stefan.name': 'Стефан Майер',
    'testimonial.stefan.profession': 'Перукар',
    
    // Gallery
    'gallery.title': 'Наші Робочі Місця',
    'gallery.subtitle': 'Відкрийте наші розкішні beauty-кімнати',
    

    
    // Workspace Categories
    'workspace.makeup': 'Makeup Студія',
    'workspace.kosmetik': 'Косметичні Процедури',
    'workspace.friseur': 'Перукарський Салон',
    'workspace.nageldesign': 'Студія Нейл-Дизайну',
    'workspace.fusspflege': 'Процедури Педикюру',
    'workspace.per.hour': 'за годину',
    'workspace.per.day': 'за день',
    
    // Workspace Card
    'workspace.book': 'Забронювати',
    'workspace.unavailable': 'Недоступно',
    'workspace.more': 'більше',
    'workspace.from': 'від',
    'workspace.per.day.short': '/день',
    'workspace.per.hour.short': '/год',
    'workspace.available': 'Доступно',
    
    // Workspace Features (Ukrainian)
    'feature.professional.lighting': 'Професійне Освітлення',
    'feature.makeup.station': 'Makeup Станція',
    'feature.storage': 'Зберігання',
    'feature.mirror': 'Дзеркало',
    'feature.chair': 'Стілець',
    'feature.kosmetikliege': 'Косметична Кушетка',
    'feature.sterilisation': 'Стерилізація',
    'feature.schrank': 'Шафа',
    'feature.waschbecken': 'Раковина',
    'feature.beleuchtung': 'Освітлення',
    'feature.friseurplatz': 'Перукарське Місце',
    'feature.foenhaartrockner': 'Фен',
    'feature.haarwaschbecken': 'Мийка для Волосся',
    'feature.handtucher': 'Рушники',
    'feature.uv.lampe': 'УФ Лампа',
    'feature.absaugung': 'Вентиляція',
    'feature.arbeitstisch': 'Робочий Стіл',
    'feature.aufbewahrung': 'Зберігання',
    'feature.fusspflegestuhl': 'Педикюрне Крісло',
    'feature.instrumententisch': 'Стіл для Інструментів',
    'feature.desinfektion': 'Дезінфекція',
    
    // Franchise Page
    'franchise.title': 'Франшизні Можливості',
    'franchise.subtitle': 'Приєднуйтесь до нашої успішної мережі Beauty Space і відкрийте власний бізнес з перевіреними концепціями та професійною підтримкою',
    'franchise.request.success': 'Запит успішно надіслано!',
    'franchise.request.success.description': 'Ми звʼяжемося з вами найближчим часом.',
    'franchise.request.error': 'Помилка при надсиланні',
    'franchise.request.error.description': 'Будь ласка, спробуйте пізніше.',
    
    // Services Page
    'services.title': 'Наші Робочі Місця',
    'services.subtitle': 'Професійно обладнані робочі місця для всіх сфер краси',
    'services.search.placeholder': 'Пошук робочого місця...',
    'services.category.all': 'Всі Робочі Місця',
    'services.category.makeup': 'Makeup',
    'services.category.kosmetik': 'Косметика',
    'services.category.friseur': 'Перукарня',
    'services.category.nageldesign': 'Нейл-Дизайн',
    'services.category.fusspflege': 'Педикюр',
    
    // Additional Features
    'features.inspiring.title': 'Надихаюче Середовище',
    'features.inspiring.description': 'Повʼязуйтесь з іншими beauty-професіоналами та розширюйте свою мережу',
    'features.hygiene.title': 'Гігієна та Безпека',
    'features.hygiene.description': 'Найвищі стандарти гігієни та професійні системи очищення для вашої безпеки',
    
    // Gallery Page
    'gallery.filters.all': 'Всі Зображення',
    'gallery.filters.salon': 'Салон',
    'gallery.filters.makeup': 'Makeup',
    'gallery.filters.spa': 'Косметика',
    'gallery.filters.hair': 'Перукарня',
    'gallery.filters.nails': 'Нейл-Дизайн',
    'gallery.spaces.title': 'Наші Beauty Spaces',
    'gallery.spaces.subtitle': 'Відкрийте наші розкішні робочі місця та натхненні середовища',
    
    // About Us Section
    'about.title': 'Про Нас',
    'about.subtitle': 'Ласкаво просимо до Beauty Space Wien, вашого пункту призначення для високоякісних робочих місць та професійних beauty-технологій.',
    'about.description1': 'Окрім спеціалізованих робочих місць, ми пропонуємо сучасне обладнання для чистих, гігієнічних робочих середовищ та косметичні машини з новітніми технологіями для догляду за шкірою та естетичних процедур.',
    'about.description2': 'Наше гнучке робоче місце ідеально підходить для beauty-професіоналів, які прагнуть успіху. З сучасними та професійно обладнаними приміщеннями ми надаємо ідеальне середовище для першокласних послуг. Ви можете налагодити мережу з іншими beauty-експертами в надихаючому середовищі, обмінятися ідеями та зростати разом.',
    'about.cta': 'Відкрийте Наші Робочі Місця',
    
    // How It Works Section
    'how.title': 'Як Це Працює',
    'how.subtitle': 'Лише кілька кроків до вашого ідеального beauty-робочого місця',
    'how.individual.title': 'Індивідуальні Робочі Місця',
    'how.individual.description': 'Ми надаємо повністю обладнані робочі місця в наших beauty-салонах, щоб ви могли почати відразу. Кожне робоче місце ергономічно спроектоване та оснащене високоякісним обладнанням.',
    'how.support.title': 'Підтримка та Консультації',
    'how.support.description': 'Наша відданіа команда поруч з вами і пропонує підтримку та консультації в різних сферах, таких як розвиток бізнесу, маркетинг або залучення клієнтів.',
    'how.flexibility.title': 'Гнучкість',
    'how.flexibility.description': 'Ми пропонуємо гнучкі варіанти оренди, щоб ви могли налаштувати свій робочий час відповідно до своїх потреб. Ви можете орендувати приміщення погодинно або подобово, а також на тривалий термін.',
    
    // Target Audience Section
    'target.title': 'Для кого підходить Beauty Space?',
    'target.subtitle': 'Наші робочі місця ідеально підходять для різних beauty-професіоналів',
    'target.hairdresser': 'Перукарі',
    'target.cosmetician': 'Косметологи',
    'target.makeup': 'Makeup-Артисти',
    'target.nail': 'Нейл-Технікі',
    'target.skincare': 'Технікі з Догляду за Шкірою',
    'target.visagist': 'Візажисти',
    'target.stylist': 'Стилісти',
    'target.therapist': 'Beauty-Терапевти',
    'target.lash': 'Lash-Стилісти',
    'target.massage': 'Масажисти',
    'target.colorist': 'Колористи',
    'target.consultant': 'Beauty-Консультанти',
    
    // Franchise Benefits
    'franchise.benefits.title': 'Переваги Франшизи',
    'franchise.benefit1.title': 'Перевірена Концепція',
    'franchise.benefit1.description': 'Скористайтеся нашою перевіреною бізнес-моделлю та встановленими процесами.',
    'franchise.benefit2.title': 'Комплексне Навчання',
    'franchise.benefit2.description': 'Повне навчання та постійна підтримка для вашого успіху.',
    'franchise.benefit3.title': 'Маркетингова Підтримка',
    'franchise.benefit3.description': 'Професійні маркетингові стратегії та рекламні кампанії включено.',
    
    // Franchise Why Choose Us
    'franchise.why.title': 'Чому Beauty Space Франшиза?',
    'franchise.why.brand.title': 'Сильний Бренд',
    'franchise.why.brand.description': 'Встановлений бренд з високою цінністю визнання в beauty-індустрії',
    'franchise.why.processes.title': 'Перевірені Процеси',
    'franchise.why.processes.description': 'Стандартизовані процедури та перевірені бізнес-процеси',
    'franchise.why.support.title': 'Постійна Підтримка',
    'franchise.why.support.description': 'Постійна підтримка нашої досвідченої команди',
    'franchise.why.territory.title': 'Ексклюзивні Території',
    'franchise.why.territory.description': 'Захист території для вашого місця розташування та сталого успіху',
    'franchise.why.investment.title': 'Гнучкі Інвестиції',
    'franchise.why.investment.description': 'Різні варіанти інвестицій залежно від місця розташування',
    'franchise.why.roi.title': 'Швидка Окупність',
    'franchise.why.roi.description': 'Привабливі доходи та швидка окупність інвестицій',
    
    // Franchise Stats
    'franchise.stats.title': 'Наші Цифри Успіху',
    'franchise.stats.locations': 'Локації у Відні',
    'franchise.stats.customers': 'Задоволені Клієнти',
    'franchise.stats.satisfaction': 'Завантаженість',
    'franchise.stats.experience': 'Років Досвіду',
    
    // Franchise Form
    'franchise.form.title': 'Запитати Інформацію про Франшизу',
    'franchise.form.subtitle': 'Звʼяжіться з нами для персональної консультації',
    'franchise.form.name': 'Імʼя',
    'franchise.form.email': 'Електронна Пошта',
    'franchise.form.phone': 'Телефон',
    'franchise.form.message': 'Повідомлення',
    'franchise.form.placeholder': 'Розкажіть нам про ваш інтерес до франшизи...',
    
    // Contact & Locations
    'contact.title': 'Контакти та Локації',
    'contact.subtitle': 'Відвідайте нас в одній з наших локацій або звʼяжіться з нами для додаткової інформації',
    'contact.form.title': 'Звʼяжіться з Нами',
    'contact.form.name': 'Імʼя',
    'contact.form.email': 'Електронна Пошта',
    'contact.form.phone': 'Телефон',
    'contact.form.message': 'Повідомлення',
    'contact.form.message.placeholder': 'Ваше повідомлення...',
    'contact.form.submit': 'Надіслати Повідомлення',
    'contact.sending': 'Надсилається...',
    'contact.success': 'Дякуємо за ваше повідомлення!',
    'contact.success.description': 'Ми звʼяжемося з вами найближчим часом.',
    'contact.error': 'Помилка при надсиланні',
    'contact.error.description': 'Будь ласка, спробуйте пізніше.',
    'contact.hours.title': 'Години Роботи',
    'contact.hours.weekdays': 'Понеділок - Пʼятниця: 8:00 - 20:00',
    'contact.hours.saturday': 'Субота: 9:00 - 18:00',
    'contact.hours.sunday': 'Неділя: Зачинено',
    'contact.faq.title': 'Часті Питання',
    'contact.faq.booking.question': 'Як я можу забронювати робоче місце?',
    'contact.faq.booking.answer': 'Ви можете забронювати робоче місце безпосередньо через наш сайт або звʼязатися з нами по телефону. Ми пропонуємо гнучкі варіанти бронювання від годин до місячної оренди.',
    'contact.faq.included.question': 'Що включено в оренду?',
    'contact.faq.included.answer': 'Оренда включає використання повністю обладнаного робочого місця, прибирання, електрику, воду та основні витратні матеріали. Спеціальні продукти можна придбати окремо.',
    'contact.faq.shortterm.question': 'Чи можу я бронювати короткостроково?',
    'contact.faq.shortterm.answer': 'Так, короткострокові бронювання можливі, якщо бажане робоче місце доступне. Однак ми рекомендуємо попереднє бронювання, щоб забезпечити доступність вашого бажаного часу.',
    'contact.faq.training.question': 'Чи пропонуєте ви також навчання?',
    'contact.faq.training.answer': 'Так, ми регулярно пропонуємо навчання та майстер-класи для beauty-професіоналів. Вони включають нові техніки, навчання продуктам та розвиток бізнесу.'
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