import { motion } from "framer-motion";
import heroImage from "@/assets/footer.png";

const ClosingSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Arpitha & Anil"
          className="
            h-full w-full object-cover
            object-[62%_center]
            md:object-center
            romantic-image
          "
        />

        {/* Rich Overlay */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Thank You */}
          <h2 className="font-display mb-6 text-4xl text-ivory md:text-5xl lg:text-6xl">
            Thank You
          </h2>

          <p className="font-heading mx-auto mb-4 max-w-md text-lg text-ivory/80 md:text-xl">
            for being a part of our special day
          </p>

          <div className="divider-gold mx-auto my-10 w-24" />

          {/* Couple Names */}
          <p className="font-display mb-12 text-3xl text-gold-light md:text-4xl">
            Manjunath Patil & Latha (Sharadha)
          </p>

          {/* RSVP Buttons */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/916361964039"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-elegant flex items-center gap-3 rounded-none border-gold-light px-8 py-4 text-gold-light hover:bg-gold-light hover:text-black"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
              <span>RSVP on WhatsApp</span>
            </motion.a>

            {/* Call */}
            <motion.a
              href="tel:+916361964039"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-elegant flex items-center gap-3 rounded-none border-ivory/50 px-8 py-4 text-ivory/80 hover:bg-ivory/20"
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>Call Us</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="absolute bottom-8 text-center"
        >
          <p className="font-body text-xs tracking-wider text-ivory/40">
            Made with love for our special day
          </p>
          <p className="font-body text-xs tracking-wider text-ivory/40">
            Designed and Developed by Sid&apos;s PixelVows
          </p>
          <p className="font-body text-xs tracking-wider text-ivory/40">
            Contact: 8951682834
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingSection;
