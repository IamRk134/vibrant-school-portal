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
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 space-y-4 border border-primary-foreground/10"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-secondary/50"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-secondary/50"
            />
            <select className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/15 text-primary-foreground/70 focus:outline-none focus:ring-2 focus:ring-secondary/50">
              <option value="">Select Inquiry Type</option>
              <option value="enrollment">Enrollment</option>
              <option value="tour">Campus Tour</option>
              <option value="general">General Question</option>
            </select>
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-secondary/50 resize-none"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
