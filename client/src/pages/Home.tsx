import { useState } from "react";
import { Link } from "wouter";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Truck, Shield, Clock, Award, Search, Star, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const { addToCart } = useCart();

  const vehicleMakes = ["Toyota", "Nissan", "Ford", "Volkswagen", "Mercedes-Benz", "Hyundai", "Isuzu", "Mazda"];
  
  const categories = [
    {
      title: "Passenger Tyres",
      description: "Premium tyres for sedans and hatchbacks",
      image: "/images/tyres/O84a1mxSfSkj.jpg",
      link: "/products?category=passenger",
    },
    {
      title: "SUV & 4x4 Tyres",
      description: "All-terrain and highway tyres",
      image: "/images/tyres/auUE4w5NCRp0.jpg",
      link: "/products?category=suv",
    },
    {
      title: "Bakkie Tyres",
      description: "Heavy-duty tyres for pickups",
      image: "/images/tyres/McHCDWbgiPV5.jpg",
      link: "/products?category=bakkie",
    },
    {
      title: "Taxi & Commercial",
      description: "High mileage commercial tyres",
      image: "/images/tyres/FnzVhHW1tykQ.jpg",
      link: "/products?category=commercial",
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Premium Passenger Tyre",
      brand: "Goodyear",
      size: "195/65R15",
      price: "R 1,299",
      originalPrice: "R 1,599",
      image: "/images/tyres/OswbN5nZVU5e.jpg",
      rating: 4.8,
      reviews: 234,
    },
    {
      id: 2,
      name: "All-Terrain SUV Tyre",
      brand: "Bridgestone",
      size: "265/70R16",
      price: "R 2,499",
      originalPrice: "R 2,899",
      image: "/images/tyres/hcUpQdO0Otqa.jpeg",
      rating: 4.9,
      reviews: 189,
    },
    {
      id: 3,
      name: "Commercial Heavy Duty",
      brand: "Michelin",
      size: "205/70R15C",
      price: "R 1,899",
      originalPrice: "R 2,299",
      image: "/images/tyres/S0FyM4y0oQbT.jpg",
      rating: 4.7,
      reviews: 456,
    },
    {
      id: 4,
      name: "Performance Sport Tyre",
      brand: "Continental",
      size: "225/45R17",
      price: "R 1,799",
      originalPrice: "R 2,199",
      image: "/images/tyres/MkujnasdyMmr.jpg",
      rating: 4.9,
      reviews: 312,
    },
  ];

  const brands = [
    "Goodyear", "Bridgestone", "Michelin", "Continental", "Pirelli", "Dunlop", "Yokohama", "Hankook"
  ];

  const features = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Free Delivery",
      description: "Nationwide delivery on all orders",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Guaranteed",
      description: "100% authentic tyres from trusted brands",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Fast Service",
      description: "Same-day fitting available in major cities",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Expert Advice",
      description: "Professional guidance from tyre specialists",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <WhatsAppFloat />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/images/tyres/kxl0Kn1milYL.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              South Africa's Trusted Online Tyre Shop
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Premium tyres delivered nationwide with free fitting in major cities. Shop from top brands at unbeatable prices.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Shop Tyres Now
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                Get Expert Advice
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Search Section */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container">
          <Card className="shadow-xl">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <Search className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Find Tyres for Your Vehicle</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Select value={selectedMake} onValueChange={setSelectedMake}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Make" />
                  </SelectTrigger>
                  <SelectContent>
                    {vehicleMakes.map((make) => (
                      <SelectItem key={make} value={make}>
                        {make}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedModel} onValueChange={setSelectedModel} disabled={!selectedMake}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="model1">Model 1</SelectItem>
                    <SelectItem value="model2">Model 2</SelectItem>
                  </SelectContent>
                </Select>
                <Input type="text" placeholder="Tyre Size (e.g., 195/65R15)" />
                <Button className="w-full">
                  <Search className="h-4 w-4 mr-2" />
                  Search Tyres
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Shop by Category</h2>
            <p className="text-lg text-muted-foreground">Find the perfect tyres for your vehicle type</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link key={index} href={category.link}>
                <Card className="hover-lift cursor-pointer overflow-hidden group">
                  <div className="image-zoom aspect-square">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                    <div className="flex items-center text-primary font-semibold">
                      Shop Now <ChevronRight className="h-4 w-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Featured Tyres</h2>
            <p className="text-lg text-muted-foreground">Top-rated tyres at special prices</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="hover-lift cursor-pointer overflow-hidden group">
                <div className="image-zoom aspect-square bg-white">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-muted-foreground mb-1">{product.brand}</div>
                  <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="text-sm text-muted-foreground mb-3">{product.size}</div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm font-semibold">{product.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">({product.reviews} reviews)</span>
                  </div>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                  </div>
                  <Button
                    className="w-full"
                    onClick={() => {
                      addToCart({
                        id: product.id,
                        name: product.name,
                        brand: product.brand,
                        size: product.size,
                        price: parseInt(product.price.replace(/[^0-9]/g, '')),
                        image: product.image,
                        category: 'featured',
                      });
                      toast.success(`${product.name} added to cart!`);
                    }}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/products">
              <Button variant="outline" size="lg">
                View All Products <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Trusted Brands</h2>
            <p className="text-lg text-muted-foreground">We stock tyres from the world's leading manufacturers</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 flex items-center justify-center hover:border-primary transition-colors cursor-pointer"
              >
                <span className="font-bold text-foreground text-center">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help Choosing the Right Tyres?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our tyre experts are here to help you find the perfect match for your vehicle and driving needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Contact Us Now
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
