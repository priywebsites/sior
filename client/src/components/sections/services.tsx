import { motion } from "framer-motion";
import { Scissors, User, Sparkles, Layers, Square, Heart, Plus, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants";
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

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-slate-900 via-slate-50 to-white relative overflow-hidden transition-all duration-1000 ease-in-out">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 bg-light-red-100 rounded-full opacity-50"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-24 h-24 bg-cool-blue-100 rounded-full opacity-60"
        animate={{
          y: [0, -20, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 6,
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
            className="text-5xl md:text-7xl font-bold text-slate-900 mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            Our <span className="text-cool-blue-600 relative">
              Services
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-light-red-400 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </span>
          </motion.h2>
          <motion.p 
            className="text-2xl text-slate-600 max-w-3xl mx-auto"
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
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer relative overflow-hidden border border-slate-100"
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
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cool-blue-50 via-transparent to-light-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                
                <motion.div
                  className="w-20 h-20 bg-cool-blue-100 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-cool-blue-200 transition-all duration-500 relative z-10"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 2 + index * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                >
                  <IconComponent className="text-cool-blue-600 text-3xl" size={28} />
                </motion.div>

                <motion.h3 
                  className="text-2xl font-bold text-slate-900 mb-4 relative z-10"
                  animate={{
                    color: ["#0f172a", "#1e40af", "#0f172a"]
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
                  className="text-slate-600 mb-8 leading-relaxed relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {service.description}
                </motion.p>

                <div className="flex justify-center relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      onClick={callBusiness}
                      className="bg-light-red-500 hover:bg-light-red-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 w-full"
                      size="lg"
                    >
                      <Phone size={18} className="mr-2" />
                      Book Now
                    </Button>
                  </motion.div>
                </div>

                {/* Decorative corner element */}
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 bg-light-red-400 rounded-full opacity-0 group-hover:opacity-100"
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
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={callBusiness}
                className="bg-light-red-500 hover:bg-light-red-600 text-white px-10 py-6 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                size="lg"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: [-200, 200],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <Phone className="mr-3" size={24} />
                <span className="relative z-10">Book Any Service Now</span>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className="bg-cool-blue-600 text-white px-10 py-6 rounded-full text-xl font-semibold hover:bg-cool-blue-700 transition-all duration-300 hover:shadow-xl relative overflow-hidden"
                size="lg"
              >
                <Plus className="mr-3" size={24} />
                <span>More Services Available</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{
                    x: [-150, 150],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 1
                  }}
                />
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto border border-light-red-100"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.p 
              className="text-lg text-slate-700 mb-4"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="font-bold text-light-red-600">Walk-ins Welcome!</span> 
              <br />
              Call <span className="font-bold text-cool-blue-600">{BUSINESS_INFO.phone}</span> to book or just drop by
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
