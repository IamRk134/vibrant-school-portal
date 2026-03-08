import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, FlaskConical, Palette, Globe, Calculator, Code } from "lucide-react";

const programs = [
  { icon: BookOpen, title: "Language Arts", desc: "Creative writing, literature analysis, and public speaking skills." },
  { icon: FlaskConical, title: "Sciences", desc: "Hands-on labs in biology, chemistry, physics, and environmental science." },
  { icon: Calculator, title: "Mathematics", desc: "From algebra to calculus, with AP and honors tracks available." },
  { icon: Globe, title: "Social Studies", desc: "World history, geography, economics, and civic responsibility." },
  { icon: Palette, title: "Fine Arts", desc: "Visual arts, music, theater, and digital media production." },
  { icon: Code, title: "Technology", desc: "Computer science, robotics, and digital literacy programs." },
];

const AcademicsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="academics" className="section-padding bg-primary">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary-foreground/15 text-primary-foreground text-sm font-semibold mb-4 tracking-wider uppercase">
            Academics
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
            Academic <span className="text-secondary">Programs</span>
          </h2>
          <p className="max-w-2xl mx-auto text-primary-foreground/75 text-lg leading-relaxed">
            Our rigorous curriculum prepares students for college and beyond, with diverse programs
            to ignite every passion.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              className="group bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors cursor-default"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
                <p.icon className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-display font-semibold text-primary-foreground mb-2">{p.title}</h3>
              <p className="text-primary-foreground/70 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;
