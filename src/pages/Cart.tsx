import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Truck, Shield, CreditCard, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { products, Product } from "@/data/products";

interface CartItem extends Product {
  quantity: number;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { ...products[0], quantity: 2 },
    { ...products[1], quantity: 1 },
  ]);
  const [couponCode, setCouponCode] = useState("");
  const [step, setStep] = useState<'cart' | 'checkout'>('cart');

  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev => 
        prev.map(item => 
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    setStep('checkout');
  };

  const applyCoupon = () => {
    // Mock coupon logic
    console.log('Applying coupon:', couponCode);
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('fa-IR') + ' تومان';
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 5000000 ? 0 : 200000;
  const discount = couponCode === 'SAVE10' ? subtotal * 0.1 : 0;
  const total = subtotal + shipping - discount;

  if (step === 'checkout') {
    return (
      <div className="min-h-screen bg-background" dir="rtl">
        <Navbar cartItems={cartItems.length} />
        
        {/* Checkout Header */}
        <section className="bg-gradient-clean py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-2">
              تکمیل خرید
            </h1>
            <p className="text-center text-muted-foreground">
              اطلاعات خود را وارد کنید
            </p>
          </div>
        </section>

        {/* Checkout Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Checkout Form */}
              <div className="lg:col-span-2 space-y-6">
                {/* Shipping Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Truck className="h-5 w-5 text-accent" />
                      اطلاعات ارسال
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">نام</Label>
                        <Input id="firstName" placeholder="نام خود را وارد کنید" className="text-right" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">نام خانوادگی</Label>
                        <Input id="lastName" placeholder="نام خانوادگی خود را وارد کنید" className="text-right" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="phone">شماره تماس</Label>
                      <Input id="phone" placeholder="شماره تماس خود را وارد کنید" className="text-right" />
                    </div>
                    <div>
                      <Label htmlFor="address">آدرس کامل</Label>
                      <Input id="address" placeholder="آدرس کامل خود را وارد کنید" className="text-right" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">شهر</Label>
                        <Input id="city" placeholder="شهر" className="text-right" />
                      </div>
                      <div>
                        <Label htmlFor="postalCode">کد پستی</Label>
                        <Input id="postalCode" placeholder="کد پستی" className="text-right" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Method */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5 text-accent" />
                      روش پرداخت
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <input type="radio" id="online" name="payment" className="ml-2" defaultChecked />
                        <Label htmlFor="online">پرداخت آنلاین</Label>
                        <Badge variant="secondary">امن</Badge>
                      </div>
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <input type="radio" id="cash" name="payment" className="ml-2" />
                        <Label htmlFor="cash">پرداخت در محل</Label>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div>
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle>خلاصه سفارش</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-2">
                          <span className="persian-numbers">{item.quantity}×</span>
                          <span className="line-clamp-1">{item.name}</span>
                        </div>
                        <span className="persian-numbers">{formatPrice(item.price * item.quantity)}</span>
                      </div>
                    ))}
                    <Separator />
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>جمع کل:</span>
                        <span className="persian-numbers">{formatPrice(subtotal)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ارسال:</span>
                        <span className="persian-numbers">
                          {shipping === 0 ? 'رایگان' : formatPrice(shipping)}
                        </span>
                      </div>
                      {discount > 0 && (
                        <div className="flex justify-between text-green-600">
                          <span>تخفیف:</span>
                          <span className="persian-numbers">-{formatPrice(discount)}</span>
                        </div>
                      )}
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-lg">
                      <span>مجموع نهایی:</span>
                      <span className="text-primary persian-numbers">{formatPrice(total)}</span>
                    </div>
                    <Button className="w-full bg-gradient-water hover:shadow-water" size="lg">
                      تایید و پرداخت
                    </Button>
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

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navbar cartItems={cartItems.length} />
      
      {/* Cart Header */}
      <section className="bg-gradient-clean py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-2">
            سبد خرید
          </h1>
          <p className="text-center text-muted-foreground">
            <span className="persian-numbers">{cartItems.length}</span> محصول در سبد خرید شما
          </p>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <Cart
                  items={cartItems}
                  onUpdateQuantity={handleUpdateQuantity}
                  onRemoveItem={handleRemoveItem}
                  onCheckout={handleCheckout}
                />
              </div>

              {/* Cart Summary */}
              <div className="space-y-6">
                {/* Coupon */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">کد تخفیف</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      <Input
                        placeholder="کد تخفیف..."
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        className="text-right"
                      />
                      <Button variant="outline" onClick={applyCoupon}>
                        اعمال
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Features */}
                <Card>
                  <CardContent className="p-4 space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Shield className="h-4 w-4 text-accent" />
                      <span>خرید امن با گارانتی</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Truck className="h-4 w-4 text-accent" />
                      <span>ارسال سریع و رایگان</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <ShoppingBag className="h-4 w-4 text-accent" />
                      <span>۷ روز ضمانت بازگشت</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">سبد خرید خالی است</h3>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                هنوز محصولی به سبد خرید اضافه نکرده‌اید. 
                <br />
                از مجموعه محصولات ما دیدن کنید.
              </p>
          <Link to="/products">
            <Button variant="water" size="lg">
              مشاهده محصولات
              <ArrowLeft className="mr-2 h-5 w-5" />
            </Button>
          </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CartPage;