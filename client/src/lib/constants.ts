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
    price: "$35+",
    icon: "Scissors"
  },
  {
    id: 2,
    name: "Beard Trims",
    description: "Professional beard shaping and grooming for the perfect look",
    price: "$25+",
    icon: "User"
  },
  {
    id: 3,
    name: "Straight Razor Shaves",
    description: "Traditional hot towel shaves for the ultimate barbershop experience",
    price: "$40+",
    icon: "Sparkles"
  },
  {
    id: 4,
    name: "Fades",
    description: "Expert fade cuts from subtle to dramatic gradients",
    price: "$30+",
    icon: "Layers"
  },
  {
    id: 5,
    name: "Line-Ups",
    description: "Crisp, clean edge-ups for that sharp, defined look",
    price: "$20+",
    icon: "Square"
  },
  {
    id: 6,
    name: "Kids' Cuts",
    description: "Patient, gentle cuts for children in a friendly environment",
    price: "$25+",
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
    url: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
    alt: "Professional haircut result - modern fade"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
    alt: "Classic beard trim and styling"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
    alt: "Professional barber tools arrangement"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
    alt: "Traditional straight razor shave"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
    alt: "Modern barbershop styling session"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
    alt: "Modern barbershop interior"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
    alt: "Perfect fade haircut showcase"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1541533848490-c1011faa5c5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
    alt: "Premium barbershop experience"
  }
];
