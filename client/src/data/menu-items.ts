export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'appetizers' | 'mains' | 'desserts';
  image: string;
  featured?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Truffle-Infused Lobster Ravioli",
    description: "Hand-made pasta filled with Maine lobster, black truffle, and mascarpone",
    price: 48,
    category: "appetizers",
    image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 2,
    name: "Molecular Gastronomy Nitro Tacos",
    description: "Deconstructed tacos with liquid nitrogen spheres and micro-greens",
    price: 35,
    category: "appetizers",
    image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 3,
    name: "24K Gold Foie Gras Sliders",
    description: "Premium foie gras with edible gold leaf on brioche buns",
    price: 85,
    category: "appetizers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 4,
    name: "Rainbow Uni Caviar Tower",
    description: "Fresh sea urchin and rainbow caviar in vertical presentation",
    price: 120,
    category: "appetizers",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 5,
    name: "Dragon's Breath Popcorn",
    description: "Liquid nitrogen popcorn that creates a smoking effect",
    price: 18,
    category: "appetizers",
    image: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 6,
    name: "Blue Lava Sushi Bombs",
    description: "Signature sushi with blue spirulina and explosive flavor bursts",
    price: 65,
    category: "mains",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 7,
    name: "Espresso-Glazed Duck Confit",
    description: "Slow-cooked duck leg with espresso glaze and seasonal vegetables",
    price: 78,
    category: "mains",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 8,
    name: "Deconstructed Pav Bhaji Tacos",
    description: "Modern take on Mumbai street food in taco form",
    price: 42,
    category: "mains",
    image: "https://images.unsplash.com/photo-1613564834361-9436948817d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 9,
    name: "Matcha Smoke Ramen",
    description: "House-made noodles in matcha-infused broth with smoking presentation",
    price: 38,
    category: "mains",
    image: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 10,
    name: "Black Garlic Wagyu Burgers",
    description: "A5 Wagyu beef with black garlic aioli on charcoal buns",
    price: 95,
    category: "mains",
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 11,
    name: "Flame-Grilled Chimichurri Octopus",
    description: "Mediterranean octopus with Argentinian chimichurri",
    price: 68,
    category: "mains",
    image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 12,
    name: "Vegan Jackfruit Pulled 'Pork' Sliders",
    description: "Plant-based jackfruit with BBQ sauce on artisan buns",
    price: 32,
    category: "mains",
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 13,
    name: "Liquid Nitrogen Pesto Pasta",
    description: "Fresh pasta with basil pesto, served with dramatic smoking effect",
    price: 44,
    category: "mains",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 14,
    name: "Pan-Seared Miso Halibut",
    description: "Pacific halibut with white miso glaze and seasonal vegetables",
    price: 72,
    category: "mains",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 15,
    name: "Fusion Tandoori Pizza",
    description: "Wood-fired pizza with tandoori chicken and Indian spices",
    price: 36,
    category: "mains",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 16,
    name: "Charcoal Ice Cream Croissant",
    description: "Activated charcoal croissant with vanilla bean gelato",
    price: 28,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 17,
    name: "Saffron Pistachio Kulfi Cheesecake",
    description: "Indian-inspired cheesecake with saffron and crushed pistachios",
    price: 32,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 18,
    name: "Lychee Rose Panna Cotta",
    description: "Silky panna cotta infused with rose water and fresh lychee",
    price: 24,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 19,
    name: "Edible Helium Balloon Desserts",
    description: "Sugar balloon with helium that changes your voice",
    price: 45,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 20,
    name: "Honeycomb Brûlée Latte",
    description: "Espresso drink with honeycomb foam art and brûléed sugar top",
    price: 16,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  }
];
