import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, Calendar, Users, Clock, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PhotoItem {
  src: string;
  alt: string;
}

interface DetailItem {
  icon: React.ElementType;
  label: string;
  value: string;
}

interface ActivityDetailPageProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  photos: PhotoItem[];
  details: DetailItem[];
  highlights: string[];
  color: string;
}

const ActivityDetailPage = ({
  title,
  subtitle,
  description,
  heroImage,
  photos,
  details,
  highlights,
  color,
}: ActivityDetailPageProps) => {
  const navigate = useNavigate();
  const galleryRef = useRef(null);
  const galleryInView = useInView(galleryRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-end overflow-hidden">
        <img src={heroImage} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <button
            onClick={() => navigate("/#activities")}
            className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors"
          >
            <ArrowLeft size={20} /> Back to Activities
          </button>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-2"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-primary-foreground/80"
          >
            {subtitle}
          </motion.p>
        </div>
      </section>

      {/* Info section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                About This Program
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">{description}</p>

              <h3 className="text-xl font-display font-semibold text-foreground mb-4">Program Highlights</h3>
              <ul className="space-y-3">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <span className={`mt-1.5 w-2 h-2 rounded-full ${color} flex-shrink-0`} />
                    <span className="text-muted-foreground">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border shadow-sm h-fit">
              <h3 className="text-lg font-display font-semibold text-foreground mb-5">Program Details</h3>
              <div className="space-y-4">
                {details.map((d) => (
                  <div key={d.label} className="flex gap-3 items-start">
                    <div className={`w-10 h-10 rounded-lg ${color}/20 flex items-center justify-center flex-shrink-0`}>
                      <d.icon className="text-secondary" size={18} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        {d.label}
                      </div>
                      <div className="text-foreground font-medium">{d.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-padding bg-muted" ref={galleryRef}>
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 text-center">
            Photo Gallery
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, i) => (
              <motion.div
                key={photo.alt}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={galleryInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ActivityDetailPage;
export type { PhotoItem, DetailItem };
