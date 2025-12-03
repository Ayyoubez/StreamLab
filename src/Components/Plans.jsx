// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { PLANS_CONTENT } from "../constants";

const childVarients = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Plans = () => {
  return (
    <section id="plans">
      <div className="max-w-7xl mx-auto mt-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 border-t border-neutral-800"
        >
          <h2 className="text-3xl lg:text-5xl tracking-tighter bg-linear-to-t from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent mt-10 ">
            {PLANS_CONTENT.sectionTitle}
          </h2>
          <p className="mt-4 text-neutral-400">
            {PLANS_CONTENT.sectionDescription}
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{ visible: { transition: { staggerChildren: 0.5 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {PLANS_CONTENT.plans.map((plan, index) => {
            return (
              <motion.div
                key={index}
                variants={childVarients}
                custom={index}
                className={`mx-4 hover:-translate-y-3.5 transition-transform duration-500 p-8 rounded-xl shadow-lg bg-blue-800/30 my-4 ${
                  plan.popular
                    ? "border border-blue-500"
                    : "border border-neutral-800 pt-[52px]"
                }`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-blue-600 text-white text-xs py-1 px-3 rounded-full uppercase">
                      {PLANS_CONTENT.popularBadge}
                    </span>
                  </div>
                )}
                <h3 className="text-white text-lg lg:text-xl mb-4 tracking-tighter uppercase">
                  {plan.name}
                </h3>
                <p className="text-neutral-400 mb-6">{plan.description}</p>
                <div className="text-2xl font-medium lg:text-3xl mb-6 text-white">
                  {plan.price}
                </div>
                <ul className="mb-8 space-y-2 text-neutral-400">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="inline-block w-2 h-2 bg-neutral-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="text-white w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 rounded-lg">
                  {PLANS_CONTENT.ctaText}
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Plans;
