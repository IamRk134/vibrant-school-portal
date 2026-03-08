import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Users, Award, Heart } from "lucide-react";

const stats = [
  { icon: GraduationCap, value: "98%", label: "Graduation Rate" },
  { icon: Users, value: "1,200+", label: "Students" },
  { icon: Award, value: "50+", label: "Awards Won" },
  { icon: Heart, value: "25:1", label: "Student-Teacher Ratio" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" style={{ background: "var(--section-gradient)" }}>
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-semibold mb-4 tracking-wider uppercase">
            About Us
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            A Legacy of <span className="text-secondary">Excellence</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            Founded in 1965, Crestview Academy has been dedicated to academic excellence and holistic
            development. We believe every student has the potential to achieve greatness when given the
            right environment, mentorship, and opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="bg-card rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow border border-border"
            >
              <stat.icon className="mx-auto mb-3 text-secondary" size={36} />
              <div className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
