import { motion,Variants } from "framer-motion";

const container: Variants  = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item: Variants  = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6 bg-[#FAF7F2]" id="hero">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center"
      >
        <motion.img
            variants={item}
            src="/image/logo_doutte.jpg"
            alt="Doutte logo"
            className="w-32 mx-auto mb-6"
            transition={{ duration: 0.8 }}
        />

        <motion.h1
          variants={item}
          className="font-serif text-6xl mb-4"
        >
          Doutte
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg text-gray-600 max-w-xl mx-auto "
        >
          Sourdough & Coffee crafted with care
        </motion.p>

        <motion.p
          variants={item}
          className="text-lg text-gray-600 max-w-xl mx-auto mt-1"
        >
          ☕ Coffee 1L | 🍞 Artisan Sourdough
        </motion.p>

        <motion.p
          variants={item}
          className="text-lg text-gray-600 max-w-xl mx-auto mt-1"
        >
          🎁 Year-End Hampers Available
        </motion.p>
        
        <motion.p
          variants={item}
          className="text-lg text-gray-600 max-w-xl mx-auto mt-1"
        >
          📦 Online Order | Non Pre-order
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex gap-4 justify-center"
        >
          <a
            href="#contact"
            className="px-6 py-3 border border-foreground text-coffee rounded-full hover:bg-black hover:text-white transition"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
