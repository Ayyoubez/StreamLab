import { HOW_IT_WORKS_CONTENT } from "../constants";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const HowItWorks = () => {
  const stepVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };
  return (
    <section id="works">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          viewport={{ once: true, amount: 0.3 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="text-center mb-12 border-t border-neutral-800"
        >
          <h2 className="text-3xl lg:text-5xl text-transparent bg-linear-to-t from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text">
            {HOW_IT_WORKS_CONTENT.sectionTitle}
          </h2>
          <p className="mt-4 text-neutral-400 max-w-xl mx-auto">
            {HOW_IT_WORKS_CONTENT.sectionDescription}
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {HOW_IT_WORKS_CONTENT.steps.map((step, index) => {
            return (
              <motion.div
                custom={index}
                variants={stepVariants}
                key={index}
                className="bg-blue-800/30 0 p-6 rounded-xl shadow-xl flex flex-col justify-center"
              >
                <h3 className="text-white font-medium mb-4">{step.title}</h3>
                <p className="text-neutral-400 mb-4">{step.description}</p>
                <div className="flex justify-center">
                  <img
                    className="rounded-xl w-full h-50 md:h-100 object-cover"
                    src={step.imageSrc}
                    alt={step.imageAlt}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
