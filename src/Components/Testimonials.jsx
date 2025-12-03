// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { TESTIMONIALS_CONTENT } from "../constants";
const Testimonials = () => {
  const testimonialsVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };
  return (
    <section id="Testimonials">
      <div className="max-w-7xl mx-auto mt-20">
        <motion.div
          className="text-center mb-12 border-t border-neutral-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-linear-to-t from-neutral-50 via-neutral-300 to-neutral-600 text-transparent bg-clip-text">
            {TESTIMONIALS_CONTENT.sectionTitle}
          </h2>
          <p className="text-neutral-400 mt-4">
            {TESTIMONIALS_CONTENT.sectionDescription}
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {TESTIMONIALS_CONTENT.reviews.map((review, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={testimonialsVariants}
              className="mt-10 flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-blue-800/30 p-10"
            >
              <p className="mb-4 text-neutral-200">{review.review}</p>
              <div className="flex items-center mt-4">
                <img
                  className="w-12 h-12 rounded-full mr-4"
                  src={review.image}
                  alt={review.alt}
                />
                <div>
                  <p className="text-sm font-bold text-white">{review.name}</p>
                  <p className="text-sm  text-neutral-600">{review.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
