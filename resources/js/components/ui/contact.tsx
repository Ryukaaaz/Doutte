import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-24 px-6 bg-[#FAF7F2] text-center" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mx-auto"
      >
        <h2 className="font-serif text-4xl mb-4">
          Get in Touch
        </h2>

        <p className="text-gray-600 mb-10">
          Order, collaboration, or just say hello.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="https://www.instagram.com/doutte.id/"
            target="_blank"
            className="px-6 py-3 border rounded-full hover:bg-black hover:text-white transition"
          >
            Instagram
          </a>

          <a
            href="https://tk.tokopedia.com/ZS5U4KfUM/"
            target="_blank"
            className="px-6 py-3 border rounded-full hover:bg-black hover:text-white transition"
          >
            Tokopedia
          </a>

          <a
            href="https://www.tiktok.com/@doutte?is_from_webapp=1&sender_device=pc"
            target="_blank"
            className="px-6 py-3 border rounded-full hover:bg-black hover:text-white transition"
          >
            Tiktok
          </a>
        </div>
      </motion.div>
    </section>
  );
}
