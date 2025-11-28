import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calculator, MapPin, Package, Truck, FileText, Download } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { DELIVERY_ZONES, calculateOrderSummary } from "@/lib/logistics";
import { toast } from "sonner";

export default function Quote() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    province: "Gauteng",
    city: "",
    tyreSize: "",
    quantity: 4,
    brand: "",
    includeFitting: true,
  });

  const [quoteGenerated, setQuoteGenerated] = useState(false);

  // Sample pricing based on size and brand (in real app, this would come from database)
  const getPriceEstimate = () => {
    const basePrices: { [key: string]: number } = {
      "budget": 800,
      "mid-range": 1200,
      "premium": 1800,
      "performance": 2500,
    };
    return basePrices[formData.brand] || 1200;
  };

  const pricePerTyre = getPriceEstimate();
  const items = [{ price: pricePerTyre, quantity: formData.quantity }];
  const summary = calculateOrderSummary(items, formData.province, formData.includeFitting);
  const deliveryInfo = DELIVERY_ZONES.find((z) => z.province === formData.province);

  const handleGenerateQuote = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all contact details");
      return;
    }
    setQuoteGenerated(true);
    toast.success("Quote generated successfully!");
  };

  const handleDownloadQuote = () => {
    toast.success("Quote download started!");
    // In real app, generate PDF here
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <WhatsAppFloat />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Calculator className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get an Instant Quote</h1>
            <p className="text-xl text-gray-200">
              Calculate your tyre costs with location-based delivery fees and bulk discounts
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Left: Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Quote Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">Contact Information</h3>
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="012 345 6789"
                      />
                    </div>
                  </div>

                  {/* Delivery Location */}
                  <div className="space-y-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-foreground">Delivery Location</h3>
                    </div>
                    <div>
                      <Label htmlFor="province">Province *</Label>
                      <Select value={formData.province} onValueChange={(value) => setFormData({ ...formData, province: value })}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {DELIVERY_ZONES.map((zone) => (
                            <SelectItem key={zone.province} value={zone.province}>
                              {zone.province}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Select value={formData.city} onValueChange={(value) => setFormData({ ...formData, city: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select city" />
                        </SelectTrigger>
                        <SelectContent>
                          {deliveryInfo?.cities.map((city) => (
                            <SelectItem key={city} value={city}>
                              {city}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Tyre Details */}
                  <div className="space-y-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <Package className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-foreground">Tyre Details</h3>
                    </div>
                    <div>
                      <Label htmlFor="tyreSize">Tyre Size</Label>
                      <Input
                        id="tyreSize"
                        value={formData.tyreSize}
                        onChange={(e) => setFormData({ ...formData, tyreSize: e.target.value })}
                        placeholder="e.g., 195/65R15"
                      />
                    </div>
                    <div>
                      <Label htmlFor="brand">Brand Category *</Label>
                      <Select value={formData.brand} onValueChange={(value) => setFormData({ ...formData, brand: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select brand category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="budget">Budget (R 800/tyre)</SelectItem>
                          <SelectItem value="mid-range">Mid-Range (R 1,200/tyre)</SelectItem>
                          <SelectItem value="premium">Premium (R 1,800/tyre)</SelectItem>
                          <SelectItem value="performance">Performance (R 2,500/tyre)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="quantity">Quantity</Label>
                      <Select
                        value={formData.quantity.toString()}
                        onValueChange={(value) => setFormData({ ...formData, quantity: parseInt(value) })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} {num === 1 ? "Tyre" : "Tyres"}
                              {num >= 4 && " (10% discount)"}
                              {num >= 8 && " (15% discount)"}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Additional Services */}
                  <div className="space-y-4 pt-4 border-t border-border">
                    <h3 className="font-semibold text-foreground">Additional Services</h3>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="fitting"
                        checked={formData.includeFitting}
                        onCheckedChange={(checked) => setFormData({ ...formData, includeFitting: checked as boolean })}
                      />
                      <label htmlFor="fitting" className="text-sm cursor-pointer">
                        Include Professional Fitting (R 150/tyre)
                        <p className="text-xs text-muted-foreground">
                          Mounting, balancing, valve replacement
                        </p>
                      </label>
                    </div>
                  </div>

                  <Button className="w-full" size="lg" onClick={handleGenerateQuote}>
                    <Calculator className="h-5 w-5 mr-2" />
                    Generate Quote
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Right: Quote Summary */}
            <div>
              <Card className={quoteGenerated ? "border-2 border-primary" : ""}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Quote Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {!formData.brand ? (
                    <div className="text-center py-12">
                      <Calculator className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                      <p className="text-muted-foreground">
                        Fill in the form to generate your quote
                      </p>
                    </div>
                  ) : (
                    <>
                      {/* Product Details */}
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground">Product Details</h3>
                        <div className="bg-muted p-4 rounded-lg space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Brand Category:</span>
                            <span className="font-semibold text-foreground capitalize">{formData.brand}</span>
                          </div>
                          {formData.tyreSize && (
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Tyre Size:</span>
                              <span className="font-semibold text-foreground">{formData.tyreSize}</span>
                            </div>
                          )}
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Quantity:</span>
                            <span className="font-semibold text-foreground">{formData.quantity} tyres</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Price per Tyre:</span>
                            <span className="font-semibold text-foreground">R {pricePerTyre.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>

                      {/* Delivery Info */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Truck className="h-5 w-5 text-primary" />
                          <h3 className="font-semibold text-foreground">Delivery Information</h3>
                        </div>
                        <div className="bg-muted p-4 rounded-lg space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Location:</span>
                            <span className="font-semibold text-foreground">{formData.province}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Delivery Time:</span>
                            <span className="font-semibold text-foreground">{deliveryInfo?.deliveryDays}</span>
                          </div>
                          {deliveryInfo && deliveryInfo.freeDeliveryThreshold > 0 && summary.subtotal < deliveryInfo.freeDeliveryThreshold && (
                            <p className="text-xs text-primary font-semibold pt-2 border-t border-border">
                              💡 Spend R {(deliveryInfo.freeDeliveryThreshold - summary.subtotal).toLocaleString()} more for free delivery!
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Cost Breakdown */}
                      <div className="space-y-3 pt-4 border-t border-border">
                        <h3 className="font-semibold text-foreground">Cost Breakdown</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Subtotal ({formData.quantity} tyres)</span>
                            <span className="font-semibold text-foreground">R {(pricePerTyre * formData.quantity).toLocaleString()}</span>
                          </div>
                          {summary.discount > 0 && (
                            <div className="flex justify-between text-green-600">
                              <span>Bulk Discount ({formData.quantity >= 8 ? '15%' : '10%'})</span>
                              <span className="font-semibold">- R {summary.discount.toLocaleString()}</span>
                            </div>
                          )}
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Delivery Fee</span>
                            <span className="font-semibold text-foreground">
                              {summary.deliveryFee === 0 ? (
                                <span className="text-green-600">FREE</span>
                              ) : (
                                `R ${summary.deliveryFee.toLocaleString()}`
                              )}
                            </span>
                          </div>
                          {formData.includeFitting && (
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Professional Fitting</span>
                              <span className="font-semibold text-foreground">R {summary.fittingFee.toLocaleString()}</span>
                            </div>
                          )}
                          <div className="flex justify-between pt-3 border-t border-border text-lg">
                            <span className="font-bold text-foreground">Total Amount</span>
                            <span className="font-bold text-primary">R {summary.total.toLocaleString()}</span>
                          </div>
                          {summary.savings > 0 && (
                            <div className="bg-green-50 dark:bg-green-950 p-3 rounded-lg text-center">
                              <p className="text-sm font-semibold text-green-700 dark:text-green-400">
                                🎉 You're saving R {summary.savings.toLocaleString()}!
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                      {quoteGenerated && (
                        <div className="space-y-3 pt-4 border-t border-border">
                          <Button className="w-full" variant="outline" onClick={handleDownloadQuote}>
                            <Download className="h-4 w-4 mr-2" />
                            Download Quote (PDF)
                          </Button>
                          <p className="text-xs text-center text-muted-foreground">
                            Quote valid for 7 days. Prices subject to stock availability.
                          </p>
                        </div>
                      )}
                    </>
                  )}
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
