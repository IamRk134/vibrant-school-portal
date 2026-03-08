import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { newsData, eventsData } from "@/data/newsEventsData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NewsDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const newsItem = newsData.find((n) => n.slug === slug);
  const eventItem = eventsData.find((e) => e.slug === slug);
  const item = newsItem || eventItem;

  if (!item) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 text-center section-padding">
          <h1 className="text-3xl font-display font-bold text-foreground mb-4">Article Not Found</h1>
          <button onClick={() => navigate("/#news")} className="text-secondary font-semibold hover:underline">
            ← Back to News & Events
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  const isNews = !!newsItem;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 md:pt-32 section-padding">
        <div className="container mx-auto max-w-3xl">
          <button
            onClick={() => navigate("/#news")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft size={20} /> Back to News & Events
          </button>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            {isNews && (
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-secondary/15 text-secondary-foreground">
                  <Tag size={12} /> {newsItem.category}
                </span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar size={14} /> {newsItem.date}
                </span>
              </div>
            )}

            {!isNews && eventItem && (
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-accent/15 text-accent">
                  <Calendar size={12} /> {eventItem.date}
                </span>
              </div>
            )}

            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-8 leading-tight">
              {item.title}
            </h1>

            <div className="prose prose-lg max-w-none">
              {(isNews ? newsItem.content : eventItem!.description).split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed mb-6 whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          <div className="mt-12 pt-8 border-t border-border">
            <button
              onClick={() => navigate("/#news")}
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              ← Back to All News & Events
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsDetailPage;
