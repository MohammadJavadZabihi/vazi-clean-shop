import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: Phone,
      title: "تلفن تماس",
      content: "021-88776655",
      description: "شنبه تا پنج‌شنبه، ۸ صبح تا ۸ شب"
    },
    {
      icon: Mail,
      title: "ایمیل",
      content: "info@abpak.ir",
      description: "پاسخگویی در کمتر از ۲۴ ساعت"
    },
    {
      icon: MapPin,
      title: "آدرس",
      content: "تهران، خیابان ولیعصر، پلاک ۱۲۳۴",
      description: "نمایشگاه و دفتر مرکزی"
    },
    {
      icon: Clock,
      title: "ساعات کاری",
      content: "شنبه تا پنج‌شنبه",
      description: "۸:۰۰ صبح تا ۸:۰۰ شب"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "خطا",
        description: "لطفاً تمامی فیلدهای الزامی را پر کنید",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "پیام ارسال شد",
      description: "پیام شما با موفقیت ارسال شد. در اسرع وقت با شما تماس خواهیم گرفت.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-water overflow-hidden">
        <div className="absolute inset-0 bg-water-pattern opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            تماس با ما
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            سوالی دارید؟ نیاز به مشاوره دارید؟ تیم متخصص ما آماده کمک به شما است
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-elegant transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                    <p className="text-primary font-semibold">{info.content}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {info.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <CardHeader className="text-right">
                <CardTitle className="text-2xl font-bold flex items-center gap-3">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  ارسال پیام
                </CardTitle>
                <p className="text-muted-foreground">
                  فرم زیر را پر کنید تا در اسرع وقت با شما تماس بگیریم
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-right">نام و نام خانوادگی *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="نام کامل خود را وارد کنید"
                        className="text-right"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-right">شماره تماس</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="09123456789"
                        className="text-right"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-right">ایمیل *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="example@email.com"
                      className="text-right"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-right">موضوع</Label>
                    <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                      <SelectTrigger className="text-right">
                        <SelectValue placeholder="موضوع پیام را انتخاب کنید" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="consultation">مشاوره خرید</SelectItem>
                        <SelectItem value="support">پشتیبانی فنی</SelectItem>
                        <SelectItem value="warranty">گارانتی و خدمات</SelectItem>
                        <SelectItem value="complaint">شکایت</SelectItem>
                        <SelectItem value="suggestion">پیشنهاد</SelectItem>
                        <SelectItem value="other">سایر موارد</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-right">متن پیام *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="پیام خود را اینجا بنویسید..."
                      className="min-h-32 text-right"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:bg-gradient-primary/90"
                    size="lg"
                  >
                    <Send className="ml-2 h-5 w-5" />
                    ارسال پیام
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="p-8">
                <CardHeader className="text-right">
                  <CardTitle className="text-xl font-bold">موقعیت ما</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-subtle rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">نقشه تعاملی</p>
                      <p className="text-sm text-muted-foreground">
                        تهران، خیابان ولیعصر، پلاک ۱۲۳۴
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card className="p-8">
                <CardHeader className="text-right">
                  <CardTitle className="text-xl font-bold">سوالات متداول</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-right">چه مدت طول می‌کشد تا پیام من پاسخ داده شود؟</h4>
                    <p className="text-sm text-muted-foreground text-right">
                      معمولاً در کمتر از ۲۴ ساعت به پیام‌های شما پاسخ می‌دهیم.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-right">آیا مشاوره رایگان است؟</h4>
                    <p className="text-sm text-muted-foreground text-right">
                      بله، تمامی مشاوره‌های ما کاملاً رایگان است.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-right">آیا امکان بازدید حضوری وجود دارد؟</h4>
                    <p className="text-sm text-muted-foreground text-right">
                      بله، می‌توانید با هماهنگی قبلی از نمایشگاه ما بازدید کنید.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <Card className="max-w-2xl mx-auto p-8 border-accent-orange border-2">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-accent-orange rounded-full flex items-center justify-center mx-auto">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">تماس اضطراری</h3>
              <p className="text-muted-foreground">
                در صورت بروز مشکل فوری با دستگاه‌های تصفیه آب، با شماره زیر تماس بگیرید:
              </p>
              <div className="text-3xl font-bold text-accent-orange">
                021-88776699
              </div>
              <p className="text-sm text-muted-foreground">
                پاسخگویی ۲۴ ساعته، ۷ روز هفته
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;