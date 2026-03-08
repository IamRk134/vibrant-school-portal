import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroImage} alt="Students engaged in learning" className="w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
    </div>

    <div className="relative z-10 container mx-auto px-4 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6"
      >
        Shaping Tomorrow's
        <br />
        <span className="text-secondary">Leaders Today</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-10 font-body"
      >
        At Crestview Academy, we inspire curiosity, nurture talent, and build character
        in a vibrant and inclusive learning community.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="#about"
          className="px-8 py-4 rounded-lg bg-secondary text-secondary-foreground font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg"
        >
          Discover More
        </a>
        <a
          href="#contact"
          className="px-8 py-4 rounded-lg border-2 border-primary-foreground/40 text-primary-foreground font-semibold text-lg hover:bg-primary-foreground/10 transition-colors"
        >
          Schedule a Visit
        </a>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.a
      href="#about"
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
    >
      <ChevronDown size={32} />
    </motion.a>
  </section>
);

export default HeroSection;
