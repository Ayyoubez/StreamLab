import { BRAND_LOGOS, HERO_CONTENT } from "../constants";
import heroImage from "../assets/heroback.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const HeroSection = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="py-24 text-white lg:pt-36"
    >
      <div className="flex flex-col items-center max-w-7xl mx-auto text-center">
        <motion.div
          variants={fadeInUp}
          className="border border-neutral-800 px-4 py-2 rounded-full text-sm  text-neutral-500 mb-4"
        >
          {HERO_CONTENT.badgeText}
        </motion.div>
        <motion.h1
          variants={fadeInUp}
          className="pb-2 text-5xl lg:text-8xl my-4 font-semibold tracking-tighter bg-linear-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent "
        >
          {HERO_CONTENT.mainHeading.split("\n").map((txt, index) => {
            return (
              <span key={index}>
                {txt} <br />
              </span>
            );
          })}
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="max-w-xl text-sm text-neutral-500 my-5"
        >
          {HERO_CONTENT.subHeading}
        </motion.p>
        <motion.div variants={fadeInUp} className="mt-6 space-x-6">
          <a
            href="#"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-lg font-medium"
          >
            {HERO_CONTENT.callToAction.primary}
          </a>

          <a
            href="#"
            className="inline-block border border-gray-500 hover:border-gray-400 text-white py-3 px-6 rounded-lg font-medium"
          >
            {HERO_CONTENT.callToAction.secondary}
          </a>
        </motion.div>
        <motion.p variants={fadeInUp} className="my-4 text-gray-500 text-sm">
          {HERO_CONTENT.trustedByText}
        </motion.p>
        <motion.div
          variants={fadeIn}
          className="flex flex-wrap justify-center gap-6 pt-8"
        >
          {BRAND_LOGOS.map((logo, index) => {
            return (
              <img
                width={120}
                height={24}
                key={index}
                src={logo.src}
                alt={logo.alt}
              />
            );
          })}
        </motion.div>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12"
        >
          <img
            className="w-full rounded-3xl border border-neutral-800"
            src={heroImage}
            alt="Streamer Saas Interface"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
