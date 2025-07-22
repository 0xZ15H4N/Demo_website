import { useState, useEffect } from "react";
import { menuItems } from "@/data/menu-items";
import MenuItemCard from "@/components/menu-item";
import { useFadeIn } from "@/hooks/use-gsap";

export default function Menu() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [filteredItems, setFilteredItems] = useState(menuItems);
  const headerRef = useFadeIn();

  useEffect(() => {
    document.title = "Lumière - Culinary Menu | Fine Dining";
  }, []);

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredItems(menuItems);
    } else {
      setFilteredItems(menuItems.filter(item => item.category === activeFilter));
    }
  }, [activeFilter]);

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'appetizers', label: 'Appetizers' },
    { id: 'mains', label: 'Main Courses' },
    { id: 'desserts', label: 'Desserts' }
  ];

  return (
    <div className="pt-32 pb-20 bg-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Menu Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h1 className="text-6xl font-playfair font-bold text-charcoal mb-4">Culinary Menu</h1>
          <p className="text-xl text-gray-600 font-lora max-w-2xl mx-auto">
            A curated selection of extraordinary dishes that push the boundaries of culinary innovation
          </p>
        </div>

        {/* Menu Categories */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-montserrat transition-colors ${
                  activeFilter === category.id
                    ? 'bg-burgundy-500 text-ivory'
                    : 'bg-gray-200 text-charcoal hover:bg-burgundy-500 hover:text-ivory'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map((item, index) => (
            <MenuItemCard
              key={item.id}
              item={item}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
