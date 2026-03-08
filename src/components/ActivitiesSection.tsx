import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Music, Drama, Microscope, Volleyball, Brush } from "lucide-react";

const activities = [
  { icon: Trophy, title: "Athletics", desc: "Football, basketball, track, swimming, and more competitive sports.", color: "bg-secondary" },
  { icon: Music, title: "Music & Band", desc: "Marching band, jazz ensemble, choir, and solo performances.", color: "bg-accent" },
  { icon: Drama, title: "Drama Club", desc: "Annual plays, musicals, and improv comedy nights.", color: "bg-secondary" },
  { icon: Microscope, title: "Science Club", desc: "Research projects, science fairs, and STEM competitions.", color: "bg-accent" },
  { icon: Volleyball, title: "Intramurals", desc: "Recreational leagues for every skill level and interest.", color: "bg-secondary" },
  { icon: Brush, title: "Art Club", desc: "Exhibitions, workshops, and collaborative art installations.", color: "bg-accent" },
];

const ActivitiesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="activities" className="section-padding" style={{ background: "var(--section-gradient)" }}>
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-accent/15 text-accent text-sm font-semibold mb-4 tracking-wider uppercase">
            Beyond the Classroom
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Extracurricular <span className="text-accent">Activities</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            From sports to arts, our wide range of activities helps students discover passions
            and develop lifelong skills.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="bg-card rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-border group cursor-default"
            >
              <div className={`w-12 h-12 rounded-lg ${a.color} flex items-center justify-center mb-4`}>
                <a.icon className="text-primary-foreground" size={24} />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">{a.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
