import { motion } from "framer-motion";
import { Scissors, User, Sparkles, Layers, Square, Heart, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  Scissors,
  User,
  Sparkles,
  Layers,
  Square,
  Heart
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our <span className="text-cool-blue-600">Services</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Professional grooming services tailored to your style and preferences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={service.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <motion.div
                  className="w-16 h-16 bg-cool-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cool-blue-200 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <IconComponent className="text-cool-blue-600 text-2xl" size={24} />
                </motion.div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.name}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="text-2xl font-bold text-cool-blue-600">{service.price}</div>
              </motion.div>
            );
          })}
        </div>

        {/* And More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button
            className="bg-cool-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-cool-blue-700 transition-all duration-300 hover:scale-105"
            size="lg"
          >
            <Plus className="mr-2" size={20} />
            And More Services...
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
