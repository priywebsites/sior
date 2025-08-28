import { motion } from "framer-motion";
import { ChevronDown, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS_INFO, SION_LOGO } from "@/lib/constants";

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
      {/* Logo Background */}
      <div 
        className="absolute inset-0 bg-center opacity-15"
        style={{
          backgroundImage: `url(${SION_LOGO})`,
          backgroundSize: '600px auto',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Premium Geometric Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 border border-gray-500/30 rounded-lg rotate-45"
        animate={{
          y: [0, -20, 0],
          rotate: [45, 75, 45],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-br from-gray-600/20 to-gray-800/20 rounded-full"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div
        className="absolute top-1/3 right-20 w-20 h-20 border-2 border-white/20 rounded-full"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute top-16 right-1/3 w-16 h-16 bg-gray-500/20 transform rotate-45"
        animate={{
          y: [0, -25, 0],
          rotate: [45, 135, 45],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      
      <motion.div
        className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-gray-500/30 to-gray-700/30 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.8, 0.4],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="text-center text-white px-4 relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl cursive-font mb-8 leading-tight text-shadow-premium text-white"
            initial={{ opacity: 0, y: 80, rotateX: -45 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.3,
              type: "spring",
              stiffness: 80,
              damping: 15
            }}
          >
            Sion Barbershop
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed font-light tracking-wide"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Where sophistication meets precision. Experience the art of traditional barbering with modern luxury.
          </motion.p>
          
          <motion.div
            className="flex flex-col gap-8 justify-center items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.div
              className="bg-gray-900/80 backdrop-blur-sm border border-gray-300/20 rounded-3xl px-12 py-8 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">WALK-INS ONLY</h2>
              <p className="text-gray-300 text-xl mb-6">No appointments needed - just come in!</p>
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={callBusiness}
                  className="bg-gray-800 hover:bg-gray-700 text-white px-12 py-6 rounded-full text-xl font-bold shadow-2xl transition-all duration-300 tracking-wider"
                  size="lg"
                >
                  <Phone className="mr-3" size={24} />
                  <span>CALL US</span>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={scrollToServices}
                className="bg-transparent border-2 border-white text-white px-12 py-6 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 hover:shadow-2xl tracking-wider"
                size="lg"
              >
                <span className="mr-3">VIEW SERVICES & PRICES</span>
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
              className="text-gray-400 text-lg tracking-wider font-light"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {BUSINESS_INFO.phone} • WALK-INS ONLY • NO APPOINTMENTS
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Premium Animated Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gray-400/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -120, 0],
            x: [0, Math.random() * 60 - 30, 0],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 6 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Sophisticated Light Elements */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`light-${i}`}
          className="absolute w-6 h-6 bg-gradient-to-r from-gray-400/15 to-gray-600/15 rounded-full blur-sm"
          style={{
            left: `${20 + i * 20}%`,
            top: `${25 + (i % 2) * 50}%`,
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, Math.random() * 30 - 15, 0],
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 7 + i * 0.5,
            repeat: Infinity,
            delay: i * 1.2,
            ease: "easeInOut"
          }}
        />
      ))}
    </section>
  );
}
