import { Link } from "wouter";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-4xl font-great-vibes text-gold-500 mb-4">Lumière</h3>
            <p className="text-gray-300 font-poppins mb-6 max-w-md">
              Where culinary artistry meets molecular innovation. Experience the extraordinary at every bite.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold-500 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold-500 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold-500 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold-500 transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-montserrat font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-poppins">
              <li><Link href="/menu" className="text-gray-300 hover:text-gold-500 transition-colors">Menu</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-gold-500 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-gold-500 transition-colors">Reservations</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-gold-500 transition-colors">Private Events</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold-500 transition-colors">Gift Cards</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-montserrat font-semibold mb-4">Contact</h4>
            <div className="space-y-2 font-poppins text-gray-300">
              <p>123 Culinary Avenue</p>
              <p>New York, NY 10001</p>
              <p>+1 (555) 123-CHEF</p>
              <p>reservations@lumiere.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 font-poppins">
            © 2024 Lumière. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
