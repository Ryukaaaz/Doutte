import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-[#FAF7F2]"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h2
          variants={item}
          className="font-serif text-4xl mb-6"
        >
          About Doutte
        </motion.h2>

        <motion.p
          variants={item}
          className="text-gray-600 text-lg leading-relaxed"
        >
          Doutte is a small artisan kitchen focusing on naturally leavened
          sourdough and carefully crafted coffee. We believe in slow
          fermentation, honest ingredients, and thoughtful brewing.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div>
            <h3 className="font-serif text-xl mb-2">Slow Fermentation</h3>
            <p className="text-sm text-gray-600">
              Naturally leavened sourdough fermented for depth of flavor.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-2">Quality Beans</h3>
            <p className="text-sm text-gray-600">
              Carefully sourced beans brewed with precision and care.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-2">Small Batch</h3>
            <p className="text-sm text-gray-600">
              Crafted in limited batches to maintain consistency and quality.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
