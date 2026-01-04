import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all ${
        scrolled
          ? "bg-[#FAF7F2]/90 backdrop-blur border-b border-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <img
            src="/image/logo_doutte.jpg"
            alt="Doutte"
            className="w-8 h-8 rounded-full"
          />
          <span className="font-serif text-lg">Doutte</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#hero" className="hover:opacity-60 transition">
            Home
          </a>
          <a href="#about" className="hover:opacity-60 transition">
            About
          </a>
          <a href="#products" className="hover:opacity-60 transition">
            Products
          </a>
          <a href="#contact" className="hover:opacity-60 transition">
            Contact
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#FAF7F2]/95 backdrop-blur border-t border-black/5"
        >
          <div className="px-6 py-6 flex flex-col gap-4 text-sm">
            <a onClick={() => setOpen(false)} href="#hero">
              Home
            </a>
            <a onClick={() => setOpen(false)} href="#about">
              About
            </a>
            <a onClick={() => setOpen(false)} href="#products">
              Products
            </a>
            <a onClick={() => setOpen(false)} href="#contact">
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
