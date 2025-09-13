import { Shield, Award, Headphones, Truck, RefreshCw, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "گارانتی معتبر",
    description: "تا ۱۰ سال گارانتی شرکتی با پشتیبانی کامل"
  },
  {
    icon: Award,
    title: "کیفیت بالا",
    description: "استانداردهای بین‌المللی و مجوز وزارت بهداشت"
  },
  {
    icon: Headphones,
    title: "پشتیبانی ۲۴/۷",
    description: "تیم پشتیبانی حرفه‌ای در تمام ساعات شبانه‌روز"
  },
  {
    icon: Truck,
    title: "ارسال سریع",
    description: "ارسال رایگان در تهران و شهرستان‌ها"
  },
  {
    icon: RefreshCw,
    title: "تعویض فیلتر",
    description: "سرویس تعویض فیلتر و نگهداری دوره‌ای"
  },
  {
    icon: Heart,
    title: "رضایت مشتری",
    description: "بیش از ۱۰ هزار مشتری راضی و وفادار"
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            چرا آب پاک؟
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            با بیش از ۱۵ سال تجربه، اعتماد شما را جلب کرده‌ایم
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-water transition-all duration-300 border-muted water-ripple"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-water rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;