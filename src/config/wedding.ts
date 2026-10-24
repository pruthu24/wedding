/**
 * Every piece of copy, every name, date, venue, link and image lives here.
 * Nothing else in the site hard-codes wedding content — change it once
 * and the whole experience re-skins itself.
 */

export type EventVariant = 'reception' | 'wedding';

export interface WeddingEvent {
  id: string;
  name: string;
  date: string;
  venue: string;
  time: string;
  cta: string;
  /** Google Maps (or any) link opened by the card's CTA. */
  routeUrl: string;
  /** Selects which hand-painted miniature is drawn inside the frame. */
  variant: EventVariant;
  /** Custom photo for the event card */
  image?: string;
}

export interface PolaroidPhoto {
  id?: string;
  image: string;
  caption?: string;
  date?: string;
  rotation?: number;
  crop?: string;
  tape?: boolean;
}

export interface WeddingConfig {
  couple: {
    groom: string;
    bride: string;
    /** Rendered as the hero title. */
    title: string;
    /** Portrait inside the ornate frame. Leave empty for the drawn stand-in. */
    photo: string;
    photoAlt: string;
  };
  invocation: {
    mantra: string;
    blessingIntro: string;
    familyOne: string;
    and?: string;
    familyTwo: string;
    word: string;
  };
  blessingsMarquee?: {
    prefix: string;
    names: string[];
  };
  story: {
    paragraph: string;
    polaroids?: PolaroidPhoto[];
  };
  events: {
    heading: string;
    items: WeddingEvent[];
  };
  rsvp: {
    headingTop: string;
    headingBottom: string;
    prompt: string;
    /** International format, digits only — no '+' and no spaces. */
    whatsappNumber: string;
    message: string;
  };
  travel: {
    words: string[];
    prompt: string;
    /** Opened when the travel scene is clicked. */
    url: string;
  };
  closing: {
    lineOne: string;
    lineTwo: string;
    url: string;
  };
  buyNow: {
    label: string;
    price: string;
    url: string;
  };
  footer: {
    wordmark: string[];
    helpLine: string;
    email: string;
    social: { instagram: string; youtube: string };
    pagesHeading: string;
    pages: { label: string; href: string }[];
    cta: { heading: string; sub: string; button: string; href: string };
    brand: string;
    legal: string;
  };
}

export const wedding: WeddingConfig = {
  couple: {
    groom: 'Prithvi',
    bride: 'Varshini',
    title: 'Prithvi weds Varshini',
    photo: '/couple.jpg',
    photoAlt: 'Prithvi and Varshini',
  },

  invocation: {
    mantra: 'ॐ श्री वेंकटेशाय नमः',
    blessingIntro: 'Together with their Families',
    familyOne: 'Indira Balaram Family',
    and: 'And',
    familyTwo: 'Potham Family',
    word: 'INVITE',
  },

  blessingsMarquee: {
    prefix: 'from the blessings of',
    names: [
      'Ramakanth',
      'Varshini P S',
      'Kumar',
      'Rahul',
      'Harish',
      'Hanumantha',
      'Kallu',
      'Farnandes',
      'Gagan',
      'Drake',
    ],
  },

  story: {
    paragraph:
      'We are deeply grateful for the kindness, prayers, and warmth we have received from you since our engagement. As we look forward to our wedding, your presence would make this joyous occasion even more special. We eagerly await celebrating together and creating beautiful memories that will last a lifetime',
    polaroids: [
      {
        id: 'p1',
        image: '/couple.jpg',
        rotation: -2.5,
        tape: true,
      },
      {
        id: 'p2',
        image: '/couple3.jpg',
        rotation: 3,
        tape: false,
      },
      {
        id: 'p3',
        image: '/couple2.jpg',
        rotation: -1.5,
        tape: true,
      },
      {
        id: 'p4',
        image: '/couple5.jpg',
        rotation: 2.5,
        tape: false,
      },
      {
        id: 'p5',
        image: '/couple4.jpg',
        rotation: -3,
        tape: true,
      },
      {
        id: 'p6',
        image: '/reception.jpg',
        rotation: 1.8,
        tape: false,
      },
    ],
  },

  events: {
    heading: 'On the following events',
    items: [
      {
        id: 'reception',
        name: 'Reception',
        date: 'Wednesday, 18th Nov 2026',
        venue: 'Venkatamma Ramaiah Kalyana Soudha',
        time: '6:30 PM Onwards',
        cta: 'See the route',
        routeUrl: 'https://maps.app.goo.gl/QhoFSfF5ETn89EUR7',
        variant: 'reception',
        image: '/reception.jpg',
      },
      {
        id: 'wedding',
        name: 'Wedding',
        date: 'Thursday, 19th Nov 2026',
        venue: 'Venkatamma Ramaiah Kalyana Soudha',
        time: '4:40 AM Onwards',
        cta: 'See the route',
        routeUrl: 'https://maps.app.goo.gl/QhoFSfF5ETn89EUR7',
        variant: 'wedding',
        image: '/wedding.jpg',
      }
    ],
  },

  rsvp: {
    headingTop: 'PLEASE',
    headingBottom: 'RSVP',
    prompt: 'Click to message on WhatsApp',
    whatsappNumber: '919876543210',
    message:
      'Hello! Thank you for the invitation to Prithvi & Varshini’s wedding. I would love to RSVP —',
  },

  travel: {
    words: ['FOR', 'THE', 'JOURNEY'],
    prompt: 'Click to plan your travel',
    url: 'https://maps.google.com/?q=Kaldan+Samudhra+Palace',
  },

  closing: {
    lineOne: 'Get your wedding invite from',
    lineTwo: 'missingpieceinvites.com',
    url: 'https://missingpieceinvites.com',
  },

  buyNow: {
    label: 'Buy Now',
    price: 'INR 3999',
    url: 'https://missingpieceinvites.com',
  },

  footer: {
    wordmark: ['Website', 'Templates', 'for Wedding', 'Invites'],
    helpLine: 'Need any help? We’ve got your back.',
    email: 'hello@missingpieceinvites.com',
    social: {
      instagram: 'https://instagram.com/missingpieceinvites',
      youtube: 'https://youtube.com/@missingpieceinvites',
    },
    pagesHeading: 'Pages',
    pages: [
      { label: 'About Us', href: '#' },
      { label: 'Contact us', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Refund Policy', href: '#' },
      { label: 'Terms', href: '#' },
    ],
    cta: {
      heading: 'Invite Your Guests in 10 Minutes!',
      sub: 'Choose. Customise. Share.',
      button: 'Choose a template',
      href: 'https://missingpieceinvites.com',
    },
    brand: 'missingpiece',
    legal: '© Not for Re-Sale',
  },
};

/** WhatsApp deep link with the RSVP message pre-filled. */
export const whatsappUrl = (): string =>
  `https://wa.me/${wedding.rsvp.whatsappNumber}?text=${encodeURIComponent(
    wedding.rsvp.message,
  )}`;

// All wedding content lives here — edit names, dates, venues, images and links in one place.
const IMG = "https://media.base44.com/images/public/6ab95bd660c85365b556c4b5/";

export const weddingNew = {
  couple: { groom: "Prithvi", bride: "Varshini", joiner: "&" },

  buyNow: { label: "Buy Now", price: "INR 3999", url: "https://missingpieceinvites.com" },

  images: {
    hero: IMG + "c1f9fa75b_generated_81c479c1.jpg",
    ganesha: IMG + "fd3adeb87_generated_759cf4da.jpg",
    ochreParchment: IMG + "65d007c40_generated_d019a4d1.jpg",
    storyTexture: IMG + "bb0350c49_generated_2d648a10.jpg",
    couple: IMG + "975040e99_generated_79ca39d3.jpg",
    goldParchment: IMG + "cdc00ad79_generated_f0d60b40.jpg",
    greyPaper: IMG + "1dc1485d1_generated_07585451.jpg",
    wood: IMG + "21952b208_generated_9e21abe7.jpg",
    ship: IMG + "e499c1faf_generated_c3fa9201.jpg",
    closing: IMG + "2fd92b41d_generated_83b4746a.jpg",
    brideGroom: IMG + "4557d5f31_generated_93443924.jpg",
  },

  invocation: {
    mantra: "ॐ श्री वेंकटेशाय नमः",
    intro: "With the heavenly blessings of",
    families: [
      "Smt. Parvathi Ammal & Shri Krishnam Iyer",
      "Smt. Kamakshi Ammal & Shri Srinivasan Iyer",
    ],
    invite: "INVITE",
  },

  story:
    "Indira Balaram Family Welcomes you 🙏🏼",

  eventsHeading: "On the following events",
  events: [
    {
      name: "Reception",
      date: "Wednesday, 18th Nov 2026",
      venue: "Venkatamma Ramaiah Kalyana Soudha",
      time: "6:30 PM Onwards",
      cta: "See the route",
      mapQuery: "Venkatamma Ramaiah Kalyana Soudha",
      image: IMG + "c5f2299d4_generated_afcc6813.jpg",
    },
    {
      name: "Wedding",
      date: "Thursday, 19th Nov 2026",
      venue: "Venkatamma Ramaiah Kalyana Soudha",
      time: "4:40 AM Onwards",
      cta: "See the route",
      mapQuery: "Venkatamma Ramaiah Kalyana Soudha",
      image: IMG + "cb8688095_generated_216f3a94.jpg",
    }
  ],

  rsvp: {
    lines: ["PLEASE", "RSVP"],
    prompt: "Click to message on WhatsApp",
    whatsappNumber: "919876543210",
    message: "Hello! We are delighted to RSVP for the wedding of Prithvi & Varshini. Looking forward to celebrating with you!",
  },

  travel: {
    lines: ["FOR", "THE", "JOURNEY"],
    cta: "Click to plan your travel",
    url: "https://www.google.com/maps/dir/?api=1&destination=Kaldan+Samudhra+Palace+Mahabalipuram",
  },

  closing: {
    lead: "Get your wedding invite from",
    site: "missingpieceinvites.com",
    url: "https://missingpieceinvites.com",
  },

  footer: {
    title: ["Website", "Templates", "for Wedding", "Invites"],
    help: "Need any help? We've got your back.",
    email: "hello@missingpieceinvites.com",
    instagram: "https://www.instagram.com/missingpieceinvites",
    youtube: "https://www.youtube.com/@missingpieceinvites",
    pages: [
      { label: "About Us", url: "https://missingpieceinvites.com/about" },
      { label: "Contact us", url: "https://missingpieceinvites.com/contact" },
      { label: "Blog", url: "https://missingpieceinvites.com/blog" },
      { label: "Privacy Policy", url: "https://missingpieceinvites.com/privacy-policy" },
      { label: "Refund Policy", url: "https://missingpieceinvites.com/refund-policy" },
      { label: "Terms", url: "https://missingpieceinvites.com/terms" },
    ],
    ctaTitle: "Invite Your Guests in 10 Minutes!",
    ctaSub: "Choose. Customise. Share.",
    ctaButton: "Choose a template",
    ctaUrl: "https://missingpieceinvites.com",
    copyright: "© Not for Re-Sale",
  },
};

export const mapsUrl = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;