import { motion } from "framer-motion";
import weddingVideo from "../../assets/video.mp4"; // update path if needed

const VideoSection = () => {
  return (
    <section className="relative bg-muted py-20 md:py-32">
      {/* Background Pattern */}
      <div className="mandala-bg absolute inset-0 opacity-30" />

      <div className="relative">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:mb-16"
        >
          <h2 className="section-title mb-4 text-sm text-accent md:text-base">
            Our Story in Motion
          </h2>
          <div className="divider-gold mx-auto w-24" />
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl px-4 md:px-8"
        >
          <div className="relative overflow-hidden rounded-sm shadow-elegant">
            {/* Video */}
            <video
              src={weddingVideo}
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
              className="aspect-[4/3] w-full object-cover"
            />

            {/* Soft Vignette */}
            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.2)]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
