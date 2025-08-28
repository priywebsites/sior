import { motion } from "framer-motion";
import { Scissors, Phone, Facebook, Clock, MapPin } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Gallery", id: "gallery" },
    { name: "Location", id: "location" }
  ];

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <Scissors className="text-gray-400 text-2xl mr-3" />
              <span className="text-2xl font-bold">{BUSINESS_INFO.name}</span>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Premium barbershop experience with traditional techniques and modern style.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href={BUSINESS_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="text-white" size={20} />
              </motion.a>
              <motion.a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="text-white" size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-300 hover:text-gray-300 transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="text-gray-400 mr-3" size={20} />
                <span className="text-slate-300">{BUSINESS_INFO.phone}</span>
              </div>
              <div className="flex items-center">
                <Clock className="text-gray-400 mr-3" size={20} />
                <span className="text-slate-300">Tue-Fri, Sat: 9 AM - 9 PM</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-gray-400 mr-3" size={20} />
                <span className="text-slate-300">See map above for location</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center">
          <motion.p
            className="text-slate-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            &copy; 2024 {BUSINESS_INFO.name}. All rights reserved. Premium barbershop experience.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
