import { motion } from "framer-motion";
import { Scissors, User, Sparkles, Layers, Square, Heart, Plus, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES, BOOKSY_URL, SION_LOGO } from "@/lib/constants";
import { BUSINESS_INFO } from "@/lib/constants";

const iconMap = {
  Scissors,
  User,
  Sparkles,
  Layers,
  Square,
  Heart
};

export default function Services() {
  const callBusiness = () => {
    window.open(`tel:${BUSINESS_INFO.phone}`, '_self');
  };

  const bookOnBooksy = () => {
    window.open(BOOKSY_URL, '_blank');
  };

  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
      {/* Premium Background Elements */}
      <motion.div
        className="absolute top-10 right-10 w-40 h-40 border border-gray-600/20 rotate-45 opacity-30"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [45, 135, 45],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-gray-700/30 to-gray-500/30 rounded-full opacity-40"
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            PREMIUM <span className="text-gray-300 relative">
              SERVICES
              <motion.div
                className="absolute -bottom-3 left-0 w-full h-1 bg-gray-400 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </span>
          </motion.h2>
          <motion.p 
            className="text-2xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Professional grooming services tailored to your style and preferences
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={service.id}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer relative overflow-hidden border border-gray-200"
                initial={{ opacity: 0, y: 100, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -12,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                {/* New background image - always visible */}
                <motion.div
                  className="absolute inset-0 transition-opacity duration-500 rounded-3xl"
                  style={{
                    backgroundImage: 'url(/attached_assets/IMG_1374_1756434364910.jpeg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.15
                  }}
                  initial={false}
                />
                {/* Overlay for text readability */}
                <div className="absolute inset-0 bg-white/85 rounded-3xl"></div>
                

                <motion.h3 
                  className="text-2xl font-bold text-black mb-4 relative z-10"
                  animate={{
                    color: ["#000000", "#374151", "#000000"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {service.name}
                </motion.h3>

                <motion.p 
                  className="text-gray-600 mb-4 leading-relaxed relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {service.description}
                </motion.p>

                <div className="flex justify-between items-center mb-6 relative z-10">
                  <span className="text-2xl font-bold text-black">{service.price}</span>
                  <span className="text-gray-500 text-sm">{service.duration}</span>
                </div>

                <div className="flex justify-center relative z-10">
                  <div className="text-center">
                    <p className="text-black font-semibold text-lg">Walk-ins Only</p>
                    <p className="text-gray-500 text-sm">No appointments needed</p>
                  </div>
                </div>

                {/* Decorative corner element */}
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 bg-gray-400 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced Bottom Section */}
        <motion.div
          className="text-center mt-16 space-y-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={callBusiness}
                className="bg-gray-800 hover:bg-gray-700 text-white px-12 py-8 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
                size="lg"
              >
                <Phone className="mr-3" size={24} />
                <span>Call for Walk-in Availability</span>
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="bg-gray-900 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto border border-gray-700"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.p 
              className="text-lg text-gray-300 mb-4"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="font-bold text-white">Walk-ins Only!</span> 
              <br />
              Call <span className="font-bold text-white">{BUSINESS_INFO.phone}</span> or just drop by - no appointments needed
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
