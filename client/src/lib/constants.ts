// Import the actual images
import gallery1 from "@assets/Screen Shot 2025-07-19 at 4.55.31 PM_1752962336288.png";
import gallery2 from "@assets/Screen Shot 2025-07-19 at 4.55.48 PM_1752962333291.png";
import gallery3 from "@assets/Screen Shot 2025-07-19 at 4.56.20 PM_1752962331767.png";
import gallery4 from "@assets/Screen Shot 2025-07-19 at 4.58.32 PM_1752962330046.png";
import gallery5 from "@assets/Screen Shot 2025-07-19 at 4.59.05 PM_1752962359546.png";

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
  2: { open: 9, close: 21 }, // Tuesday
  3: { open: 9, close: 21 }, // Wednesday
  4: { open: 9, close: 21 }, // Thursday
  5: { open: 9, close: 21 }, // Friday
  6: { open: 9, close: 21 }  // Saturday
};

export const SERVICES = [
  {
    id: 1,
    name: "Haircuts",
    description: "Precision cuts tailored to your face shape and personal style",
    icon: "Scissors"
  },
  {
    id: 2,
    name: "Beard Trims",
    description: "Professional beard shaping and grooming for the perfect look",
    icon: "User"
  },
  {
    id: 3,
    name: "Straight Razor Shaves",
    description: "Traditional hot towel shaves for the ultimate barbershop experience",
    icon: "Sparkles"
  },
  {
    id: 4,
    name: "Fades",
    description: "Expert fade cuts from subtle to dramatic gradients",
    icon: "Layers"
  },
  {
    id: 5,
    name: "Line-Ups",
    description: "Crisp, clean edge-ups for that sharp, defined look",
    icon: "Square"
  },
  {
    id: 6,
    name: "Kids' Cuts",
    description: "Patient, gentle cuts for children in a friendly environment",
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
