import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Brands() {
  const brands = [
    {
      name: "Goodyear",
      description: "American excellence since 1898. Known for innovative technology and superior performance across all vehicle types.",
      image: "/images/tyres/OswbN5nZVU5e.jpg",
      specialties: ["All-Season", "Performance", "SUV"],
      country: "USA",
    },
    {
      name: "Bridgestone",
      description: "World's largest tyre manufacturer. Japanese precision engineering delivering safety, durability, and comfort.",
      image: "/images/tyres/hcUpQdO0Otqa.jpeg",
      specialties: ["Touring", "Off-Road", "Commercial"],
      country: "Japan",
    },
    {
      name: "Michelin",
      description: "French innovation leader. Premium tyres renowned for longevity, fuel efficiency, and cutting-edge technology.",
      image: "/images/tyres/S0FyM4y0oQbT.jpg",
      specialties: ["Premium", "Eco-Friendly", "Heavy Duty"],
      country: "France",
    },
    {
      name: "Continental",
      description: "German engineering at its finest. Advanced safety features and exceptional handling in all conditions.",
      image: "/images/tyres/MkujnasdyMmr.jpg",
      specialties: ["Sport", "Winter", "All-Weather"],
      country: "Germany",
    },
    {
      name: "Pirelli",
      description: "Italian passion for performance. The choice of motorsport champions and luxury vehicle manufacturers.",
      image: "/images/tyres/auUE4w5NCRp0.jpg",
      specialties: ["Ultra-High Performance", "Luxury", "Sport"],
      country: "Italy",
    },
    {
      name: "Dunlop",
      description: "British heritage, global innovation. Trusted by generations for quality, reliability, and value.",
      image: "/images/tyres/O84a1mxSfSkj.jpg",
      specialties: ["Value", "Passenger", "Light Truck"],
      country: "UK",
    },
    {
      name: "Yokohama",
      description: "Japanese quality and innovation. Excellent balance of performance, comfort, and affordability.",
      image: "/images/tyres/McHCDWbgiPV5.jpg",
      specialties: ["All-Terrain", "Highway", "Performance"],
      country: "Japan",
    },
    {
      name: "Hankook",
      description: "Korean technology leader. Rapid innovation delivering premium quality at competitive prices.",
      image: "/images/tyres/FnzVhHW1tykQ.jpg",
      specialties: ["Value Premium", "SUV", "Passenger"],
      country: "South Korea",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <WhatsAppFloat />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Premium Tyre Brands</h1>
            <p className="text-xl text-gray-200">
              We stock tyres from the world's most trusted manufacturers, ensuring quality and performance you can rely on.
            </p>
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
              <Card key={index} className="hover-lift overflow-hidden">
                <div className="image-zoom aspect-video bg-white">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-foreground">{brand.name}</h3>
                    <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                      {brand.country}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{brand.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-foreground">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {brand.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link href={`/products?brand=${brand.name}`}>
                    <Button className="w-full">
                      Shop {brand.name} <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Premium Brands */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground text-center">
              Why Choose Premium Brands?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Safety First</h3>
                  <p className="text-muted-foreground">
                    Premium brands invest heavily in research and development, resulting in superior grip, shorter braking distances, and better handling in all weather conditions.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Longer Lifespan</h3>
                  <p className="text-muted-foreground">
                    Advanced rubber compounds and construction techniques mean premium tyres often last 30-50% longer than budget alternatives, offering better value over time.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Fuel Efficiency</h3>
                  <p className="text-muted-foreground">
                    Lower rolling resistance in premium tyres can improve fuel economy by up to 10%, saving you money and reducing environmental impact.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Warranty & Support</h3>
                  <p className="text-muted-foreground">
                    Premium brands offer comprehensive warranties and excellent customer support, giving you peace of mind with your investment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Not Sure Which Brand to Choose?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our tyre experts can help you select the perfect brand and model for your vehicle and driving style.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Get Expert Advice
              </Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Browse All Tyres
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
