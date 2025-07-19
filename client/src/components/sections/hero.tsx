import { motion } from "framer-motion";
import { ChevronDown, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS_INFO } from "@/lib/constants";

export default function Hero() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const callBusiness = () => {
    window.open(`tel:${BUSINESS_INFO.phone}`, '_self');
  };

  return (
    <section id="home" className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-24 h-24 bg-white/20 rounded-full blur-sm"
        animate={{
          y: [0, -30, 0],
          x: [0, 10, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-20 h-20 bg-light-red-300/30 rounded-full"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/3 right-20 w-16 h-16 bg-white/15 rounded-full"
        animate={{
          y: [0, -20, 0],
          x: [0, -15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute top-16 right-1/3 w-12 h-12 bg-sky-300/20 rounded-full"
        animate={{
          y: [0, -40, 0],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      <motion.div
        className="absolute bottom-20 left-1/4 w-8 h-8 bg-light-red-400/40 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="text-center text-white px-4 relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 100, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.3,
              type: "spring",
              stiffness: 100,
              damping: 12
            }}
          >
            Premium{" "}
            <motion.span 
              className="text-sky-300 inline-block"
              animate={{ 
                textShadow: [
                  "0px 0px 20px rgba(125, 211, 252, 0.5)",
                  "0px 0px 40px rgba(125, 211, 252, 0.8)",
                  "0px 0px 20px rgba(125, 211, 252, 0.5)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Barbershop
            </motion.span>
            <br />
            <motion.span
              className="text-light-red-300"
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Experience
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Where style meets precision. Professional cuts, classic shaves, and modern grooming.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={callBusiness}
                className="bg-light-red-500 hover:bg-light-red-600 text-white px-10 py-7 rounded-full text-xl font-bold shadow-2xl hover:shadow-light-red-500/50 transition-all duration-300 relative overflow-hidden group"
                size="lg"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: [-200, 200],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <Phone className="mr-3" size={24} />
                <span className="relative z-10">Book Now - Call Us</span>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={scrollToServices}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-7 rounded-full text-xl font-semibold hover:bg-white/20 transition-all duration-300 hover:shadow-2xl"
                size="lg"
              >
                <Calendar className="mr-3" size={24} />
                <span className="mr-3">Explore Services</span>
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <ChevronDown size={24} />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <motion.p 
              className="text-blue-200 text-lg"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {BUSINESS_INFO.phone} • Walk-ins Welcome
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Background Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full"
          style={{
            left: `${20 + i * 10}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
        />
      ))}
    </section>
  );
}
