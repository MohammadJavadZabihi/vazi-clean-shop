import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { Product } from "@/data/products";

interface CartItem extends Product {
  quantity: number;
}

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
  onCheckout: () => void;
}

const Cart = ({ items, onUpdateQuantity, onRemoveItem, onCheckout }: CartProps) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString('fa-IR') + ' تومان';
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 5000000 ? 0 : 200000;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-semibold mb-2">سبد خرید خالی است</h3>
        <p className="text-muted-foreground mb-6">
          هنوز محصولی به سبد خرید اضافه نکرده‌اید
        </p>
        <Button variant="water">
          ادامه خرید
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Cart Items */}
      <div className="space-y-4">
        {items.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <CardContent className="p-4">
              <div className="flex gap-4">
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md"
                />

                {/* Product Details */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground mb-1 line-clamp-2">
                    {item.name}
                  </h3>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {item.features.slice(0, 2).map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-lg font-bold text-primary persian-numbers">
                    {formatPrice(item.price)}
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center persian-numbers">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-destructive hover:text-destructive"
                    onClick={() => onRemoveItem(item.id)}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Order Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="text-right">خلاصه سفارش</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between">
            <span>جمع کل محصولات:</span>
            <span className="persian-numbers">{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span>هزینه ارسال:</span>
            <span className="persian-numbers">
              {shipping === 0 ? 'رایگان' : formatPrice(shipping)}
            </span>
          </div>
          {shipping === 0 && (
            <div className="text-sm text-green-600 text-center">
              🎉 ارسال رایگان برای خرید بالای ۵ میلیون تومان
            </div>
          )}
          <Separator />
          <div className="flex justify-between text-lg font-bold">
            <span>مجموع:</span>
            <span className="text-primary persian-numbers">{formatPrice(total)}</span>
          </div>
          <Button
            onClick={onCheckout}
            className="w-full bg-gradient-water hover:shadow-water transition-all duration-300"
            size="lg"
          >
            تکمیل خرید
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cart;