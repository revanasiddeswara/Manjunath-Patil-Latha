import { motion } from "framer-motion";

const SacredBlessing = () => {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      {/* Decorative Elements */}
      <div className="absolute left-0 top-0 h-32 w-32 opacity-10">
        <svg viewBox="0 0 100 100" className="h-full w-full fill-accent">
          <path d="M50 0 L100 50 L50 100 L0 50 Z" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 h-32 w-32 opacity-10">
        <svg viewBox="0 0 100 100" className="h-full w-full fill-accent">
          <path d="M50 0 L100 50 L50 100 L0 50 Z" />
        </svg>
      </div>

      <div className="container relative mx-auto max-w-4xl px-6 text-center">
        {/* Sanskrit Symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="font-display text-5xl text-accent md:text-6xl">ॐ</span>
        </motion.div>

        {/* Blessing Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
       <p className="font-heading text-sm leading-relaxed text-foreground/75 md:text-base lg:text-lg">
  ॥ ಓಂ ಸ್ವಸ್ತಿ ನ ಇಂದ್ರೋ ವೃದ್ಧಶ್ರವಾಃ ॥
</p>
<p className="font-heading mt-2 text-sm leading-relaxed text-foreground/75 md:text-base lg:text-lg">
  ಸ್ವಸ್ತಿ ನಃ ಪೂಷಾ ವಿಶ್ವವೇದಾಃ ।
</p>
<p className="font-heading mt-2 text-sm leading-relaxed text-foreground/75 md:text-base lg:text-lg">
  ಸ್ವಸ್ತಿ ನಸ್ತಾರ್ಕ್ಷ್ಯೋ ಅರಿಷ್ಟನೇಮಿಃ ।
</p>
<p className="font-heading mt-2 text-sm leading-relaxed text-foreground/75 md:text-base lg:text-lg">
  ಸ್ವಸ್ತಿ ನೋ ಬೃಹಸ್ಪತಿರ್ದಧಾತು ॥
</p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="divider-gold mx-auto mt-12 w-32"
        />

        {/* Sanskrit Verse */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          viewport={{ once: true }}
          className="mt-8 font-heading text-sm italic tracking-wide text-accent md:text-base"
        >
          सप्तपदी — Seven steps together, forever bound
        </motion.p>
      </div>
    </section>
  );
};

export default SacredBlessing;
