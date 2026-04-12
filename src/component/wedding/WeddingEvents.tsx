import { motion } from "framer-motion";

const events = [
  {
    name: "Haladi",
    date: "May 06, 2026",
    time: "4:00 PM onwards",
    venue: "Groom Home,Hire Kolachi , Huvinahadagali(Tq) , Vijayanagara (Dist)",
    description: "A sacred ceremony of blessings with turmeric",
  },
  {
    name: "Wedding",
    date: "May 08, 2026",
    time: "9:23 AM to 10:25 AM",
    venue: "ಶಿವಶಾಂತವೀರ ಸಮುದಾಯ ಭವನ, Huvinahadagali , Huvinahadagali(Tq) , Vijayanagara (Dist)",
    description: "The sacred union of two souls in holy matrimony",
  },
  {
    name: "Reception",
    date: "May 11, 2026",
    time: "12:30 PM onwards",
    venue: "Groom Home,Hire Kolachi , Huvinahadagali(Tq) , Vijayanagara (Dist)",
    description: "The sacred union of two souls in holy matrimony",
  },
  // {
  //   name: "Reception",
  //   date: "December 16, 2025",
  //   time: "7:30 PM onwards",
  //   venue: "Crystal Hall",
  //   description: "An evening of celebration, music, and festivities",
  // },
];

const WeddingEvents = () => {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="section-title mb-4 text-sm text-accent md:text-base">
            Wedding Celebrations
          </h2>
          <p className="font-display text-3xl text-foreground md:text-4xl lg:text-5xl">
            Join Us in Celebration
          </p>
          <div className="divider-gold mx-auto mt-6 w-24" />
        </motion.div>

        {/* Events Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="wedding-card group relative overflow-hidden rounded-sm p-8 transition-all duration-500 md:p-10"
            >
              {/* Decorative Corner */}
              <div className="absolute right-0 top-0 h-16 w-16 overflow-hidden">
                <div className="absolute -right-8 -top-8 h-16 w-16 rotate-45 bg-gradient-to-br from-accent/10 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="font-display mb-3 text-2xl text-foreground transition-colors group-hover:text-accent md:text-3xl">
                  {event.name}
                </h3>
                
                <div className="mb-4 space-y-1">
                  <p className="font-heading text-sm tracking-wide text-accent">
                    {event.date}
                  </p>
                  <p className="font-body text-sm text-foreground/60">
                    {event.time}
                  </p>
                </div>

                <p className="font-body mb-4 text-foreground/70">
                  {event.description}
                </p>

                <div className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="font-body text-sm text-foreground/60">
                    {event.venue}
                  </span>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingEvents;
