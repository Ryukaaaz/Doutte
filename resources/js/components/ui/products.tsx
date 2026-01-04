import { useState } from "react";
import { motion, Variants } from "framer-motion";
import ProductModal from "./product-modal";

const products = [
  {
    name: "Classic Plain Sourdough",
    description: "Roti Sourdough Polos Klasik untuk hari spesial Anda. Dipanggang setiap hari dengan penuh cinta. Tanpa telur, tanpa tambahan gula, tanpa susu, dan tanpa lemak. Ramah bagi penderita laktosa dan vegan.",
    image: "/image/doutte_sourdough.jpeg",
  },
  {
    name: "Premium Palm Sugar Latte (1 Litre)",
    description: `Nikmati kemewahan rasa kopi susu gula aren yang berbeda. Dengan 100% Biji Kopi Arabica Autentik dari Brazil yang diimpor langsung ke Indonesia untuk menjamin kualitas dan aroma terbaik di setiap tetesnya.

    • The Beans: Full Arabica Brazil (Imported) — dikenal dengan profil rasa yang nutty, chocolatey, dan tingkat keasaman yang rendah.
    • The Mix: Perpaduan sempurna Premium Palm Sugar, susu segar, dan creamer untuk tekstur yang super smooth dan legit.
    • Size: 1000ml (Cukup untuk 4-5 gelas).

    Saran Penyajian:
    Kocok dahulu sebelum dituang. Paling nikmat dinikmati dalam keadaan dingin atau dituang ke gelas berisi es batu.`,
    image: "/image/doutte_latte.jpeg",
  },
];

export default function Products() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <>
      <section id="products" className="py-24 px-6 bg-[#FAF7F2]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 className="font-serif text-4xl text-center mb-12">
            Our Products
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {products.map((product) => (
              <motion.div
                key={product.name}
                whileHover={{ y: -6 }}
                onClick={() => setSelected(product)}
                className="cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="font-serif text-2xl mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 whitespace-pre-line">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <ProductModal
        product={selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
