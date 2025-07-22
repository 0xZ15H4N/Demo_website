import { useEffect } from "react";
import { chefs } from "@/data/chefs";
import ChefCard from "@/components/chef-card";
import { useFadeIn } from "@/hooks/use-gsap";

export default function About() {
  const headerRef = useFadeIn();
  const timelineRef = useFadeIn();
  const chefsRef = useFadeIn();
  const galleryRef = useFadeIn();

  useEffect(() => {
    document.title = "Effoi - Our Story | About Us";
  }, []);

  const timelineEvents = [
    {
      year: "2015",
      title: "The Beginning",
      description: "Chef Marcus Williams opened Lumière with a vision to revolutionize fine dining through molecular gastronomy.",
      color: "burgundy"
    },
    {
      year: "2017",
      title: "First Michelin Star",
      description: "Recognition of our innovative approach to cuisine with our first Michelin star.",
      color: "gold"
    },
    {
      year: "2020",
      title: "Global Recognition",
      description: "Featured in World's 50 Best Restaurants and awarded second Michelin star.",
      color: "forest"
    },
    {
      year: "2024",
      title: "Innovation Lab",
      description: "Opening of our culinary innovation lab, pushing the boundaries of food science.",
      color: "burgundy"
    }
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Main dining room"
    },
    {
      src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Bar area"
    },
    {
      src: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Private dining"
    },
    {
      src: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Open kitchen"
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Wine cellar"
    },
    {
      src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Outdoor terrace"
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h1 className="text-6xl font-playfair font-bold text-charcoal mb-4">Our Story</h1>
          <p className="text-xl text-gray-600 font-lora max-w-3xl mx-auto">
            A journey of culinary innovation where tradition meets the extraordinary
          </p>
        </div>

        {/* Timeline Section */}
        <div ref={timelineRef} className="mb-20">
          <h2 className="text-4xl font-playfair font-bold text-center text-charcoal mb-12">Our Journey</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-burgundy-500"></div>
            
            {/* Timeline Items */}
            <div className="space-y-16">
              {timelineEvents.map((event, index) => (
                <div key={event.year} className="flex items-center justify-center">
                  {index % 2 === 0 ? (
                    <>
                      <div className="w-1/2 pr-8 text-right">
                        <div className="bg-white p-6 rounded-2xl shadow-lg hover-lift">
                          <h3 className="text-2xl font-playfair font-semibold text-charcoal mb-2">{event.year}</h3>
                          <h4 className="text-xl font-montserrat font-medium text-burgundy-500 mb-3">{event.title}</h4>
                          <p className="text-gray-600 font-poppins">{event.description}</p>
                        </div>
                      </div>
                      <div className={`w-6 h-6 bg-${event.color}-500 rounded-full border-4 border-ivory z-10`}></div>
                      <div className="w-1/2 pl-8"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/2 pr-8"></div>
                      <div className={`w-6 h-6 bg-${event.color === 'gold' ? 'gold' : event.color}-500 rounded-full border-4 border-ivory z-10`}></div>
                      <div className="w-1/2 pl-8">
                        <div className="bg-white p-6 rounded-2xl shadow-lg hover-lift">
                          <h3 className="text-2xl font-playfair font-semibold text-charcoal mb-2">{event.year}</h3>
                          <h4 className="text-xl font-montserrat font-medium text-burgundy-500 mb-3">{event.title}</h4>
                          <p className="text-gray-600 font-poppins">{event.description}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chef Team Section */}
        <div ref={chefsRef} className="mb-20">
          <h2 className="text-4xl font-playfair font-bold text-center text-charcoal mb-12">Meet Our Chefs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chefs.map((chef, index) => (
              <ChefCard
                key={chef.id}
                chef={chef}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div ref={galleryRef}>
          <h2 className="text-4xl font-playfair font-bold text-center text-charcoal mb-12">Our Ambiance</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className="rounded-2xl shadow-lg hover-lift w-full h-64 object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
