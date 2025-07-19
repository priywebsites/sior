import { motion } from "framer-motion";
import { MapPin, Phone, Car } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

export default function Location() {
  return (
    <section id="location" className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Find <span className="text-cool-blue-600">Us Here</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Visit us at our convenient location for the ultimate barbershop experience
          </p>
        </motion.div>

        <motion.div
          className="bg-slate-50 rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden mb-8">
            <iframe
              src={BUSINESS_INFO.mapEmbedUrl}
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-96 rounded-xl"
              title="Sion Barber Shop Location"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-cool-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-cool-blue-600 text-xl" size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Address</h3>
              <p className="text-slate-600">Visit us for directions</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-16 h-16 bg-cool-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-cool-blue-600 text-xl" size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Call Ahead</h3>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="text-slate-600 hover:text-cool-blue-600 transition-colors"
              >
                {BUSINESS_INFO.phone}
              </a>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="w-16 h-16 bg-cool-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="text-cool-blue-600 text-xl" size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Parking</h3>
              <p className="text-slate-600">Free parking available</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
