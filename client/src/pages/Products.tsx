import { useState } from "react";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Star, Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Premium All-Season Tyre",
      brand: "Goodyear",
      category: "passenger",
      size: "195/65R15",
      price: 1299,
      originalPrice: 1599,
      image: "/images/tyres/OswbN5nZVU5e.jpg",
      rating: 4.8,
      reviews: 234,
      features: ["Long lasting", "Fuel efficient", "Quiet ride"],
    },
    {
      id: 2,
      name: "All-Terrain Performance",
      brand: "Bridgestone",
      category: "suv",
      size: "265/70R16",
      price: 2499,
      originalPrice: 2899,
      image: "/images/tyres/hcUpQdO0Otqa.jpeg",
      rating: 4.9,
      reviews: 189,
      features: ["Off-road capable", "Durable", "All-weather"],
    },
    {
      id: 3,
      name: "Commercial Heavy Duty",
      brand: "Michelin",
      category: "commercial",
      size: "205/70R15C",
      price: 1899,
      originalPrice: 2299,
      image: "/images/tyres/S0FyM4y0oQbT.jpg",
      rating: 4.7,
      reviews: 456,
      features: ["High mileage", "Load rated", "Reinforced"],
    },
    {
      id: 4,
      name: "Sport Performance Tyre",
      brand: "Continental",
      category: "passenger",
      size: "225/45R17",
      price: 1799,
      originalPrice: 2199,
      image: "/images/tyres/MkujnasdyMmr.jpg",
      rating: 4.9,
      reviews: 312,
      features: ["High grip", "Responsive", "Sport design"],
    },
    {
      id: 5,
      name: "Passenger Comfort Tyre",
      brand: "Dunlop",
      category: "passenger",
      size: "185/65R15",
      price: 1099,
      originalPrice: 1399,
      image: "/images/tyres/O84a1mxSfSkj.jpg",
      rating: 4.6,
      reviews: 178,
      features: ["Smooth ride", "Low noise", "Value for money"],
    },
    {
      id: 6,
      name: "SUV Highway Tyre",
      brand: "Pirelli",
      category: "suv",
      size: "235/60R18",
      price: 2299,
      originalPrice: 2699,
      image: "/images/tyres/auUE4w5NCRp0.jpg",
      rating: 4.8,
      reviews: 267,
      features: ["Highway comfort", "Long wear", "Stable"],
    },
    {
      id: 7,
      name: "Bakkie All-Terrain",
      brand: "Yokohama",
      category: "bakkie",
      size: "265/65R17",
      price: 2199,
      originalPrice: 2599,
      image: "/images/tyres/McHCDWbgiPV5.jpg",
      rating: 4.7,
      reviews: 145,
      features: ["Tough sidewalls", "Mud terrain", "Heavy duty"],
    },
    {
      id: 8,
      name: "Commercial Taxi Tyre",
      brand: "Hankook",
      category: "commercial",
      size: "195/70R15C",
      price: 1699,
      originalPrice: 1999,
      image: "/images/tyres/FnzVhHW1tykQ.jpg",
      rating: 4.8,
      reviews: 523,
      features: ["High mileage", "Economical", "Durable"],
    },
  ];

  const brands = ["Goodyear", "Bridgestone", "Michelin", "Continental", "Pirelli", "Dunlop", "Yokohama", "Hankook"];
  const categories = [
    { value: "all", label: "All Categories" },
    { value: "passenger", label: "Passenger" },
    { value: "suv", label: "SUV & 4x4" },
    { value: "bakkie", label: "Bakkie" },
    { value: "commercial", label: "Taxi & Commercial" },
  ];

  const filteredProducts = products.filter((product) => {
    if (selectedCategory !== "all" && product.category !== selectedCategory) return false;
    if (selectedBrand !== "all" && product.brand !== selectedBrand) return false;
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <WhatsAppFloat />

      {/* Page Header */}
      <section className="bg-muted border-b border-border py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Shop Tyres</h1>
          <p className="text-lg text-muted-foreground">
            Browse our extensive range of premium tyres from top brands
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <Filter className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-bold text-foreground">Filters</h2>
                  </div>

                  {/* Category Filter */}
                  <div className="mb-6">
                    <h3 className="font-semibold mb-3 text-foreground">Category</h3>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((cat) => (
                          <SelectItem key={cat.value} value={cat.value}>
                            {cat.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Brand Filter */}
                  <div className="mb-6">
                    <h3 className="font-semibold mb-3 text-foreground">Brand</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="all-brands"
                          checked={selectedBrand === "all"}
                          onCheckedChange={() => setSelectedBrand("all")}
                        />
                        <label htmlFor="all-brands" className="text-sm cursor-pointer text-foreground">
                          All Brands
                        </label>
                      </div>
                      {brands.slice(0, 6).map((brand) => (
                        <div key={brand} className="flex items-center space-x-2">
                          <Checkbox
                            id={brand}
                            checked={selectedBrand === brand}
                            onCheckedChange={() => setSelectedBrand(brand)}
                          />
                          <label htmlFor={brand} className="text-sm cursor-pointer text-foreground">
                            {brand}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full" variant="outline" onClick={() => {
                    setSelectedCategory("all");
                    setSelectedBrand("all");
                  }}>
                    Clear Filters
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {/* Sort Bar */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground">
                  Showing <span className="font-semibold text-foreground">{filteredProducts.length}</span> products
                </p>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
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
                        <span className="text-xs text-muted-foreground">({product.reviews})</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {product.features.slice(0, 2).map((feature, idx) => (
                          <span key={idx} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-2xl font-bold text-primary">R {product.price.toLocaleString()}</span>
                        <span className="text-sm text-muted-foreground line-through">
                          R {product.originalPrice.toLocaleString()}
                        </span>
                      </div>
                      <Button
                        className="w-full"
                        onClick={() => {
                          addToCart({
                            id: product.id,
                            name: product.name,
                            brand: product.brand,
                            size: product.size,
                            price: product.price,
                            image: product.image,
                            category: product.category,
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
