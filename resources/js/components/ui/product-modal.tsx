import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type Product = {
  name: string;
  description: string;
  image: string;
};

export default function ProductModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {product && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Wrapper */}
          <motion.div
            className="fixed inset-0 z-50 flex items-end md:items-center justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
          >
            <div
              className="
                bg-white w-full md:max-w-3xl
                rounded-t-3xl md:rounded-3xl
                max-h-[90vh]
                flex flex-col
                overflow-hidden
              "
            >
              {/* Header */}
              <div className="sticky top-0 z-10 bg-white flex items-center justify-between px-6 py-4 border-b">
                <h3 className="font-serif text-xl md:text-2xl">
                  {product.name}
                </h3>
                <button onClick={onClose}>
                  <X />
                </button>
              </div>

              {/* SCROLL AREA */}
              <div className="flex-1 overflow-y-auto">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 md:h-96 object-cover"
                />

                <div className="px-6 py-6">
                  <p className="text-gray-600 text-sm md:text-base text-justify whitespace-pre-line leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Footer (Desktop) */}
              <div className="hidden md:flex justify-center py-6 border-t">
                <button
                  onClick={onClose}
                  className="px-6 py-2 border rounded-full hover:bg-black hover:text-white transition"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>

        </>
      )}
    </AnimatePresence>
  );
}
