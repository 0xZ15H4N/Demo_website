import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isHomePage = location === '/';
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
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isHomePage
          ? isScrolled
            ? "bg-ivory shadow-lg"
            : "bg-transparent"
          : "bg-ivory shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 pt-2">
          {/* Logo */}
         <div className="flex items-center">
            <Link href="/">
              <div className="cursor-pointer">
                 <h1
                  className={`text-5xl font-great-vibes font-bold transition-colors duration-300 ${
                    isHomePage
                      ? isScrolled
                        ? "text-charcoal hover:text-burgundy-500"
                        : "text-white hover:text-gray-200"
                      : "text-charcoal hover:text-burgundy-500"
                  }`}
                >
                  Effoi
                </h1>
                <p
                  className={`text-sm font-montserrat mt-1 transition-colors duration-300 ${
                    isHomePage
                      ? isScrolled
                        ? "text-gray-600"
                        : "text-gray-300"
                      : "text-gray-600"
                  }`}
                >
                  Ethiopian cuisine
                </p>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`font-montserrat font-bold transition-colors duration-300 ${
                  location === item.path
                    ? 'text-blue-500'
                    : isHomePage && !isScrolled
                    ? 'text-white hover:text-blue-300'
                    : 'text-charcoal hover:text-blue-500'
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
      <div className={`md:hidden bg-ivory border-t border-gray-200 transition-all duration-300 ease-in-out overflow-hidden ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 py-4 space-y-3 transform transition-transform duration-300 ease-in-out">
          {navItems.map((item, index) => (
            <Link
              key={item.path}
              href={item.path}
              className={`block font-montserrat transition-all duration-300 ease-in-out transform hover:translate-x-2 ${
                location === item.path
                  ? 'text-blue-500'
                  : 'text-charcoal hover:text-blue-500'
              } ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-[-20px] opacity-0'}`}
              style={{ transitionDelay: `${index * 50}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <button className={`w-full bg-burgundy-500 text-ivory px-6 py-2 rounded-full hover:bg-burgundy-600 transition-all duration-300 ease-in-out font-montserrat transform hover:scale-105 ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-[-20px] opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            Reserve Table
          </button>
        </div>
      </div>
    </nav>
  );
}