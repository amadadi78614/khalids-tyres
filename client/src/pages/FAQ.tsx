import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function FAQ() {
  const faqCategories = [
    {
      category: "Ordering & Payment",
      questions: [
        {
          q: "How do I place an order?",
          a: "Browse our website, select your tyres, add them to cart, and proceed to checkout. You can also use our vehicle search tool to find tyres that fit your specific make and model. If you need help, our team is available via phone or WhatsApp.",
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit and debit cards (Visa, Mastercard, American Express), instant EFT, and bank transfers. All payments are processed securely through our encrypted payment gateway.",
        },
        {
          q: "Can I get a quote before ordering?",
          a: "Yes! Click the 'Get Quote' button on any product page or contact us directly. We'll provide a detailed quote including tyre prices, delivery fees, and fitting costs if applicable.",
        },
        {
          q: "Do you offer discounts for bulk orders?",
          a: "Absolutely. We offer competitive pricing for fleet operators, businesses, and bulk purchases. Contact our sales team for a custom quote tailored to your needs.",
        },
      ],
    },
    {
      category: "Delivery & Fitting",
      questions: [
        {
          q: "How long does delivery take?",
          a: "Delivery times vary by location: 1-2 days for Gauteng, Western Cape, and KZN; 2-3 days for most other provinces; 3-4 days for remote areas. Orders placed before 2 PM are processed same day.",
        },
        {
          q: "Is fitting included in the price?",
          a: "Yes! When you choose delivery to one of our 120+ partner fitment centers, professional fitting, balancing, and valve replacement are included at no extra cost.",
        },
        {
          q: "Can I get tyres fitted at my home or office?",
          a: "Yes, we offer mobile fitting services in major cities including Johannesburg, Pretoria, Cape Town, Durban, and Port Elizabeth. An additional fee applies for mobile service.",
        },
        {
          q: "What's included in the fitting service?",
          a: "Our fitting service includes: professional mounting and demounting, computerized wheel balancing, new valve replacement, visual brake and suspension inspection, and tyre pressure adjustment.",
        },
      ],
    },
    {
      category: "Tyres & Products",
      questions: [
        {
          q: "How do I know which tyres fit my vehicle?",
          a: "Use our vehicle search tool on the homepage - just enter your make and model. Alternatively, check your current tyre sidewall for the size (e.g., 195/65R15) or your vehicle's door jamb sticker. Our experts can also help you find the right fit.",
        },
        {
          q: "Are all tyres brand new?",
          a: "Yes, we only sell brand new tyres from authorized distributors. Every tyre comes with the manufacturer's warranty and is guaranteed to be in perfect condition.",
        },
        {
          q: "What's the difference between budget and premium tyres?",
          a: "Premium tyres offer superior grip, longer lifespan (30-50% more), better fuel efficiency, quieter ride, and advanced safety features. Budget tyres are more affordable but may wear faster and offer less performance. We can help you choose based on your budget and driving needs.",
        },
        {
          q: "Do you sell run-flat tyres?",
          a: "Yes, we stock run-flat tyres from major brands like Bridgestone, Continental, and Pirelli. These tyres allow you to drive up to 80km at reduced speed after a puncture, eliminating the need for a spare tyre.",
        },
      ],
    },
    {
      category: "Warranties & Returns",
      questions: [
        {
          q: "What warranty do tyres come with?",
          a: "All tyres come with the manufacturer's warranty, which typically covers manufacturing defects for the life of the tyre. Warranty terms vary by brand - we'll provide full details with your purchase.",
        },
        {
          q: "Can I return tyres if they don't fit?",
          a: "Yes, unused tyres in original condition can be returned within 14 days for a full refund or exchange. Return shipping fees may apply. Fitted tyres cannot be returned unless defective.",
        },
        {
          q: "What if my tyres arrive damaged?",
          a: "We inspect all tyres before dispatch, but if damage occurs during delivery, we'll replace them immediately at no cost. Simply contact us within 48 hours of delivery with photos of the damage.",
        },
        {
          q: "Do you offer tyre insurance or road hazard warranty?",
          a: "Yes, we offer optional road hazard protection that covers punctures, impact damage, and sidewall damage for 12-24 months. Ask about this at checkout or contact us for details.",
        },
      ],
    },
    {
      category: "Technical & Maintenance",
      questions: [
        {
          q: "How often should I replace my tyres?",
          a: "Replace tyres when tread depth reaches 1.6mm (legal minimum in SA) or after 5-6 years regardless of wear. Check monthly for uneven wear, cracks, or bulges. Our fitment centers offer free tyre inspections.",
        },
        {
          q: "What tyre pressure should I use?",
          a: "Correct pressure is listed on your vehicle's door jamb sticker or owner's manual. It varies by vehicle and load. Check pressure monthly when tyres are cold. Incorrect pressure reduces safety, fuel economy, and tyre life.",
        },
        {
          q: "Should I rotate my tyres?",
          a: "Yes, rotate tyres every 10,000km to ensure even wear and maximize lifespan. Most vehicles use a front-to-back rotation pattern. Our fitment centers offer this service at competitive rates.",
        },
        {
          q: "What's the difference between H, V, and W speed ratings?",
          a: "Speed ratings indicate maximum safe speed: H = 210km/h, V = 240km/h, W = 270km/h. Always match or exceed your vehicle's original speed rating. Higher ratings often indicate better handling and performance.",
        },
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
            <HelpCircle className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-200">
              Find answers to common questions about ordering, delivery, fitting, and tyre maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqCategories.map((category, catIndex) => (
              <div key={catIndex}>
                <h2 className="text-2xl font-bold mb-6 text-foreground border-b-2 border-primary pb-2">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, qIndex) => (
                    <Card key={qIndex}>
                      <CardContent className="p-6">
                        <h3 className="font-bold text-lg mb-3 text-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">Q:</span>
                          <span>{faq.q}</span>
                        </h3>
                        <p className="text-muted-foreground pl-6">{faq.a}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our tyre experts are here to help. Get in touch and we'll answer any questions you have.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+27123456789">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Call 012 345 6789
              </button>
            </a>
            <a href="https://wa.me/27123456789" target="_blank" rel="noopener noreferrer">
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                WhatsApp Us
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
