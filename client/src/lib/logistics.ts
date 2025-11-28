export interface DeliveryZone {
  province: string;
  cities: string[];
  deliveryDays: string;
  baseFee: number;
  freeDeliveryThreshold: number;
}

export const DELIVERY_ZONES: DeliveryZone[] = [
  {
    province: "Gauteng",
    cities: ["Johannesburg", "Pretoria", "Midrand", "Sandton", "Roodepoort", "Germiston", "Benoni", "Boksburg", "Krugersdorp"],
    deliveryDays: "1-2 business days",
    baseFee: 0,
    freeDeliveryThreshold: 0,
  },
  {
    province: "Western Cape",
    cities: ["Cape Town", "Stellenbosch", "Paarl", "Somerset West", "Bellville", "Brackenfell", "Durbanville"],
    deliveryDays: "2-3 business days",
    baseFee: 0,
    freeDeliveryThreshold: 0,
  },
  {
    province: "KwaZulu-Natal",
    cities: ["Durban", "Pietermaritzburg", "Newcastle", "Richards Bay", "Port Shepstone", "Umhlanga"],
    deliveryDays: "2-3 business days",
    baseFee: 0,
    freeDeliveryThreshold: 0,
  },
  {
    province: "Free State",
    cities: ["Bloemfontein", "Welkom", "Bethlehem", "Kroonstad", "Sasolburg"],
    deliveryDays: "2-3 business days",
    baseFee: 199,
    freeDeliveryThreshold: 5000,
  },
  {
    province: "Limpopo",
    cities: ["Polokwane", "Tzaneen", "Mokopane", "Thohoyandou", "Musina"],
    deliveryDays: "2-3 business days",
    baseFee: 199,
    freeDeliveryThreshold: 5000,
  },
  {
    province: "Mpumalanga",
    cities: ["Nelspruit", "Witbank", "Middelburg", "Secunda", "Ermelo"],
    deliveryDays: "2-3 business days",
    baseFee: 199,
    freeDeliveryThreshold: 5000,
  },
  {
    province: "North West",
    cities: ["Rustenburg", "Mahikeng", "Klerksdorp", "Potchefstroom", "Brits"],
    deliveryDays: "2-3 business days",
    baseFee: 199,
    freeDeliveryThreshold: 5000,
  },
  {
    province: "Eastern Cape",
    cities: ["Port Elizabeth", "East London", "Mthatha", "Grahamstown", "Uitenhage", "George"],
    deliveryDays: "3-4 business days",
    baseFee: 299,
    freeDeliveryThreshold: 7000,
  },
  {
    province: "Northern Cape",
    cities: ["Kimberley", "Upington", "Kuruman", "Springbok"],
    deliveryDays: "3-4 business days",
    baseFee: 399,
    freeDeliveryThreshold: 8000,
  },
];

export function calculateDeliveryFee(province: string, subtotal: number): number {
  const zone = DELIVERY_ZONES.find((z) => z.province === province);
  if (!zone) return 0;
  
  if (subtotal >= zone.freeDeliveryThreshold) {
    return 0;
  }
  
  return zone.baseFee;
}

export function getDeliveryInfo(province: string) {
  return DELIVERY_ZONES.find((z) => z.province === province);
}

export function calculateBulkDiscount(quantity: number, basePrice: number): number {
  if (quantity >= 8) {
    return basePrice * 0.85; // 15% discount for 8+ tyres
  } else if (quantity >= 4) {
    return basePrice * 0.90; // 10% discount for 4+ tyres
  }
  return basePrice;
}

export function calculateFittingFee(quantity: number, hasFitting: boolean): number {
  if (!hasFitting) return 0;
  const perTyreFee = 150;
  return quantity * perTyreFee;
}

export interface OrderSummary {
  subtotal: number;
  deliveryFee: number;
  fittingFee: number;
  discount: number;
  total: number;
  savings: number;
}

export function calculateOrderSummary(
  items: { price: number; quantity: number }[],
  province: string,
  includeFitting: boolean
): OrderSummary {
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  
  // Calculate subtotal with bulk discounts
  const subtotal = items.reduce((sum, item) => {
    const discountedPrice = calculateBulkDiscount(item.quantity, item.price);
    return sum + discountedPrice * item.quantity;
  }, 0);
  
  // Calculate original price for savings
  const originalSubtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = originalSubtotal - subtotal;
  
  const deliveryFee = calculateDeliveryFee(province, subtotal);
  const fittingFee = calculateFittingFee(totalQuantity, includeFitting);
  
  const total = subtotal + deliveryFee + fittingFee;
  const savings = discount + (deliveryFee === 0 && originalSubtotal >= 1000 ? DELIVERY_ZONES.find(z => z.province === province)?.baseFee || 0 : 0);
  
  return {
    subtotal,
    deliveryFee,
    fittingFee,
    discount,
    total,
    savings,
  };
}
