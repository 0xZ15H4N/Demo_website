import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/menu", label: "Menu" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-ivory shadow-lg' : 'bg-ivory/95 backdrop-blur-md shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-3xl font-great-vibes text-burgundy-500 cursor-pointer hover:text-burgundy-600 transition-colors">
                Lumière
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`font-montserrat font-medium transition-colors ${
                  location === item.path
                    ? 'text-burgundy-500'
                    : 'text-charcoal hover:text-burgundy-500'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button className="bg-burgundy-500 text-ivory px-6 py-2 rounded-full hover:bg-burgundy-600 transition-colors font-montserrat hover-lift">
              Reserve Table
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-charcoal hover:text-burgundy-500 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-ivory border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block font-montserrat transition-colors ${
                  location === item.path
                    ? 'text-burgundy-500'
                    : 'text-charcoal hover:text-burgundy-500'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button className="w-full bg-burgundy-500 text-ivory px-6 py-2 rounded-full hover:bg-burgundy-600 transition-colors font-montserrat">
              Reserve Table
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
