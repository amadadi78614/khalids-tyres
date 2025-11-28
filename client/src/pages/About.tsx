import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Truck, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function About() {
  const stats = [
    { label: "Years in Business", value: "15+" },
    { label: "Happy Customers", value: "50,000+" },
    { label: "Tyres Sold", value: "200,000+" },
    { label: "Partner Fitment Centers", value: "120+" },
  ];

  const values = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality First",
      description: "We only stock authentic tyres from trusted manufacturers, ensuring you get the best quality and safety for your vehicle.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer Focused",
      description: "Your satisfaction is our priority. Our expert team is always ready to help you find the perfect tyres for your needs.",
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Nationwide Service",
      description: "From Cape Town to Polokwane, we deliver quality tyres across South Africa with free delivery on all orders.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Trust & Transparency",
      description: "Honest pricing, genuine products, and transparent service. No hidden fees, no compromises on quality.",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Khalid's Tyres</h1>
            <p className="text-xl text-gray-200">
              South Africa's trusted online tyre retailer, committed to delivering quality, convenience, and exceptional service since 2009.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-foreground text-center">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2009 by Khalid Mohamed, Khalid's Tyres began as a small tyre shop in Johannesburg with a simple mission: to provide South Africans with access to quality tyres at fair prices. What started as a single location has grown into one of the country's leading online tyre retailers, serving customers across all nine provinces.
              </p>
              <p>
                Our journey has been driven by a commitment to innovation and customer service. We were among the first in South Africa to offer online tyre shopping with nationwide delivery, making it easier than ever for customers to find and purchase the right tyres for their vehicles from the comfort of their homes.
              </p>
              <p>
                Today, we partner with over 120 fitment centers nationwide, ensuring that wherever you are in South Africa, you can access professional tyre fitting services. Our team of tyre specialists brings decades of combined experience, helping thousands of customers every month find the perfect tyres for their needs and budget.
              </p>
              <p>
                We stock tyres from all major brands including Goodyear, Bridgestone, Michelin, Continental, Pirelli, and many more. Whether you drive a taxi, bakkie, sedan, or SUV, we have the right tyres for you. Our commitment to quality means we only sell authentic products backed by manufacturer warranties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-foreground text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Our Team</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Behind Khalid's Tyres is a dedicated team of tyre specialists, customer service professionals, and logistics experts working together to ensure you get the best service possible. Our team's combined experience spans over 100 years in the tyre industry, and we're passionate about helping South African motorists stay safe on the road.
            </p>
            <p className="text-lg text-muted-foreground">
              Every member of our team undergoes regular training on the latest tyre technologies and industry best practices, ensuring we can provide you with expert advice and recommendations tailored to your specific needs.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
