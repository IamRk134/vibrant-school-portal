import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "1250 Eagle Drive, Springfield, IL 62704" },
  { icon: Phone, label: "Phone", value: "(555) 123-4567" },
  { icon: Mail, label: "Email", value: "info@crestviewacademy.edu" },
  { icon: Clock, label: "Office Hours", value: "Mon–Fri: 7:30 AM – 4:00 PM" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-primary">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary-foreground/15 text-primary-foreground text-sm font-semibold mb-4 tracking-wider uppercase">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
            Contact <span className="text-secondary">Us</span>
          </h2>
          <p className="max-w-xl mx-auto text-primary-foreground/75 text-lg">
            We'd love to hear from you. Reach out to learn more about enrollment, programs, or to schedule a campus tour.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((c) => (
              <div key={c.label} className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <c.icon className="text-secondary" size={22} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary-foreground/60 uppercase tracking-wider mb-1">
                    {c.label}
                  </div>
                  <div className="text-primary-foreground font-medium">{c.value}</div>
                </div>
              </div>
            ))}

            {/* Google Map */}
            <div className="mt-6 rounded-xl overflow-hidden border border-primary-foreground/15">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3090.5!2d-89.6501!3d39.7817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ2JzU0LjEiTiA4OcKwMzknMDAuNCJX!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="School Location Map"
              />
            </div>
          </motion.div>
          {/* Google Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl overflow-hidden border border-primary-foreground/10"
          >
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdwNolwFtP1I-umz3OlNc8qkwXDXROtjLJU3icLo3pYxHMH-g/viewform?embedded=true"
              width="100%"
              height="957"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Contact Form"
              className="w-full"
            >
              Loading…
            </iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
