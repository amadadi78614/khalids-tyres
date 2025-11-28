import { useState } from "react";
import { X, Minus, Plus, Trash2, ShoppingBag, MapPin, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useCart } from "@/contexts/CartContext";
import { DELIVERY_ZONES, calculateOrderSummary } from "@/lib/logistics";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { items, updateQuantity, removeFromCart, subtotal, totalItems } = useCart();
  const [selectedProvince, setSelectedProvince] = useState("Gauteng");
  const [includeFitting, setIncludeFitting] = useState(true);

  const summary = calculateOrderSummary(items, selectedProvince, includeFitting);
  const deliveryInfo = DELIVERY_ZONES.find((z) => z.province === selectedProvince);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full md:w-[480px] bg-background z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-6 w-6 text-primary" />
            <div>
              <h2 className="text-xl font-bold text-foreground">Shopping Cart</h2>
              <p className="text-sm text-muted-foreground">{totalItems} {totalItems === 1 ? 'item' : 'items'}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-muted-foreground">Your cart is empty</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 p-4 bg-muted rounded-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-contain bg-white rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.brand} - {item.size}</p>
                  <p className="text-lg font-bold text-primary mt-1">
                    R {item.price.toLocaleString()}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center font-semibold">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 ml-auto text-destructive"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}

          {items.length > 0 && (
            <>
              {/* Delivery Location */}
              <div className="pt-4 border-t border-border">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Delivery Location</h3>
                </div>
                <Select value={selectedProvince} onValueChange={setSelectedProvince}>
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
                {deliveryInfo && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Delivery: {deliveryInfo.deliveryDays}
                    {deliveryInfo.freeDeliveryThreshold > 0 && summary.subtotal < deliveryInfo.freeDeliveryThreshold && (
                      <span className="block text-primary font-semibold">
                        Spend R {(deliveryInfo.freeDeliveryThreshold - summary.subtotal).toLocaleString()} more for free delivery!
                      </span>
                    )}
                  </p>
                )}
              </div>

              {/* Fitting Option */}
              <div className="flex items-center space-x-2 p-4 bg-muted rounded-lg">
                <Checkbox
                  id="fitting"
                  checked={includeFitting}
                  onCheckedChange={(checked) => setIncludeFitting(checked as boolean)}
                />
                <label htmlFor="fitting" className="text-sm font-medium cursor-pointer flex-1">
                  <div className="flex items-center gap-2">
                    <Package className="h-4 w-4 text-primary" />
                    <span className="text-foreground">Include Professional Fitting</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    R 150 per tyre - Includes mounting, balancing & valve replacement
                  </p>
                </label>
              </div>
            </>
          )}
        </div>

        {/* Footer with Summary */}
        {items.length > 0 && (
          <div className="border-t border-border p-6 space-y-3">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold text-foreground">R {summary.subtotal.toLocaleString()}</span>
              </div>
              {summary.discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Bulk Discount</span>
                  <span className="font-semibold">- R {summary.discount.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-muted-foreground">Delivery Fee</span>
                <span className="font-semibold text-foreground">
                  {summary.deliveryFee === 0 ? "FREE" : `R ${summary.deliveryFee.toLocaleString()}`}
                </span>
              </div>
              {includeFitting && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Fitting Fee</span>
                  <span className="font-semibold text-foreground">R {summary.fittingFee.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between pt-2 border-t border-border text-lg">
                <span className="font-bold text-foreground">Total</span>
                <span className="font-bold text-primary">R {summary.total.toLocaleString()}</span>
              </div>
              {summary.savings > 0 && (
                <p className="text-xs text-green-600 text-center">
                  You're saving R {summary.savings.toLocaleString()}!
                </p>
              )}
            </div>
            <Button className="w-full" size="lg">
              Proceed to Checkout
            </Button>
            <Button variant="outline" className="w-full" onClick={onClose}>
              Continue Shopping
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
