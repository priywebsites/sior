import { motion } from "framer-motion";
import { User, Star, Phone, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { REVIEWS } from "@/lib/constants";
import { BUSINESS_INFO } from "@/lib/constants";

export default function Reviews() {
  const callBusiness = () => {
    window.open(`tel:${BUSINESS_INFO.phone}`, '_self');
  };

  return (
    <section id="reviews" className="py-24 bg-black relative overflow-hidden">
      {/* Sophisticated Background Elements */}
      <motion.div
        className="absolute top-16 right-20 w-40 h-40 border border-gray-400/20 rotate-45 opacity-30"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [45, 135, 45],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-24 left-16 w-32 h-32 bg-gradient-to-br from-gray-300/20 to-gray-500/20 opacity-40"
        animate={{
          y: [0, -35, 0],
          scale: [1, 0.9, 1],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: 10,
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
            CLIENT <span className="text-gray-300 relative">
              TESTIMONIALS
              <motion.div
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-400 rounded-full"
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
            See what our satisfied customers have to say about their experience
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              className="bg-gray-900 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer relative overflow-hidden border border-gray-700"
              initial={{ 
                opacity: 0, 
                y: 100,
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
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -15,
                scale: 1.03,
                rotateY: 3,
                transition: { duration: 0.4 }
              }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cool-blue-25 via-transparent to-light-red-25 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />

              {/* Quote icon */}
              <motion.div
                className="absolute top-6 right-6 opacity-20 group-hover:opacity-40"
                animate={{
                  rotate: [0, 15, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              >
                <Quote className="text-light-red-400" size={40} />
              </motion.div>

              <div className="flex items-center mb-8 relative z-10">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-cool-blue-100 to-light-red-100 rounded-full flex items-center justify-center mr-4 group-hover:shadow-lg transition-shadow duration-300"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  <User className="text-cool-blue-600" size={28} />
                </motion.div>
                <div>
                  <motion.h4 
                    className="font-bold text-white text-lg mb-2"
                    animate={{
                      color: ["#0f172a", "#1e40af", "#0f172a"]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.7
                    }}
                  >
                    {review.name}
                  </motion.h4>
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: i * 0.1 + index * 0.05,
                          type: "spring",
                          stiffness: 200 
                        }}
                        whileHover={{ 
                          scale: 1.3,
                          rotate: 360,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <Star size={18} fill="currentColor" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <motion.p 
                className="text-gray-300 italic leading-relaxed mb-6 relative z-10 text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                "{review.text}"
              </motion.p>

              {/* Book Now Button */}
              <motion.div
                className="relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Button
                  onClick={callBusiness}
                  className="bg-light-red-500 hover:bg-light-red-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300 w-full"
                  size="sm"
                >
                  <Phone size={16} className="mr-2" />
                  Book Like {review.name.split(' ')[0]}
                </Button>
              </motion.div>

              {/* Decorative corner element */}
              <motion.div
                className="absolute top-4 left-4 w-3 h-3 bg-cool-blue-400 rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.4
                }}
              />

              {/* Floating background animation */}
              <motion.div
                className="absolute -z-10 inset-0 bg-light-red-50 rounded-3xl"
                animate={{
                  y: [0, -2, 0],
                  rotate: [0, 0.3, -0.3, 0],
                }}
                transition={{
                  duration: 4 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2
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
          transition={{ duration: 1, delay: 1 }}
        >
          {/* Star Rating Display */}
          <motion.div
            className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 rounded-3xl p-8 shadow-xl max-w-2xl mx-auto border border-gray-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <motion.div 
              className="flex justify-center text-yellow-400 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 360, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                >
                  <Star size={32} fill="currentColor" />
                </motion.div>
              ))}
            </motion.div>
            
            <motion.h3
              className="text-3xl font-bold text-white mb-2"
              animate={{
                textShadow: [
                  "0px 0px 0px rgba(0,0,0,0)",
                  "0px 2px 10px rgba(245, 158, 11, 0.3)",
                  "0px 0px 0px rgba(0,0,0,0)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              5.0 Perfect Rating
            </motion.h3>
            <p className="text-xl text-gray-300">Based on 150+ satisfied customers</p>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={callBusiness}
                className="bg-light-red-500 hover:bg-light-red-600 text-white px-12 py-6 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                size="lg"
              >
                <motion.div
                  className="absolute inset-0 from-transparent via-white/30 to-transparent text-[#000000] bg-[#000000e6]"
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
                <span className="relative z-10">Join Our Happy Customers</span>
              </Button>
            </motion.div>

            <motion.p 
              className="text-lg text-gray-300 max-w-xs"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              Call <span className="font-bold text-gray-100">{BUSINESS_INFO.phone}</span><br />
              <span className="text-sm">Experience the 5-star difference</span>
            </motion.p>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 2 }}
          >
            {["Trusted by 500+", "Walk-ins Welcome", "Premium Quality"].map((badge, index) => (
              <motion.div
                key={badge}
                className="bg-gray-800 rounded-full px-6 py-3 shadow-lg border border-gray-600"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 2.2 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
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
