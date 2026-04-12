import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import bg from "@/assets/bg.png"
const Landing = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate("/home");
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#1a1a1a] text-white">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bg} // 👉 put your image in public folder
          alt="Wedding Background"
          className="h-full w-full object-cover opacity-40"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-serif tracking-wide"
        >
          Manjunath ❤️ Latha
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-sm md:text-lg tracking-[0.3em] text-white/70"
        >
          Wedding Invitation
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 h-[1px] w-32 bg-white/50"
        />

        {/* Enter Button */}
        <motion.button
          onClick={handleEnter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-10 px-8 py-3 border border-white/40 rounded-full text-lg tracking-widest hover:bg-white hover:text-black transition duration-300"
        >
          Enter Invitation 💍
        </motion.button>

        {/* Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-4 text-xs text-white/50"
        >
          Tap to begin the celebration
        </motion.p>
      </div>
    </div>
  );
};

export default Landing;