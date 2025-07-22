import type { Chef } from "@/data/chefs";
import { useFadeIn } from "@/hooks/use-gsap";

interface ChefCardProps {
  chef: Chef;
  delay?: number;
}

export default function ChefCard({ chef, delay = 0 }: ChefCardProps) {
  const fadeRef = useFadeIn();

  return (
    <div
      ref={fadeRef}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift"
      style={{ animationDelay: `${delay}s` }}
    >
      <img
        src={chef.image}
        alt={chef.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-playfair font-semibold text-charcoal mb-2">
          {chef.name}
        </h3>
        <p className="text-burgundy-500 font-montserrat mb-3">
          {chef.title}
        </p>
        <p className="text-gray-600 font-poppins text-sm">
          {chef.description}
        </p>
      </div>
    </div>
  );
}
