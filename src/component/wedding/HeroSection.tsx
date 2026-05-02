import { motion } from "framer-motion";
import heroImage from "@/assets/8.jpeg";
import Countdown from "@/component/wedding/Countdown";

const HeroSection = () => {
const brideLetters = "Manjunath Patil".split("");
const groomLetters = "Latha (Sharadha)".split("");

const handleAddToCalendar = () => {
const startDate = "20260508T033000Z"; // 9:00 AM IST
const endDate = "20260508T113000Z";   // 5:00 PM IST


const baseUrl = "https://www.google.com/calendar/render?action=TEMPLATE";

const params = new URLSearchParams({
  text: "Manjunath Patil & Latha Wedding",
  dates: `${startDate}/${endDate}`,
  details: "Join us for our wedding celebration",
  location: "Huvinahadagali, Karnataka",
});

const finalUrl = `${baseUrl}&${params.toString()}`;
window.open(finalUrl, "_blank");


};

return ( <section className="relative h-screen w-full overflow-hidden">

```
  {/* Background Image */}
  <motion.div
    initial={{ scale: 1 }}
    animate={{ scale: 1.05 }}
    transition={{ duration: 20, ease: "easeOut" }}
    className="absolute inset-0"
  >
    <img
      src={heroImage}
      alt="Wedding"
      className="
        h-screen md:h-full
        w-full
        object-cover
        object-left md:object-center
      "
    />
  </motion.div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/55 md:bg-black/45 z-[1]" />

  {/* Content */}
  <div className="relative z-10 flex h-full flex-col items-center justify-end px-2  md:pb-10 text-center">

    {/* Names */}
    <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">

      {/* Bride */}
      <div className="flex flex-wrap justify-center">
        {brideLetters.map((letter, index) => (
          <motion.span
            key={`bride-${index}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1 + index * 0.1,
            }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading text-[#f8f6f2]"
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* & */}
      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="text-2xl md:text-5xl font-heading text-[#f8f6f2]"
      >
        &
      </motion.span>

      {/* Groom */}
      <div className="flex flex-wrap justify-center">
        {groomLetters.map((letter, index) => (
          <motion.span
            key={`groom-${index}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 2 + index * 0.1,
            }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading text-[#f8f6f2]"
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </div>

    {/* Divider */}
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: 3 }}
      className="my-6 h-px w-24 md:w-40 bg-[#d4af37]/70"
    />

    {/* Date */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 3.5 }}
      className="text-xs md:text-base tracking-[0.3em] text-white/80"
    >
      May 8, 2026
    </motion.p>

    {/* Countdown */}
    <Countdown />

    {/* Save the Date */}
    <button
      onClick={handleAddToCalendar}
      className="
        mt-5 px-6 py-3
        bg-[#d4af37]
        text-black
        text-sm md:text-base
        tracking-wide
        rounded-full
        hover:bg-[#c59b2f]
        transition-all duration-300
      "
    >
      Save the Date
    </button>

    {/* Tagline */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 4 }}
      className="mt-3 text-base md:text-xl italic font-heading text-white/70"
    >
      A celebration of love
    </motion.p>
  </div>

  {/* Scroll Indicator */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 4.5 }}
    className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
  >
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="flex flex-col items-center gap-2"
    >
      <span className="text-xs uppercase tracking-[0.2em] text-white/50">
        Scroll
      </span>
      <div className="h-6 w-px bg-gradient-to-b from-[#d4af37]/60 to-transparent" />
    </motion.div>
  </motion.div>
</section>
);
};

export default HeroSection;
