export interface Chef {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
}

export const chefs: Chef[] = [
  {
    id: 1,
    name: "Marcus Williams",
    title: "Executive Chef & Founder",
    description: "Pioneering molecular gastronomy with 15 years of experience in Michelin-starred kitchens.",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 2,
    name: "Isabella Chen",
    title: "Sous Chef",
    description: "Expert in Asian fusion techniques and innovative flavor combinations.",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 3,
    name: "Antoine Dubois",
    title: "Pastry Chef",
    description: "Master of innovative desserts and architectural sugar work.",
    image: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  }
];
