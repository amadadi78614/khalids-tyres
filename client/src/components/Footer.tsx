import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";
import { APP_TITLE } from "@/const";

export default function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">{APP_TITLE}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              South Africa's trusted online tyre shop. Quality tyres delivered nationwide with free fitting in major cities.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-base mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors">Shop Tyres</a>
                </Link>
              </li>
              <li>
                <Link href="/brands">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors">Brands</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</a>
                </Link>
              </li>
              <li>
                <Link href="/delivery">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors">Delivery Info</a>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-base mb-4 text-foreground">Our Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Tyre Fitting & Balancing</li>
              <li>Wheel Alignment</li>
              <li>Tyre Rotation</li>
              <li>Puncture Repair</li>
              <li>Fleet Services</li>
              <li>Mobile Fitting</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-base mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+27123456789" className="hover:text-primary transition-colors">012 345 6789</a>
                  <br />
                  <span className="text-xs">Mon-Fri: 8am-6pm, Sat: 8am-2pm</span>
                </div>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@khalidstyres.co.za" className="hover:text-primary transition-colors">
                  info@khalidstyres.co.za
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>123 Main Road, Johannesburg, Gauteng</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {APP_TITLE}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
