import { motion } from "framer-motion";
import { Phone, Facebook, Clock } from "lucide-react";
import { useBusinessHours } from "@/hooks/use-business-hours";
import { BUSINESS_INFO, TEAM_PHOTO } from "@/lib/constants";

export default function About() {
  const { isOpen, message, formattedHours } = useBusinessHours();

  return (
    <section id="about" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={TEAM_PHOTO}
              alt="Sion Barber Shop professional team of expert barbers"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              ABOUT <span className="text-gray-300 relative cursive-font">
                Sion Barbershop
                <motion.div
                  className="absolute -bottom-3 left-0 w-full h-1 bg-gray-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light">
              At <span className="cursive-font text-xl">Sion Barbershop</span>, we are a Christ-centered barbershop committed to excellence and integrity in our craft. 
              Our experienced barbers serve with dedication, treating every client with respect and care while delivering 
              exceptional grooming services in a welcoming, faith-based environment.
            </p>

            <div className="space-y-6">
              {/* Contact Info */}
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-12 h-12 bg-gray-500/20 rounded-full flex items-center justify-center">
                  <Phone className="text-gray-400" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-white tracking-wider">CALL US</p>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="text-gray-300 hover:text-gray-200 transition-colors text-lg"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <Facebook className="text-gray-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-white">Follow Us</p>
                  <a
                    href={BUSINESS_INFO.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-gray-200 transition-colors"
                  >
                    @sionbabershop
                  </a>
                </div>
              </motion.div>

              {/* Hours Display */}
              <motion.div
                className="bg-gradient-to-br from-gray-100 via-gray-50 to-white rounded-3xl p-8 mt-8 shadow-lg border border-gray-300"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
              >
                <motion.h3 
                  className="font-bold text-slate-900 mb-6 flex items-center gap-3 text-xl"
                  animate={{
                    textShadow: [
                      "0px 0px 0px rgba(0,0,0,0)",
                      "0px 2px 8px rgba(128, 128, 128, 0.2)",
                      "0px 0px 0px rgba(0,0,0,0)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <Clock className="text-gray-600" size={24} />
                  </motion.div>
                  Hours of Operation
                </motion.h3>
                
                <div className="space-y-3">
                  {formattedHours.map((day, index) => (
                    <motion.div
                      key={day.name}
                      className={`flex justify-between items-center py-3 px-4 rounded-xl transition-all duration-300 ${
                        day.isToday 
                          ? "bg-gradient-to-r from-gray-100 to-gray-50 border-l-4 border-gray-500 shadow-md scale-105" 
                          : "bg-white/50 hover:bg-white/80"
                      }`}
                      initial={{ opacity: 0, x: -30, rotateY: -15 }}
                      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1, type: "spring" }}
                      whileHover={{ 
                        scale: day.isToday ? 1.05 : 1.02,
                        x: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <span className={`font-semibold ${day.isToday ? "text-gray-700" : "text-slate-700"}`}>
                        {day.name}
                      </span>
                      <motion.span 
                        className={`font-medium ${
                          day.isClosed 
                            ? "text-red-600" 
                            : day.isToday 
                              ? "text-gray-600" 
                              : "text-slate-600"
                        }`}
                        animate={day.isToday ? {
                          scale: [1, 1.05, 1],
                        } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {day.hours}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  className={`mt-6 p-4 rounded-2xl ${
                    isOpen 
                      ? "bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-300" 
                      : "bg-gradient-to-r from-light-red-50 to-red-100 border-2 border-light-red-300"
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                  animate={{
                    boxShadow: isOpen
                      ? [
                          "0 0 0px rgba(34, 197, 94, 0.3)",
                          "0 0 20px rgba(34, 197, 94, 0.6)",
                          "0 0 0px rgba(34, 197, 94, 0.3)"
                        ]
                      : [
                          "0 0 0px rgba(248, 113, 113, 0.3)",
                          "0 0 20px rgba(248, 113, 113, 0.6)",
                          "0 0 0px rgba(248, 113, 113, 0.3)"
                        ]
                  }}
                  style={{
                    animationDuration: "2s",
                    animationIterationCount: "infinite"
                  }}
                >
                  <div className="flex items-center justify-center gap-3">
                    <motion.div
                      className={`w-3 h-3 rounded-full ${
                        isOpen ? "bg-green-500" : "bg-light-red-500"
                      }`}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [1, 0.7, 1]
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span className="font-semibold text-slate-700">Currently: </span>
                    <motion.span 
                      className={`font-bold text-xl ${
                        isOpen ? "text-green-600" : "text-light-red-600"
                      }`}
                      animate={{ 
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
                    >
                      {message}
                    </motion.span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
