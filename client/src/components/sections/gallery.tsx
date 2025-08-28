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
    <section id="gallery" className="py-24 bg-black relative overflow-hidden">
      {/* Premium Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-48 h-48 border-2 border-gray-600/30 opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 25, 0],
          y: [0, -15, 0],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-gray-700/40 to-gray-500/40 opacity-30"
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 15,
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
            className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight"
            initial={{ opacity: 0, rotateX: -90 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            OUR <span className="text-gray-300 relative">
              PORTFOLIO
              <motion.div
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gray-400 rounded-full"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
              />
            </span>
          </motion.h2>
          <motion.p 
            className="text-2xl text-gray-300 max-w-3xl mx-auto"
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
                  className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-gray-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                {/* Red accent corner */}
                <motion.div
                  className="absolute top-4 right-4 w-4 h-4 bg-gray-500 rounded-full opacity-0 group-hover:opacity-100"
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
                    <Eye className="text-gray-600" size={28} />
                  </div>
                </motion.div>

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 border-4 border-gray-400/50 rounded-3xl opacity-0 group-hover:opacity-100"
                  animate={{
                    borderColor: [
                      "rgba(128, 128, 128, 0.5)",
                      "rgba(64, 64, 64, 0.5)",
                      "rgba(128, 128, 128, 0.5)"
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
                className="absolute -z-10 inset-0 bg-gray-100 rounded-3xl"
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
            className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 rounded-3xl p-12 shadow-xl max-w-4xl mx-auto border border-gray-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.h3
              className="text-3xl font-bold text-white mb-6"
              animate={{
                textShadow: [
                  "0px 0px 0px rgba(0,0,0,0)",
                  "0px 2px 10px rgba(128, 128, 128, 0.3)",
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
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
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
                  className="bg-gray-800 hover:bg-gray-700 text-white px-12 py-6 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                  size="lg"
                >
                  <motion.div
                    className="absolute inset-0 from-transparent via-white/30 to-transparent text-[#000000] bg-[#000000]"
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
                  <span className="relative z-10">Call for Walk-in</span>
                </Button>
              </motion.div>

              <motion.p 
                className="text-lg text-gray-300"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                Call <span className="font-bold text-gray-100">{BUSINESS_INFO.phone}</span>
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
                className="bg-gray-800 rounded-full px-8 py-4 shadow-lg border border-gray-600"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(128, 128, 128, 0.3)"
                }}
              >
                <span className="font-semibold text-white">{badge}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
