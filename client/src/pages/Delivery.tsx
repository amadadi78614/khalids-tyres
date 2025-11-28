import { Card, CardContent } from "@/components/ui/card";
import { Truck, Package, MapPin, Clock, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Delivery() {
  const deliveryZones = [
    { province: "Gauteng", days: "1-2 business days", fee: "FREE", color: "text-green-600" },
    { province: "Western Cape", days: "2-3 business days", fee: "FREE", color: "text-green-600" },
    { province: "KwaZulu-Natal", days: "2-3 business days", fee: "FREE", color: "text-green-600" },
    { province: "Free State", days: "2-3 business days", fee: "R 199", color: "text-blue-600" },
    { province: "Limpopo", days: "2-3 business days", fee: "R 199", color: "text-blue-600" },
    { province: "Mpumalanga", days: "2-3 business days", fee: "R 199", color: "text-blue-600" },
    { province: "North West", days: "2-3 business days", fee: "R 199", color: "text-blue-600" },
    { province: "Eastern Cape", days: "3-4 business days", fee: "R 299", color: "text-orange-600" },
    { province: "Northern Cape", days: "3-4 business days", fee: "R 399", color: "text-orange-600" },
  ];

  const deliverySteps = [
    {
      icon: <Package className="h-8 w-8" />,
      title: "Order Placed",
      description: "Your order is confirmed and payment processed securely.",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Quality Check",
      description: "We inspect your tyres to ensure perfect condition before dispatch.",
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Dispatched",
      description: "Your tyres are packed and shipped with tracking information sent to you.",
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Delivered",
      description: "Tyres arrive at your chosen location or fitment center.",
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
            <Truck className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Delivery Information</h1>
            <p className="text-xl text-gray-200">
              Fast, reliable delivery across South Africa. Free delivery to major cities.
            </p>
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-foreground text-center">How Delivery Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliverySteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  {step.icon}
                </div>
                <div className="text-2xl font-bold text-primary mb-2">Step {index + 1}</div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Zones */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-foreground text-center">Delivery Times & Fees</h2>
            <p className="text-center text-muted-foreground mb-12">
              Delivery times are calculated from order confirmation. Orders placed before 2 PM are processed same day.
            </p>
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary/5">
                      <tr>
                        <th className="text-left p-4 font-bold text-foreground">Province</th>
                        <th className="text-left p-4 font-bold text-foreground">Delivery Time</th>
                        <th className="text-right p-4 font-bold text-foreground">Delivery Fee</th>
                      </tr>
                    </thead>
                    <tbody>
                      {deliveryZones.map((zone, index) => (
                        <tr key={index} className="border-t border-border">
                          <td className="p-4 font-medium text-foreground">{zone.province}</td>
                          <td className="p-4 text-muted-foreground">{zone.days}</td>
                          <td className={`p-4 text-right font-bold ${zone.color}`}>{zone.fee}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            <div className="mt-6 p-4 bg-primary/10 rounded-lg">
              <p className="text-sm text-foreground">
                <strong>Note:</strong> Delivery to remote or rural areas may take an additional 1-2 business days. Delivery times are estimates and may vary due to weather, public holidays, or courier delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Options */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-foreground text-center">Delivery Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Home Delivery</h3>
                <p className="text-muted-foreground mb-4">
                  Tyres delivered directly to your home or office address. Perfect for mobile fitting services.
                </p>
                <div className="text-sm text-muted-foreground">
                  Most popular option
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift border-2 border-primary">
              <CardContent className="p-6 text-center">
                <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Fitment Center</h3>
                <p className="text-muted-foreground mb-4">
                  Tyres delivered to your chosen fitment center. Fitting included with purchase.
                </p>
                <div className="text-sm font-semibold text-primary">
                  Recommended
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Express Delivery</h3>
                <p className="text-muted-foreground mb-4">
                  Same-day or next-day delivery available in major cities for urgent orders.
                </p>
                <div className="text-sm text-muted-foreground">
                  Additional fee applies
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground text-center">Delivery FAQs</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-foreground">Can I track my delivery?</h3>
                  <p className="text-muted-foreground">
                    Yes! Once your order is dispatched, you'll receive a tracking number via email and SMS. You can track your delivery in real-time using our courier partner's tracking system.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-foreground">What if I'm not home for delivery?</h3>
                  <p className="text-muted-foreground">
                    Our courier will attempt delivery twice. If unsuccessful, they'll contact you to arrange a convenient time or you can collect from their depot. For fitment center deliveries, tyres are held securely until your appointment.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-foreground">Are tyres insured during delivery?</h3>
                  <p className="text-muted-foreground">
                    Absolutely. All deliveries are fully insured against damage or loss. If your tyres arrive damaged, we'll replace them immediately at no cost to you.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-foreground">Can I change my delivery address?</h3>
                  <p className="text-muted-foreground">
                    Yes, you can change your delivery address before dispatch. Contact us as soon as possible at 012 345 6789 or via WhatsApp. Once dispatched, address changes may incur additional fees.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
