import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronDown, Crown, Sparkles } from "lucide-react";
import { useFadeIn, useParallax } from "@/hooks/use-gsap";

export default function Home() {
  const heroRef = useParallax(0.5);
  const featuresRef = useFadeIn();

  useEffect(() => {
    document.title = "Lumière - Fine Dining Experience | Home";
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax Background */}
      <div className="relative h-screen overflow-hidden">
        <div
          ref={heroRef}
          className="absolute inset-0 bg-cover bg-center parallax-bg"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        
        <div className="absolute inset-0 gradient-overlay opacity-90" />
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-playfair font-bold text-ivory mb-6 text-shadow">
              Culinary 
              <span className="text-gold-500 font-great-vibes block">Artistry</span>
            </h1>
            <p className="text-xl md:text-2xl text-ivory/90 mb-8 font-lora">
              Where molecular gastronomy meets timeless elegance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/menu">
                <button className="bg-gold-500 text-charcoal px-8 py-4 rounded-full font-montserrat font-semibold hover:bg-gold-400 transition-all hover-lift">
                  Explore Menu
                </button>
              </Link>
              <Link href="/contact">
                <button className="border-2 border-ivory text-ivory px-8 py-4 rounded-full font-montserrat font-semibold hover:bg-ivory hover:text-charcoal transition-all hover-lift">
                  Make Reservation
                </button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-ivory animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </div>
      </div>
      
      {/* Features Section */}
      <div className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-playfair font-bold text-charcoal mb-4">Experience Excellence</h2>
            <p className="text-xl text-gray-600 font-lora">Where innovation meets tradition</p>
          </div>
          
          <div ref={featuresRef} className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-burgundy-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-ivory" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.5 2h7l.5.5v3l-.5.5h-7L8 5.5v-3L8.5 2zM9 3v2h6V3H9zm7 3v11.5c0 1.38-1.12 2.5-2.5 2.5h-3c-1.38 0-2.5-1.12-2.5-2.5V6h8zm-6 2v9.5c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5V8H10z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-playfair font-semibold text-charcoal mb-4">Master Chefs</h3>
              <p className="text-gray-600 font-poppins">Award-winning culinary artists crafting extraordinary dining experiences</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-forest-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-ivory" />
              </div>
              <h3 className="text-2xl font-playfair font-semibold text-charcoal mb-4">Molecular Gastronomy</h3>
              <p className="text-gray-600 font-poppins">Revolutionary techniques creating visually stunning and delicious masterpieces</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Crown className="w-10 h-10 text-charcoal" />
              </div>
              <h3 className="text-2xl font-playfair font-semibold text-charcoal mb-4">Luxury Ambiance</h3>
              <p className="text-gray-600 font-poppins">Sophisticated atmosphere designed for unforgettable moments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
