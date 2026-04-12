import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import couple1 from "../../assets/1.jpeg";
import couple2 from "../../assets/2.jpeg";
import couple3 from "../../assets/3.jpeg";
import couple4 from "../../assets/4.jpeg";
import couple5 from "../../assets/5.jpeg";
import couple6 from "../../assets/6.jpeg";
import couple7 from "../../assets/7.jpeg";
const images = [couple1, couple2, couple3, couple4,couple5,couple6,couple7];

const PhotoSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);

    // Auto-play
    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 5000);

    return () => {
      clearInterval(autoplay);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

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
            Our Journey Together
          </h2>
          <div className="divider-gold mx-auto w-24" />
        </motion.div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative flex-[0_0_100%] px-4 md:flex-[0_0_60%] md:px-12"
              >
                <motion.div
                  initial={{ opacity: 0.5 }}
                  animate={{
                    opacity: selectedIndex === index ? 1 : 0.4,
                    scale: selectedIndex === index ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.6 }}
                  className="relative overflow-hidden rounded-sm shadow-elegant"
                >
                  {/* Image with Zoom Effect */}
                  <motion.div
  animate={{
    scale: selectedIndex === index ? [1, 1.05] : 1,
  }}
  transition={{ duration: 5, ease: "easeOut" }}
  className="w-full flex items-center justify-center bg-black"
>
  <img
    src={image}
    alt={`Couple moment ${index + 1}`}
    className="max-h-[500px] md:max-h-[600px] w-auto object-contain"
  />
</motion.div>

                  {/* Soft Vignette */}
                  <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.15)]" />
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="mt-8 flex justify-center gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-500 ${
                selectedIndex === index
                  ? "w-8 bg-accent"
                  : "w-2 bg-accent/30 hover:bg-accent/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoSlider;
