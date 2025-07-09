import { users, workspaces, bookings, contacts, testimonials, type User, type InsertUser, type Workspace, type InsertWorkspace, type Booking, type InsertBooking, type Contact, type InsertContact, type Testimonial, type InsertTestimonial } from "@shared/schema";

export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Workspaces
  getWorkspaces(): Promise<Workspace[]>;
  getWorkspaceById(id: number): Promise<Workspace | undefined>;
  getWorkspacesByCategory(category: string): Promise<Workspace[]>;
  createWorkspace(workspace: InsertWorkspace): Promise<Workspace>;
  updateWorkspace(id: number, updates: Partial<InsertWorkspace>): Promise<Workspace | undefined>;

  // Bookings
  getBookings(): Promise<Booking[]>;
  getBookingById(id: number): Promise<Booking | undefined>;
  getBookingsByWorkspace(workspaceId: number): Promise<Booking[]>;
  createBooking(booking: InsertBooking): Promise<Booking>;
  updateBookingStatus(id: number, status: string): Promise<Booking | undefined>;

  // Contacts
  getContacts(): Promise<Contact[]>;
  createContact(contact: InsertContact): Promise<Contact>;

  // Testimonials
  getTestimonials(): Promise<Testimonial[]>;
  getActiveTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private workspaces: Map<number, Workspace>;
  private bookings: Map<number, Booking>;
  private contacts: Map<number, Contact>;
  private testimonials: Map<number, Testimonial>;
  private currentUserId: number;
  private currentWorkspaceId: number;
  private currentBookingId: number;
  private currentContactId: number;
  private currentTestimonialId: number;

  constructor() {
    this.users = new Map();
    this.workspaces = new Map();
    this.bookings = new Map();
    this.contacts = new Map();
    this.testimonials = new Map();
    this.currentUserId = 1;
    this.currentWorkspaceId = 1;
    this.currentBookingId = 1;
    this.currentContactId = 1;
    this.currentTestimonialId = 1;

    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample workspaces with real data from beautyspace.at
    const sampleWorkspaces: InsertWorkspace[] = [
      {
        name: "Makeup Platz",
        category: "makeup",
        description: "Professioneller Makeup-Arbeitsplatz mit Ringlicht und allen notwendigen Utensilien für perfekte Looks.",
        location: "Wien 1040",
        address: "Weyringergasse 15-17/2/2, 1040 Wien",
        hourlyRate: "10.00",
        dailyRate: "80.00",
        imageUrl: "https://static.wixstatic.com/media/28e931_dde8e2d9b5474d5f9f0ffcdc80d2f582~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/28e931_dde8e2d9b5474d5f9f0ffcdc80d2f582~mv2.jpg",
        isAvailable: true,
        features: ["Ringlicht", "Makeup-Spiegel", "Aufbewahrung", "Stuhl", "Beleuchtung"]
      },
      {
        name: "Kosmetikraum Tagesmiete Wien 1120",
        category: "kosmetik",
        description: "Vollausgestatteter Kosmetikraum mit modernster Ausstattung in zentraler Lage.",
        location: "Wien 1120",
        address: "Schönbrunnerstraße 189, 1120 Wien",
        hourlyRate: "10.00",
        dailyRate: "80.00",
        imageUrl: "https://static.wixstatic.com/media/28e931_02719cb1bbd14d59bb811c036a900a36~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/28e931_02719cb1bbd14d59bb811c036a900a36~mv2.jpg",
        isAvailable: true,
        features: ["Behandlungsliege", "Dampfgerät", "Wärmeschrank", "Desinfektionsmittel", "Handtücher"]
      },
      {
        name: "Kosmetik Raum 2 Wien 1040",
        category: "kosmetik",
        description: "Eleganter Kosmetikraum mit professioneller Ausstattung im Herzen von Wien.",
        location: "Wien 1040",
        address: "Weyringergasse 15-17/1/1, 1040 Wien",
        hourlyRate: "10.00",
        dailyRate: "80.00",
        imageUrl: "https://static.wixstatic.com/media/bff472_10e298f49d0247b682240d5f3f0ca15e~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bff472_10e298f49d0247b682240d5f3f0ca15e~mv2.jpg",
        isAvailable: true,
        features: ["Behandlungsliege", "Dampfgerät", "Wärmeschrank", "Desinfektionsmittel", "Handtücher"]
      },
      {
        name: "Kosmetik Raum Nr. 1 Wien 1070",
        category: "kosmetik",
        description: "Luxuriöser Kosmetikraum in der Hermanngasse mit exklusiver Ausstattung.",
        location: "Wien 1070",
        address: "Hermanngasse 30/3/2, 1070 Wien",
        hourlyRate: "9.75",
        dailyRate: "78.00",
        imageUrl: "https://static.wixstatic.com/media/bff472_2ea28c9ea1fd443ba110112912b9a6ac~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bff472_2ea28c9ea1fd443ba110112912b9a6ac~mv2.jpg",
        isAvailable: true,
        features: ["Behandlungsliege", "Dampfgerät", "Wärmeschrank", "Desinfektionsmittel", "Handtücher"]
      },
      {
        name: "Kosmetik Raum Nr. 2 Wien 1070",
        category: "kosmetik",
        description: "Moderner Kosmetikraum mit allem notwendigen Equipment für professionelle Behandlungen.",
        location: "Wien 1070",
        address: "Hermanngasse 30/3/2, 1070 Wien",
        hourlyRate: "10.00",
        dailyRate: "80.00",
        imageUrl: "https://static.wixstatic.com/media/bff472_2edf3684d4b040c09fc87d0786f46f4a~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bff472_2edf3684d4b040c09fc87d0786f46f4a~mv2.jpg",
        isAvailable: true,
        features: ["Behandlungsliege", "Dampfgerät", "Wärmeschrank", "Desinfektionsmittel", "Handtücher"]
      },
      {
        name: "Kosmetik Raum Nr. 3 Wien 1070",
        category: "kosmetik",
        description: "Geräumiger Kosmetikraum mit Premium-Ausstattung für anspruchsvolle Behandlungen.",
        location: "Wien 1070",
        address: "Hermanngasse 30/3/2, 1070 Wien",
        hourlyRate: "10.50",
        dailyRate: "84.00",
        imageUrl: "https://static.wixstatic.com/media/bff472_4ad51e1ca3d847be8b279b0a5c61e61b~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bff472_4ad51e1ca3d847be8b279b0a5c61e61b~mv2.jpg",
        isAvailable: true,
        features: ["Behandlungsliege", "Dampfgerät", "Wärmeschrank", "Desinfektionsmittel", "Handtücher"]
      },
      {
        name: "Friseur Platz",
        category: "friseur",
        description: "Moderner Friseur-Arbeitsplatz mit professioneller Ausstattung und Waschbecken.",
        location: "Wien 1070",
        address: "Hermanngasse 30/3/2, 1070 Wien",
        hourlyRate: "9.00",
        dailyRate: "72.00",
        imageUrl: "https://static.wixstatic.com/media/bff472_36467ff8eff449b0a4cc25dce652055c~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bff472_36467ff8eff449b0a4cc25dce652055c~mv2.jpg",
        isAvailable: true,
        features: ["Friseurstuhl", "Waschbecken", "Spiegel", "Steckdosen", "Aufbewahrung"]
      },
      {
        name: "Nageldesigner Platz",
        category: "nageldesign",
        description: "Spezialisierter Arbeitsplatz für Nageldesign mit UV-Lampe und Absaugung.",
        location: "Wien 1040",
        address: "Weyringergasse 15-17/1/1, 1040 Wien",
        hourlyRate: "6.00",
        dailyRate: "48.00",
        imageUrl: "https://static.wixstatic.com/media/bff472_812624f7044b457d928996908413f9c9~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bff472_812624f7044b457d928996908413f9c9~mv2.jpg",
        isAvailable: true,
        features: ["UV-Lampe", "Absaugung", "Arbeitstisch", "Aufbewahrung", "Beleuchtung"]
      },
      {
        name: "Fußpflege Platz",
        category: "fußpflege",
        description: "Ergonomischer Fußpflegeplatz mit allem notwendigen Equipment.",
        location: "Wien 1070",
        address: "Hermanngasse 30/3/2, 1070 Wien",
        hourlyRate: "6.00",
        dailyRate: "48.00",
        imageUrl: "https://static.wixstatic.com/media/bff472_a7f0707291dd4548adfc93a8f1f21f6d~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bff472_a7f0707291dd4548adfc93a8f1f21f6d~mv2.jpg",
        isAvailable: true,
        features: ["Fußpflegestuhl", "Instrumententisch", "Desinfektion", "Handtücher", "Beleuchtung"]
      }
    ];

    // Sample testimonials
    const sampleTestimonials: InsertTestimonial[] = [
      {
        name: "Anna Schmidt",
        profession: "Makeup Artist",
        rating: 5,
        comment: "Die Ausstattung ist einfach fantastisch! Ich kann mich voll auf meine Kunden konzentrieren, ohne mir Sorgen um die Technik machen zu müssen.",
        isActive: true
      },
      {
        name: "Maria Koller",
        profession: "Kosmetikerin",
        rating: 5,
        comment: "Flexible Buchungen und eine tolle Gemeinschaft. Ich habe hier viele wertvolle Kontakte geknüpft!",
        isActive: true
      },
      {
        name: "Stefan Maier",
        profession: "Friseur",
        rating: 5,
        comment: "Die zentrale Lage und die professionelle Atmosphäre haben mein Business auf das nächste Level gebracht.",
        isActive: true
      }
    ];

    // Add sample data
    sampleWorkspaces.forEach(workspace => {
      this.createWorkspace(workspace);
    });

    sampleTestimonials.forEach(testimonial => {
      this.createTestimonial(testimonial);
    });
  }

  // Users
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Workspaces
  async getWorkspaces(): Promise<Workspace[]> {
    return Array.from(this.workspaces.values());
  }

  async getWorkspaceById(id: number): Promise<Workspace | undefined> {
    return this.workspaces.get(id);
  }

  async getWorkspacesByCategory(category: string): Promise<Workspace[]> {
    return Array.from(this.workspaces.values()).filter(workspace => workspace.category === category);
  }

  async createWorkspace(insertWorkspace: InsertWorkspace): Promise<Workspace> {
    const id = this.currentWorkspaceId++;
    const workspace: Workspace = { 
      ...insertWorkspace, 
      id,
      isAvailable: insertWorkspace.isAvailable ?? true
    };
    this.workspaces.set(id, workspace);
    return workspace;
  }

  async updateWorkspace(id: number, updates: Partial<InsertWorkspace>): Promise<Workspace | undefined> {
    const workspace = this.workspaces.get(id);
    if (!workspace) return undefined;
    
    const updatedWorkspace = { ...workspace, ...updates };
    this.workspaces.set(id, updatedWorkspace);
    return updatedWorkspace;
  }

  // Bookings
  async getBookings(): Promise<Booking[]> {
    return Array.from(this.bookings.values());
  }

  async getBookingById(id: number): Promise<Booking | undefined> {
    return this.bookings.get(id);
  }

  async getBookingsByWorkspace(workspaceId: number): Promise<Booking[]> {
    return Array.from(this.bookings.values()).filter(booking => booking.workspaceId === workspaceId);
  }

  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const id = this.currentBookingId++;
    const booking: Booking = { 
      ...insertBooking, 
      id,
      status: insertBooking.status ?? 'pending',
      createdAt: new Date()
    };
    this.bookings.set(id, booking);
    return booking;
  }

  async updateBookingStatus(id: number, status: string): Promise<Booking | undefined> {
    const booking = this.bookings.get(id);
    if (!booking) return undefined;
    
    const updatedBooking = { ...booking, status };
    this.bookings.set(id, updatedBooking);
    return updatedBooking;
  }

  // Contacts
  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = { 
      ...insertContact, 
      id,
      type: insertContact.type ?? null,
      phone: insertContact.phone ?? null,
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  // Testimonials
  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async getActiveTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values()).filter(testimonial => testimonial.isActive);
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentTestimonialId++;
    const testimonial: Testimonial = { 
      ...insertTestimonial, 
      id,
      isActive: insertTestimonial.isActive ?? true
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }
}

export const storage = new MemStorage();
