import { motion } from "framer-motion";
import couple1 from "@/assets/step1.png";
import couple2 from "@/assets/step2.png";
import couple3 from "@/assets/step3.png";
import couple4 from "@/assets/step4.png";
import couple5 from "@/assets/step5.png";
import couple6 from "@/assets/step6.png";
import couple7 from "@/assets/step7.png";

const moments = [
  { text: "Two souls, one beautiful journey", image: couple1 },
  { text: "In every smile, a promise", image: couple2 },
  { text: "Forever starts with us", image: couple3 },
  { text: "Together in every moment", image: couple4 },
  { text: "Bound by love", image: couple5 },
  { text: "A lifetime begins", image: couple6 },
  { text: "Our forever story", image: couple7 },
];

const MomentsSection = () => {
  return (
    <section className="bg-[#0f0f0f] py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-yellow-500 tracking-[0.3em] text-sm mb-4">
  ಸಪ್ತಪದಿ
</h2>
<p className="text-3xl md:text-4xl text-white font-serif">
  ಜೀವನಪಥದ ಏಳು ಪವಿತ್ರ ಹೆಜ್ಜೆಗಳು
</p>
        </motion.div>

        {/* SINGLE CLEAN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {moments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              {/* Image */}
              <img
                src={item.image}
                alt="Couple moment"
                className="w-full h-auto object-contain mx-auto rounded-lg"
              />

              {/* Divider */}
              <div className="w-10 h-[2px] bg-yellow-500 mx-auto my-4" />

              {/* Text BELOW image */}
              <p className="text-white text-lg md:text-xl font-serif px-4">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MomentsSection;