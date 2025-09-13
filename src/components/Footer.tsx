import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-right">
              <h3 className="text-xl font-semibold mb-2">خبرنامه آب پاک</h3>
              <p className="text-white/80">از جدیدترین محصولات و تخفیف‌ها با خبر شوید</p>
            </div>
            <div className="flex w-full md:w-auto max-w-md gap-2">
              <Input 
                type="email" 
                placeholder="آدرس ایمیل شما..."
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 text-right"
              />
              <Button variant="clean" className="whitespace-nowrap">
                عضویت
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="text-center md:text-right">
            <div className="text-2xl font-bold mb-4 text-accent">آب پاک</div>
            <p className="text-white/80 mb-4 leading-relaxed">
              پیشرو در تولید و فروش دستگاه‌های تصفیه آب با بیش از ۱۵ سال تجربه
              در خدمات رسانی به مشتریان عزیز
            </p>
            <div className="flex justify-center md:justify-start gap-3">
              <Button variant="ghost" size="icon" className="text-white hover:text-accent">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-accent">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-accent">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">دسترسی سریع</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">صفحه اصلی</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">محصولات</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">درباره ما</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">تماس با ما</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">بلاگ</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">خدمات مشتریان</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">راهنمای خرید</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">شرایط گارانتی</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">سرویس و نگهداری</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">سوالات متداول</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">رضایت مندی</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">اطلاعات تماس</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-white/80 persian-numbers">۰۲۱-۱۲۳۴۵۶۷۸</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-white/80">info@abpak.com</span>
              </div>
              <div className="flex items-start justify-center md:justify-start gap-3">
                <MapPin className="h-4 w-4 text-accent mt-1" />
                <span className="text-white/80 text-sm leading-relaxed">
                  تهران، خیابان ولیعصر، پلاک ۱۲۳۴
                  <br />
                  طبقه دوم، واحد ۵
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm text-center md:text-right">
              © ۱۴۰۳ آب پاک. تمامی حقوق محفوظ است.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-accent transition-colors">
                حریم خصوصی
              </a>
              <a href="#" className="text-white/60 hover:text-accent transition-colors">
                شرایط استفاده
              </a>
              <a href="#" className="text-white/60 hover:text-accent transition-colors">
                قوانین
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;