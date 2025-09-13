import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Package, 
  Heart, 
  Settings, 
  CreditCard, 
  MapPin, 
  Phone,
  Mail,
  Calendar,
  CheckCircle,
  Clock,
  Truck
} from "lucide-react";

const Profile = () => {
  const [cartItems] = useState(2);
  const [user] = useState({
    name: "احمد محمدی",
    email: "ahmad@example.com",
    phone: "09123456789",
    joinDate: "1402/05/15",
    avatar: ""
  });

  const [orders] = useState([
    {
      id: "ORD-001",
      date: "1403/02/20",
      status: "delivered",
      total: 4500000,
      items: [
        { name: "دستگاه تصفیه آب زیر سینکی", quantity: 1, price: 4500000 }
      ]
    },
    {
      id: "ORD-002", 
      date: "1403/01/10",
      status: "processing",
      total: 2800000,
      items: [
        { name: "دستگاه تصفیه آب رومیزی", quantity: 1, price: 2800000 }
      ]
    }
  ]);

  const [wishlist] = useState([
    {
      id: 3,
      name: "سیستم تصفیه آب کل خانه",
      price: 12500000,
      image: "/api/placeholder/300/200"
    },
    {
      id: 5,
      name: "دستگاه تصفیه آب صنعتی",
      price: 25000000,
      image: "/api/placeholder/300/200"
    }
  ]);

  const formatPrice = (price: number) => {
    return price.toLocaleString('fa-IR') + ' تومان';
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'delivered':
        return <Badge className="bg-green-100 text-green-800">تحویل شده</Badge>;
      case 'processing':
        return <Badge className="bg-blue-100 text-blue-800">در حال پردازش</Badge>;
      case 'shipped':
        return <Badge className="bg-yellow-100 text-yellow-800">ارسال شده</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'processing':
        return <Clock className="h-4 w-4 text-blue-600" />;
      case 'shipped':
        return <Truck className="h-4 w-4 text-yellow-600" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navbar cartItems={cartItems} />
      
      {/* Profile Header */}
      <section className="bg-gradient-clean py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-6">
            <Avatar className="h-20 w-20">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="text-2xl bg-gradient-water text-white">
                {user.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                {user.name}
              </h1>
              <p className="text-muted-foreground flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                عضو از: <span className="persian-numbers">{user.joinDate}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                پروفایل
              </TabsTrigger>
              <TabsTrigger value="orders" className="flex items-center gap-2">
                <Package className="h-4 w-4" />
                سفارشات
              </TabsTrigger>
              <TabsTrigger value="wishlist" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                علاقه‌مندی‌ها
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                تنظیمات
              </TabsTrigger>
            </TabsList>

            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Personal Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>اطلاعات شخصی</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="fullName">نام و نام خانوادگی</Label>
                      <Input id="fullName" defaultValue={user.name} className="text-right" />
                    </div>
                    <div>
                      <Label htmlFor="email">ایمیل</Label>
                      <Input id="email" type="email" defaultValue={user.email} className="text-right" />
                    </div>
                    <div>
                      <Label htmlFor="phone">شماره تماس</Label>
                      <Input id="phone" defaultValue={user.phone} className="text-right persian-numbers" />
                    </div>
                    <Button variant="water">
                      بروزرسانی اطلاعات
                    </Button>
                  </CardContent>
                </Card>

                {/* Address Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      آدرس‌های من
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 border border-muted rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">آدرس اصلی</Badge>
                        <Button variant="ghost" size="sm">ویرایش</Button>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        تهران، خیابان ولیعصر، پلاک ۱۲۳، طبقه ۲، واحد ۵
                        <br />
                        کد پستی: ۱۴۱۵۷۳۳۸۱۱
                      </p>
                    </div>
                    <Button variant="outline" className="w-full">
                      افزودن آدرس جدید
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Orders Tab */}
            <TabsContent value="orders" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>تاریخچه سفارشات</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div key={order.id} className="border border-muted rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            {getStatusIcon(order.status)}
                            <div>
                              <div className="font-semibold">سفارش #{order.id}</div>
                              <div className="text-sm text-muted-foreground persian-numbers">
                                {order.date}
                              </div>
                            </div>
                          </div>
                          <div className="text-left">
                            {getStatusBadge(order.status)}
                            <div className="text-lg font-bold text-primary persian-numbers mt-1">
                              {formatPrice(order.total)}
                            </div>
                          </div>
                        </div>
                        <Separator className="my-3" />
                        <div className="space-y-2">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex justify-between text-sm">
                              <span>{item.name}</span>
                              <span className="persian-numbers">
                                {item.quantity} × {formatPrice(item.price)}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="flex gap-2 mt-4">
                          <Button variant="outline" size="sm">
                            مشاهده جزئیات
                          </Button>
                          {order.status === 'delivered' && (
                            <Button variant="outline" size="sm">
                              خرید مجدد
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Wishlist Tab */}
            <TabsContent value="wishlist" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>لیست علاقه‌مندی‌ها</CardTitle>
                </CardHeader>
                <CardContent>
                  {wishlist.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {wishlist.map((item) => (
                        <div key={item.id} className="border border-muted rounded-lg p-4">
                          <div className="aspect-video bg-muted rounded-md mb-3"></div>
                          <h3 className="font-semibold mb-2 line-clamp-2">{item.name}</h3>
                          <div className="text-lg font-bold text-primary persian-numbers mb-3">
                            {formatPrice(item.price)}
                          </div>
                          <div className="flex gap-2">
                            <Button variant="water" size="sm" className="flex-1">
                              افزودن به سبد
                            </Button>
                            <Button variant="ghost" size="sm">
                              حذف
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        هنوز محصولی به لیست علاقه‌مندی‌ها اضافه نکرده‌اید
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Security Settings */}
                <Card>
                  <CardHeader>
                    <CardTitle>تنظیمات امنیتی</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="currentPassword">رمز عبور فعلی</Label>
                      <Input id="currentPassword" type="password" className="text-right" />
                    </div>
                    <div>
                      <Label htmlFor="newPassword">رمز عبور جدید</Label>
                      <Input id="newPassword" type="password" className="text-right" />
                    </div>
                    <div>
                      <Label htmlFor="confirmPassword">تکرار رمز عبور جدید</Label>
                      <Input id="confirmPassword" type="password" className="text-right" />
                    </div>
                    <Button variant="water">
                      تغییر رمز عبور
                    </Button>
                  </CardContent>
                </Card>

                {/* Notification Settings */}
                <Card>
                  <CardHeader>
                    <CardTitle>تنظیمات اعلان‌ها</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>اعلان‌های ایمیل</span>
                      <input type="checkbox" defaultChecked className="toggle" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>اعلان‌های پیامک</span>
                      <input type="checkbox" defaultChecked className="toggle" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>اعلان‌های تخفیف</span>
                      <input type="checkbox" defaultChecked className="toggle" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>اعلان‌های محصولات جدید</span>
                      <input type="checkbox" className="toggle" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Profile;