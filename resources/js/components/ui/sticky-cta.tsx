import { ShoppingBag } from "lucide-react";


export default function StickyCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://tk.tokopedia.com/ZS5U4KfUM/"
        target="_blank"
        className="flex items-center gap-2 px-5 py-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition"
      >
        <ShoppingBag size={16} />
        Order Now !!!
      </a>
    </div>
  );
}
