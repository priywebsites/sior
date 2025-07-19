import { motion, useMotionValue, useTransform } from "framer-motion";
import { Phone, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GALLERY_IMAGES } from "@/lib/constants";
import { BUSINESS_INFO } from "@/lib/constants";

export default function Gallery() {
  const callBusiness = () => {
    window.open(`tel:${BUSINESS_INFO.phone}`, '_self');
  };

  return (
    <section id="gallery" className="py-20 bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 bg-light-red-100 rounded-full opacity-30"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-28 h-28 bg-cool-blue-100 rounded-full opacity-40"
        animate={{
          rotate: [0, 360],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, type: "spring", stiffness: 80 }}
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-slate-900 mb-8"
            initial={{ opacity: 0, rotateX: -90 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            Our <span className="text-cool-blue-600 relative">
              Work
              <motion.div
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-2 bg-light-red-400 rounded-full"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
              />
            </span>
          </motion.h2>
          <motion.p 
            className="text-2xl text-slate-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Check out some of our finest work and satisfied customers
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {GALLERY_IMAGES.map((image, index) => (
            <motion.div
              key={image.id}
              className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer group relative"
              initial={{ 
                opacity: 0, 
                y: 80,
                rotateY: index % 2 === 0 ? -20 : 20,
                scale: 0.9
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                rotateY: 0,
                scale: 1
              }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.08,
                y: -10,
                rotateY: 5,
                transition: { duration: 0.4 }
              }}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-72 object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Overlay with animation */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-cool-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                {/* Red accent corner */}
                <motion.div
                  className="absolute top-4 right-4 w-4 h-4 bg-light-red-500 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                />

                {/* View overlay button */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
                  initial={false}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-2xl">
                    <Eye className="text-cool-blue-600" size={28} />
                  </div>
                </motion.div>

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 border-4 border-light-red-400/50 rounded-3xl opacity-0 group-hover:opacity-100"
                  animate={{
                    borderColor: [
                      "rgba(248, 113, 113, 0.5)",
                      "rgba(59, 130, 246, 0.5)",
                      "rgba(248, 113, 113, 0.5)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                />
              </div>

              {/* Floating animation for each card */}
              <motion.div
                className="absolute -z-10 inset-0 bg-light-red-100 rounded-3xl"
                animate={{
                  y: [0, -3, 0],
                  rotate: [0, 0.5, -0.5, 0],
                }}
                transition={{
                  duration: 3 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Enhanced Bottom Section */}
        <motion.div
          className="text-center mt-20 space-y-12"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.div
            className="bg-gradient-to-r from-cool-blue-50 via-white to-light-red-50 rounded-3xl p-12 shadow-xl max-w-4xl mx-auto border border-slate-100"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.h3
              className="text-3xl font-bold text-slate-900 mb-6"
              animate={{
                textShadow: [
                  "0px 0px 0px rgba(0,0,0,0)",
                  "0px 2px 10px rgba(59, 130, 246, 0.3)",
                  "0px 0px 0px rgba(0,0,0,0)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              Every Cut is a Work of Art
            </motion.h3>
            
            <motion.p 
              className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Our experienced barbers take pride in delivering precision cuts that enhance your natural style and boost your confidence.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={callBusiness}
                  className="bg-light-red-500 hover:bg-light-red-600 text-white px-12 py-6 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                  size="lg"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: [-300, 300],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <Phone className="mr-3" size={24} />
                  <span className="relative z-10">Book Your Appointment</span>
                </Button>
              </motion.div>

              <motion.p 
                className="text-lg text-slate-600"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                Call <span className="font-bold text-cool-blue-600">{BUSINESS_INFO.phone}</span>
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Achievement badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            {["5-Star Rated", "Expert Barbers", "Premium Service"].map((badge, index) => (
              <motion.div
                key={badge}
                className="bg-white rounded-full px-8 py-4 shadow-lg border border-light-red-100"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(248, 113, 113, 0.3)"
                }}
              >
                <span className="font-semibold text-slate-700">{badge}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
