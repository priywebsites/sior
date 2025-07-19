import { motion } from "framer-motion";
import { Phone, Facebook, Clock } from "lucide-react";
import { useBusinessHours } from "@/hooks/use-business-hours";
import { BUSINESS_INFO } from "@/lib/constants";

export default function About() {
  const { isOpen, message, formattedHours } = useBusinessHours();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800"
              alt="Modern barbershop interior"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              About <span className="text-cool-blue-600">{BUSINESS_INFO.name}</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              At {BUSINESS_INFO.name}, we blend traditional barbering techniques with contemporary style. 
              Our skilled barbers are dedicated to providing you with an exceptional grooming experience 
              in a modern, comfortable environment.
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
                <div className="w-12 h-12 bg-cool-blue-100 rounded-full flex items-center justify-center">
                  <Phone className="text-cool-blue-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Call Us</p>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="text-slate-600 hover:text-cool-blue-600 transition-colors"
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
                <div className="w-12 h-12 bg-cool-blue-100 rounded-full flex items-center justify-center">
                  <Facebook className="text-cool-blue-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Follow Us</p>
                  <a
                    href={BUSINESS_INFO.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cool-blue-600 hover:text-cool-blue-700 transition-colors"
                  >
                    @sionbabershop
                  </a>
                </div>
              </motion.div>

              {/* Hours Display */}
              <motion.div
                className="bg-slate-50 rounded-2xl p-6 mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Clock className="text-cool-blue-600" size={20} />
                  Hours of Operation
                </h3>
                <div className="space-y-2">
                  {formattedHours.map((day, index) => (
                    <motion.div
                      key={day.name}
                      className={`flex justify-between items-center py-1 px-2 rounded-lg ${
                        day.isToday ? "bg-cool-blue-50 border-l-4 border-cool-blue-500" : ""
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <span className="font-medium">{day.name}</span>
                      <span className={`${day.isClosed ? "text-red-500 font-medium" : "text-slate-600"}`}>
                        {day.hours}
                      </span>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  className={`mt-4 p-3 rounded-xl ${
                    isOpen 
                      ? "bg-green-50 border border-green-200" 
                      : "bg-red-50 border border-red-200"
                  }`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <span className="font-semibold">Currently: </span>
                  <span className={`font-bold ${
                    isOpen ? "text-green-600" : "text-red-600"
                  }`}>
                    {message}
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
