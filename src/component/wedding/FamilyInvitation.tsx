import { motion } from "framer-motion";

const FamilyInvitation = () => {
  return (
    <section className="relative overflow-hidden bg-primary/30 py-24 md:py-32">
      {/* Ornamental Corners */}
      <div className="absolute left-4 top-4 h-20 w-20 border-l border-t border-accent/20 md:left-8 md:top-8 md:h-32 md:w-32" />
      <div className="absolute bottom-4 right-4 h-20 w-20 border-b border-r border-accent/20 md:bottom-8 md:right-8 md:h-32 md:w-32" />

      {/* Background Pattern */}
      <div className="mandala-bg absolute inset-0 opacity-20" />

      <div className="container relative mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title mb-8 text-sm text-accent md:text-base">
            With the Blessings of Our Beloved Families
          </h2>
        </motion.div>

        {/* Families */}
        <div className="mb-12 grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Bride's Family */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="font-heading mb-2 text-sm uppercase tracking-[0.2em] text-accent">
              Groom's Family
            </p>
            <p className="font-display text-2xl text-foreground md:text-3xl">
               Mr. & Mrs. Patil
            </p>
            <p className="font-body mt-2 text-foreground/60">
              Cordially invite you to the wedding of their Son
            </p>
            <p className="font-display mt-4 text-xl text-accent">Manjunath Patil</p>
          </motion.div>

          {/* Groom's Family */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="font-heading mb-2 text-sm uppercase tracking-[0.2em] text-accent">
              Bride's Family
            </p>
            <p className="font-display text-2xl text-foreground md:text-3xl">
              Mr. & Mrs. Sangenhalli
            </p>
            <p className="font-body mt-2 text-foreground/60">
              Cordially invite you to the wedding of their Daughter
            </p>
            <p className="font-display mt-4 text-xl text-accent">Latha ( Sharadha)</p>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="divider-gold mx-auto mb-12 w-32"
        />

        {/* Invitation Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="font-heading text-lg leading-relaxed text-foreground/80 md:text-xl">
            We request the pleasure of your company as we celebrate the union of our beloved children. 
            Your presence and blessings will make this occasion truly memorable.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FamilyInvitation;
