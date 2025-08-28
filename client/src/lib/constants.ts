// Import the actual images
import gallery1 from "@assets/Screen Shot 2025-07-19 at 4.55.31 PM_1752962336288.png";
import gallery2 from "@assets/Screen Shot 2025-07-19 at 4.55.48 PM_1752962333291.png";
import gallery3 from "@assets/Screen Shot 2025-07-19 at 4.56.20 PM_1752962331767.png";
import gallery4 from "@assets/Screen Shot 2025-07-19 at 4.58.32 PM_1752962330046.png";
import gallery5 from "@assets/Screen Shot 2025-07-19 at 4.59.05 PM_1752962359546.png";
import teamPhoto from "@assets/Screen Shot 2025-07-19 at 4.55.07 PM_1752962636701.png";
import barbershopInterior from "@assets/Screen Shot 2025-07-19 at 5.02.27 PM_1752962638160.png";
import sionLogo from "@assets/sion-logo.png";

export const BUSINESS_INFO = {
  name: "Sion Barber Shop",
  phone: "+1 (321) 437-5592",
  facebook: "https://www.facebook.com/sionbabershop",
  googleMapsUrl: "https://www.google.com/maps/place/Sion+Barber+Shop/@28.2582658,-81.4455731,17z/data=!3m1!4b1!4m6!3m5!1s0x88dd837133c1170f:0x8beec418bc57da80!8m2!3d28.2582611!4d-81.4429982!16s%2Fg%2F11gf5v324g?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.7682134567!2d-81.4455731!3d28.2582658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd837133c1170f%3A0x8beec418bc57da80!2sSion%20Barber%20Shop!5e0!3m2!1sen!2sus!4v1652901234567!5m2!1sen!2sus"
};

export const BUSINESS_HOURS = {
  0: null, // Sunday - Closed
  1: null, // Monday - Closed
  2: { open: 9, close: 19 }, // Tuesday
  3: { open: 9, close: 19 }, // Wednesday
  4: { open: 9, close: 19 }, // Thursday
  5: { open: 9, close: 19 }, // Friday
  6: { open: 9, close: 19 }  // Saturday
};

export const BOOKSY_URL = "https://booksy.com/en-us/1543535_sion-barbershop_barber-shop_134766_kissimmee";

export const SERVICES = [
  {
    id: 1,
    name: "Basic Haircut",
    description: "Professional haircut tailored to your style (+$15 after hours fee)",
    price: "$20.00",
    duration: "35min",
    icon: "Scissors"
  },
  {
    id: 2,
    name: "High/Mid Skin Fade",
    description: "Expert skin fade with precise blending (+$15 after hours fee)",
    price: "$20.00",
    duration: "45min",
    icon: "Layers"
  },
  {
    id: 3,
    name: "Taper Fade/Blowout",
    description: "Classic taper fade for a clean, sharp look (+$15 after hours fee)",
    price: "$20.00",
    duration: "30min",
    icon: "Sparkles"
  },
  {
    id: 4,
    name: "Low Fade",
    description: "Subtle low fade for a professional appearance (+$15 after hours fee)",
    price: "$25.00",
    duration: "1h",
    icon: "Square"
  },
  {
    id: 5,
    name: "Basic Haircut & Beard",
    description: "Complete haircut and beard styling service (+$15 after hours fee)",
    price: "$30.00",
    duration: "1h",
    icon: "User"
  },
  {
    id: 6,
    name: "Skin Fade/Taper & Beard with Blend",
    description: "Premium fade with professional beard blending (+$15 after hours fee)",
    price: "$30.00",
    duration: "1h 10min",
    icon: "Heart"
  },
  {
    id: 7,
    name: "Beard Shaping",
    description: "Professional beard trimming and shaping (+$15 after hours fee)",
    price: "$17.00",
    duration: "20min",
    icon: "User"
  },
  {
    id: 8,
    name: "Head Shave",
    description: "Clean, professional head shave (+$15 after hours fee)",
    price: "$25.00",
    duration: "30min",
    icon: "Sparkles"
  },
  {
    id: 9,
    name: "Kid's Haircut",
    description: "Gentle cuts for children (No Skin) (+$15 after hours fee)",
    price: "$25.00",
    duration: "30min",
    icon: "Heart"
  },
  {
    id: 10,
    name: "Kid's Fade",
    description: "Professional fade cuts for kids (+$15 after hours fee)",
    price: "$20.00",
    duration: "45min",
    icon: "Heart"
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: "Michael Rodriguez",
    rating: 5,
    text: "Absolutely the best barbershop in town! The attention to detail and professional service is unmatched. I've been coming here for over a year and never disappointed."
  },
  {
    id: 2,
    name: "James Thompson",
    rating: 5,
    text: "Clean environment, skilled barbers, and great prices. The straight razor shave is incredible - feels like luxury every time. Highly recommend!"
  },
  {
    id: 3,
    name: "David Chen",
    rating: 5,
    text: "Perfect fade every single time. The barbers really know their craft and take pride in their work. The modern atmosphere makes it a great experience."
  },
  {
    id: 4,
    name: "Carlos Martinez",
    rating: 5,
    text: "Been bringing my son here for kids' cuts. They're so patient and great with children. Both of us always leave looking sharp and feeling confident."
  },
  {
    id: 5,
    name: "Alex Johnson",
    rating: 5,
    text: "The beard trim service is outstanding. They really understand how to shape a beard to complement your face. Professional service with a personal touch."
  }
];

export const GALLERY_IMAGES = [
  {
    id: 1,
    url: gallery1,
    alt: "Professional barber working on precise haircut in modern barbershop"
  },
  {
    id: 2,
    url: gallery2,
    alt: "Barbershop interior showing professional workstation and atmosphere"
  },
  {
    id: 3,
    url: gallery3,
    alt: "Perfect side profile showing precision fade and clean lines"
  },
  {
    id: 4,
    url: gallery4,
    alt: "Classic barbershop styling showing professional beard trim technique"
  },
  {
    id: 5,
    url: gallery5,
    alt: "Modern pompadour haircut showcasing expert styling and attention to detail"
  }
];

export const TEAM_PHOTO = teamPhoto;
export const BARBERSHOP_INTERIOR = barbershopInterior;
export const SION_LOGO = sionLogo;
