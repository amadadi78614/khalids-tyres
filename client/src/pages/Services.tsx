import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Gauge, AlignCenter, RotateCw, Zap, Truck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Services() {
  const services = [
    {
      icon: <Wrench className="h-10 w-10" />,
      title: "Tyre Fitting & Balancing",
      description: "Professional tyre fitting and computerized wheel balancing at over 120 partner centers nationwide. Ensure smooth, vibration-free driving with our expert fitting service.",
      price: "Included with purchase",
      features: [
        "Professional mounting and demounting",
        "Computerized wheel balancing",
        "Valve replacement",
        "Visual inspection of brakes and suspension",
      ],
    },
    {
      icon: <AlignCenter className="h-10 w-10" />,
      title: "Wheel Alignment",
      description: "Precision wheel alignment using state-of-the-art equipment. Proper alignment extends tyre life, improves fuel efficiency, and ensures safe handling.",
      price: "From R 450",
      features: [
        "4-wheel computerized alignment",
        "Steering and suspension check",
        "Adjustment to manufacturer specs",
        "Before and after printout",
      ],
    },
    {
      icon: <RotateCw className="h-10 w-10" />,
      title: "Tyre Rotation",
      description: "Regular tyre rotation ensures even wear and extends the life of your tyres. We recommend rotation every 10,000 km for optimal performance.",
      price: "From R 200",
      features: [
        "Professional rotation service",
        "Tread depth measurement",
        "Pressure check and adjustment",
        "Visual inspection",
      ],
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Puncture Repair",
      description: "Fast and reliable puncture repair service. Our technicians assess the damage and repair or replace as needed to get you back on the road safely.",
      price: "From R 150",
      features: [
        "Thorough damage assessment",
        "Professional plug or patch repair",
        "Safety inspection",
        "Pressure check",
      ],
    },
    {
      icon: <Gauge className="h-10 w-10" />,
      title: "Tyre Pressure Monitoring",
      description: "TPMS sensor service and calibration. Maintain optimal tyre pressure for safety, fuel efficiency, and tyre longevity.",
      price: "From R 350",
      features: [
        "TPMS sensor replacement",
        "System calibration",
        "Battery replacement",
        "Diagnostic check",
      ],
    },
    {
      icon: <Truck className="h-10 w-10" />,
      title: "Fleet Services",
      description: "Comprehensive tyre management solutions for commercial fleets. Volume discounts, priority service, and dedicated account management.",
      price: "Custom pricing",
      features: [
        "Dedicated account manager",
        "Volume discounts",
        "Priority scheduling",
        "Detailed reporting and tracking",
      ],
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-200">
              Professional tyre services at over 120 partner centers across South Africa. Quality service you can trust.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="text-xl font-bold text-primary mb-4">{service.price}</div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Book Service</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Service Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Mobile Fitting Service</h2>
              <p className="text-lg text-muted-foreground">
                Can't make it to a fitment center? We'll come to you!
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-foreground">How It Works</h3>
                <ol className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">1.</span>
                    <span>Order your tyres online and select "Mobile Fitting" at checkout</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">2.</span>
                    <span>Choose your preferred date, time, and location</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">3.</span>
                    <span>Our mobile unit arrives at your location fully equipped</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">4.</span>
                    <span>Professional fitting completed in 30-45 minutes</span>
                  </li>
                </ol>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Service Areas</h3>
                <p className="text-muted-foreground mb-4">
                  Mobile fitting is currently available in the following areas:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Johannesburg & Pretoria</li>
                  <li>• Cape Town Metro</li>
                  <li>• Durban & Pietermaritzburg</li>
                  <li>• Port Elizabeth & East London</li>
                  <li>• Bloemfontein</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Additional fee applies for mobile service. Contact us for availability in other areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Need Service? We're Here to Help</h2>
          <p className="text-xl mb-8 opacity-90">
            Book your service appointment today or contact us for more information
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Book Now
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
