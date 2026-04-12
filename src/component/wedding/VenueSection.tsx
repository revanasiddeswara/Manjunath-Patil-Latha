import { motion } from "framer-motion";
import venueImage from "@/assets/footer stage.jpg";

const VenueSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-muted">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={venueImage}
          alt="Wedding Venue"
          className="h-full w-full object-cover romantic-image"
        />

        {/* Base Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Radial Spotlight (text focus) */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_50%_75%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_60%,rgba(0,0,0,0.85)_100%)]
          "
        />

        {/* Bottom Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative flex min-h-screen items-end pb-20 md:pb-32">
        <div className="container mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="section-title mb-4 text-sm text-gold-light md:text-base">
              The Venue
            </h2>

            <p className="font-display mb-6 text-3xl text-ivory md:text-4xl lg:text-5xl">
             ಶಿವಶಾಂತವೀರ ಸಮುದಾಯ ಭವನ
            </p>

            <p className="font-body mx-auto mb-8 max-w-xl text-base text-ivory/85 md:text-lg">
              A magnificent heritage venue where timeless elegance meets modern luxury. 
              Nestled amidst lush gardens and majestic architecture.
            </p>

            <div className="mb-10 space-y-2">
              <p className="font-heading text-sm tracking-wider text-gold-light">
                Hampasagara Rd, Huvina Hadagali, Karnataka 583219 
              </p>
              <p className="font-body text-sm text-ivory/70">
                Huvina Hadagali, Karnataka 583219 
              </p>
            </div>

            <motion.a
              href="https://maps.app.goo.gl/dxN3SVDrfjq8frAN8"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-elegant inline-flex items-center gap-3 rounded-none border-gold-light px-8 py-4 text-gold-light hover:bg-gold-light hover:text-black"
            >
              <svg
                className="h-5 w-5"
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
                  d="M15 11a3 3 0 11-6 0 3 0 016 0z"
                />
              </svg>
              <span>Get Directions</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
