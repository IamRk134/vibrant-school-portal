import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, ArrowRight } from "lucide-react";

const news = [
  {
    date: "Mar 5, 2026",
    category: "Achievement",
    title: "Crestview Students Win Regional Science Fair",
    excerpt: "Three students earned top honors at the Regional Science Fair, qualifying for the state competition.",
  },
  {
    date: "Feb 28, 2026",
    category: "Event",
    title: "Spring Musical: 'Into the Woods' Opens March 15",
    excerpt: "The drama department presents their annual spring musical. Tickets available at the front office.",
  },
  {
    date: "Feb 20, 2026",
    category: "Sports",
    title: "Varsity Basketball Advances to Playoffs",
    excerpt: "The Eagles secured a playoff spot with a thrilling overtime victory last Friday night.",
  },
];

const events = [
  { date: "Mar 12", title: "Parent-Teacher Conference" },
  { date: "Mar 15-17", title: "Spring Musical Performances" },
  { date: "Mar 22", title: "College & Career Fair" },
  { date: "Apr 5-12", title: "Spring Break" },
];

const NewsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="news" className="section-padding bg-muted">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-semibold mb-4 tracking-wider uppercase">
            Stay Updated
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            News & <span className="text-secondary">Events</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* News */}
          <div className="lg:col-span-2 space-y-6">
            {news.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border group cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary/15 text-secondary-foreground">
                    {item.category}
                  </span>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar size={14} /> {item.date}
                  </span>
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{item.excerpt}</p>
                <span className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-secondary group-hover:gap-2 transition-all">
                  Read More <ArrowRight size={16} />
                </span>
              </motion.article>
            ))}
          </div>

          {/* Events sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card rounded-xl p-6 shadow-sm border border-border h-fit"
          >
            <h3 className="text-xl font-display font-semibold text-foreground mb-6">Upcoming Events</h3>
            <ul className="space-y-4">
              {events.map((e) => (
                <li key={e.title} className="flex gap-4 items-start pb-4 border-b border-border last:border-0 last:pb-0">
                  <div className="min-w-[60px] text-center bg-primary rounded-lg py-2 px-2">
                    <span className="text-xs font-bold text-primary-foreground">{e.date}</span>
                  </div>
                  <span className="text-foreground font-medium">{e.title}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
