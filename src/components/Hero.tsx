import { Button } from "@/components/ui/button";
import { ArrowLeft, Droplets, Shield, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-water-purifiers.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="دستگاه های تصفیه آب"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 via-primary/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            آب پاک و سالم
            <br />
            <span className="bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
              برای خانواده شما
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            بهترین دستگاه‌های تصفیه آب با تکنولوژی روز دنیا، 
            برای حفظ سلامت شما و عزیزانتان
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12">
            <div className="flex items-center gap-2 water-glass-effect px-4 py-2 rounded-full">
              <Droplets className="h-5 w-5 text-accent" />
              <span className="text-sm md:text-base">حذف ۹۹٪ آلودگی</span>
            </div>
            <div className="flex items-center gap-2 water-glass-effect px-4 py-2 rounded-full">
              <Shield className="h-5 w-5 text-accent" />
              <span className="text-sm md:text-base">گارانتی ۵ ساله</span>
            </div>
            <div className="flex items-center gap-2 water-glass-effect px-4 py-2 rounded-full">
              <Award className="h-5 w-5 text-accent" />
              <span className="text-sm md:text-base">مجوز وزارت بهداشت</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/products">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-primary hover:shadow-elegant transition-all duration-300 text-lg px-8 py-6"
              >
                مشاهده محصولات
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300 text-lg px-8 py-6"
            >
              مشاوره رایگان
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent persian-numbers">+۱۰,۰۰۰</div>
              <div className="text-sm opacity-80">مشتری راضی</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent persian-numbers">۱۵</div>
              <div className="text-sm opacity-80">سال تجربه</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent persian-numbers">۲۴/۷</div>
              <div className="text-sm opacity-80">پشتیبانی</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-ping opacity-70"></div>
      <div className="absolute bottom-32 right-16 w-3 h-3 bg-white rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-accent rounded-full animate-bounce opacity-50"></div>
    </section>
  );
};

export default Hero;