import { Users, Award, Target, Heart, CheckCircle, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const stats = [
    { number: "15+", label: "سال تجربه" },
    { number: "10000+", label: "مشتری راضی" },
    { number: "50+", label: "نوع محصول" },
    { number: "24/7", label: "پشتیبانی" }
  ];

  const values = [
    {
      icon: Heart,
      title: "مسئولیت اجتماعی",
      description: "متعهد به ارائه آب پاک و سالم برای همه خانواده‌های ایرانی"
    },
    {
      icon: Award,
      title: "کیفیت برتر",
      description: "استفاده از بهترین تکنولوژی‌های روز دنیا در تصفیه آب"
    },
    {
      icon: CheckCircle,
      title: "اعتماد و صداقت",
      description: "شفافیت کامل در خدمات و قیمت‌گذاری منصفانه"
    },
    {
      icon: Globe,
      title: "محیط زیست",
      description: "حفاظت از محیط زیست با کاهش استفاده از آب بسته‌بندی"
    }
  ];

  const team = [
    {
      name: "احمد محمدی",
      role: "مدیر عامل",
      description: "بیش از 20 سال تجربه در صنعت تصفیه آب"
    },
    {
      name: "فاطمه احمدی",
      role: "مدیر فنی",
      description: "متخصص تکنولوژی‌های نوین تصفیه آب"
    },
    {
      name: "علی رضایی",
      role: "مدیر فروش",
      description: "متخصص مشاوره و راهنمایی مشتریان"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-water overflow-hidden">
        <div className="absolute inset-0 bg-water-pattern opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            درباره آب پاک
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            پیشرو در ارائه راه‌حل‌های تصفیه آب در ایران، با هدف تامین آب پاک و سالم برای همه خانواده‌ها
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">داستان ما</h2>
              <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-right">
                <p className="text-lg leading-relaxed">
                  آب پاک در سال ۲۰۰۸ با هدف ارائه بهترین سیستم‌های تصفیه آب به خانواده‌های ایرانی تاسیس شد. 
                  ما با درک عمیق از اهمیت آب پاک در سلامت خانواده، تلاش می‌کنیم تا بهترین محصولات و خدمات را ارائه دهیم.
                </p>
                <p className="text-lg leading-relaxed">
                  در طول این سال‌ها، توانسته‌ایم اعتماد هزاران خانواده ایرانی را جلب کنیم و به عنوان یکی از 
                  پیشروان صنعت تصفیه آب در کشور شناخته شویم.
                </p>
                <p className="text-lg leading-relaxed">
                  امروز، با تیمی متخصص و مجرب، همچنان در راه تحقق رویای آب پاک برای همه پیش می‌رویم.
                </p>
              </div>
              
              <div className="bg-gradient-subtle rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">خانواده بزرگ آب پاک</h3>
                  <p className="text-muted-foreground">بیش از ۱۰۰۰۰ خانواده راضی</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 text-center">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">ماموریت ما</h3>
                <p className="text-muted-foreground leading-relaxed">
                  ارائه بهترین و مقرون‌به‌صرفه‌ترین راه‌حل‌های تصفیه آب با هدف حفظ سلامت خانواده‌های ایرانی 
                  و کمک به محیط زیست از طریق کاهش مصرف آب بسته‌بندی.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">چشم‌انداز ما</h3>
                <p className="text-muted-foreground leading-relaxed">
                  تبدیل شدن به مرجع اصلی تصفیه آب در ایران و منطقه، با ارائه محصولات نوآورانه و خدمات برتر 
                  که استانداردهای بین‌المللی کیفیت را برآورده می‌کنند.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">ارزش‌های ما</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-elegant transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">تیم ما</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              تیمی متخصص و مجرب که با تعهد و علاقه در خدمت شما هستیم
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="space-y-4">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <Badge variant="secondary" className="mt-2">
                      {member.role}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-water text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            آماده همکاری با شما هستیم
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            برای مشاوره رایگان و انتخاب بهترین سیستم تصفیه آب برای خانه یا محل کارتان با ما تماس بگیرید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                تماس با ما
              </button>
            </a>
            <a href="/products" className="inline-block">
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                مشاهده محصولات
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;