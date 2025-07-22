import { PlusCircle } from "lucide-react";
import type { MenuItem } from "@/data/menu-items";
import { useFadeIn } from "@/hooks/use-gsap";

interface MenuItemProps {
  item: MenuItem;
  delay?: number;
}

export default function MenuItemCard({ item, delay = 0 }: MenuItemProps) {
  const fadeRef = useFadeIn();

  return (
    <div
      ref={fadeRef}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift"
      style={{ animationDelay: `${delay}s` }}
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-playfair font-semibold text-charcoal mb-2">
          {item.name}
        </h3>
        <p className="text-gray-600 text-sm font-poppins mb-4">
          {item.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-burgundy-500">
            ${item.price}
          </span>
          <button className="text-gold-500 hover:text-gold-600 transition-colors">
            <PlusCircle className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
