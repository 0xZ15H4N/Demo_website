import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useFadeIn } from "@/hooks/use-gsap";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    partySize: '',
    specialRequests: ''
  });

  const headerRef = useFadeIn();
  const formRef = useFadeIn();
  const infoRef = useFadeIn();

  useEffect(() => {
    document.title = "Lumière - Contact Us | Reservations";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.date || !formData.time || !formData.partySize) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Reservation Submitted!",
      description: "We'll contact you shortly to confirm your reservation.",
    });

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      partySize: '',
      specialRequests: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const timeSlots = [
    "6:00 PM",
    "6:30 PM", 
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM"
  ];

  const partySizes = [
    "1 person",
    "2 people", 
    "3 people",
    "4 people",
    "5 people",
    "6 people",
    "7+ people"
  ];

  const hours = [
    { days: "Monday - Tuesday", time: "Closed" },
    { days: "Wednesday - Thursday", time: "5:30 PM - 10:00 PM" },
    { days: "Friday - Saturday", time: "5:30 PM - 11:00 PM" },
    { days: "Sunday", time: "5:30 PM - 9:30 PM" }
  ];

  return (
    <div className="pt-32 pb-20 bg-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h1 className="text-6xl font-playfair font-bold text-charcoal mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 font-lora">
            Reserve your extraordinary dining experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div ref={formRef} className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-playfair font-bold text-charcoal mb-6">Make a Reservation</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-charcoal font-montserrat font-medium mb-2">First Name *</label>
                  <Input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Your first name"
                    className="w-full focus:ring-burgundy-500 focus:border-burgundy-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-charcoal font-montserrat font-medium mb-2">Last Name *</label>
                  <Input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Your last name"
                    className="w-full focus:ring-burgundy-500 focus:border-burgundy-500"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-charcoal font-montserrat font-medium mb-2">Email *</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="w-full focus:ring-burgundy-500 focus:border-burgundy-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-charcoal font-montserrat font-medium mb-2">Phone *</label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full focus:ring-burgundy-500 focus:border-burgundy-500"
                  required
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-charcoal font-montserrat font-medium mb-2">Date *</label>
                  <Input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full focus:ring-burgundy-500 focus:border-burgundy-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-charcoal font-montserrat font-medium mb-2">Time *</label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent font-poppins"
                    required
                  >
                    <option value="">Select time</option>
                    {timeSlots.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-charcoal font-montserrat font-medium mb-2">Party Size *</label>
                <select
                  name="partySize"
                  value={formData.partySize}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent font-poppins"
                  required
                >
                  <option value="">Select party size</option>
                  {partySizes.map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-charcoal font-montserrat font-medium mb-2">Special Requests</label>
                <Textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Any dietary restrictions or special occasions..."
                  className="w-full focus:ring-burgundy-500 focus:border-burgundy-500"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-burgundy-500 text-ivory py-4 rounded-lg font-montserrat font-semibold hover:bg-burgundy-600 transition-colors hover-lift"
              >
                Make Reservation
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div ref={infoRef} className="space-y-8">
            {/* Map Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-playfair font-bold text-charcoal mb-6">Visit Us</h3>
              <div
                className="bg-gray-200 rounded-lg h-64 mb-6 bg-cover bg-center hover-lift"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600')"
                }}
              >
                <div className="w-full h-full bg-burgundy-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-charcoal font-montserrat font-medium">Interactive Map</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-burgundy-500 mt-1" />
                  <div>
                    <p className="font-montserrat font-medium text-charcoal">Address</p>
                    <p className="text-gray-600 font-poppins">123 Culinary Avenue<br />Downtown District<br />New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-burgundy-500 mt-1" />
                  <div>
                    <p className="font-montserrat font-medium text-charcoal">Phone</p>
                    <p className="text-gray-600 font-poppins">+1 (555) 123-CHEF</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-burgundy-500 mt-1" />
                  <div>
                    <p className="font-montserrat font-medium text-charcoal">Email</p>
                    <p className="text-gray-600 font-poppins">reservations@lumiere.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-playfair font-bold text-charcoal mb-6">Hours</h3>
              <div className="space-y-3">
                {hours.map((hour, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-montserrat font-medium text-charcoal">{hour.days}</span>
                    <span className="text-gray-600 font-poppins">{hour.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-playfair font-bold text-charcoal mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-burgundy-500 rounded-full flex items-center justify-center text-ivory hover:bg-burgundy-600 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-burgundy-500 rounded-full flex items-center justify-center text-ivory hover:bg-burgundy-600 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-burgundy-500 rounded-full flex items-center justify-center text-ivory hover:bg-burgundy-600 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-burgundy-500 rounded-full flex items-center justify-center text-ivory hover:bg-burgundy-600 transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
