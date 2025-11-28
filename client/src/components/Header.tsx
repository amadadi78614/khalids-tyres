import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, Phone, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button"; // Changed to sibling import
import { useCart } from "../contexts/CartContext"; // Kept relative (check if folder is 'context' or 'contexts')
import CartSidebar from "./CartSidebar"; // Changed to sibling import

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { totalItems } = useCart();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Brands", href: "/brands" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              {/* REPLACE THE APP BLOCK: Pointing to a static file in public folder */}
              <img 
                src="/logo.png" 
                alt="Khalid's Tyres & Accessories" 
                className="h-12 w-auto object-contain" 
                onError={(e) => {
                  // Fallback if image is missing (hides the broken image icon)
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-foreground">Khalid's Tyres & Accessories</h1>
                <p className="text-xs text-muted-foreground">SA's Online Tire Shop</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <a className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  {item.name}
                </a>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <a href="tel:+27123456789" className="hidden md:flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span>012 345 6789</span>
            </a>
            <Button
              variant="outline"
              size="icon"
              className="relative"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
            <Link href="/quote">
              <Button variant="default" className="hidden md:inline-flex">
                Get Quote
              </Button>
            </Link>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a
                    className="text-base font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
              <a href="tel:+27123456789" className="flex items-center gap-2 text-base font-medium text-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span>012 345 6789</span>
              </a>
            </div>          </nav>
        )}
      </div>

      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </header>
  );
}