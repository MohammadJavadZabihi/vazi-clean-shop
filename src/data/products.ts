import underSinkImage from "@/assets/under-sink-purifier.jpg";
import countertopImage from "@/assets/countertop-purifier.jpg";
import wholeHouseImage from "@/assets/whole-house-system.jpg";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  features: string[];
  isNew?: boolean;
  discount?: number;
  description: string;
  specifications: {
    capacity: string;
    dimensions: string;
    filtrationStages: number;
    warranty: string;
    waterOutput: string;
  };
}

export const products: Product[] = [
  {
    id: 1,
    name: "دستگاه تصفیه آب زیر سینکی آکوا پیور",
    price: 4500000,
    originalPrice: 5200000,
    image: underSinkImage,
    rating: 4.8,
    reviewCount: 245,
    features: ["۷ مرحله تصفیه", "فیلتر RO", "UV استریلایزر"],
    isNew: true,
    discount: 15,
    description: "دستگاه تصفیه آب پیشرفته با تکنولوژی اسمز معکوس و UV استریلایزر که تمامی آلودگی‌ها، باکتری‌ها و ویروس‌ها را از آب حذف می‌کند. مناسب برای خانواده‌های ۳ تا ۶ نفره.",
    specifications: {
      capacity: "۲۰۰ لیتر در روز",
      dimensions: "۴۰ × ۳۰ × ۱۵ سانتی‌متر",
      filtrationStages: 7,
      warranty: "۵ سال",
      waterOutput: "۱.۵ لیتر در دقیقه"
    }
  },
  {
    id: 2,
    name: "دستگاه تصفیه آب رومیزی کریستال",
    price: 2800000,
    image: countertopImage,
    rating: 4.6,
    reviewCount: 180,
    features: ["۵ مرحله تصفیه", "کمپکت", "نصب آسان"],
    description: "دستگاه تصفیه آب رومیزی با طراحی زیبا و کارکرد بالا. نصب بدون نیاز به لوله‌کشی و مناسب برای فضاهای کوچک.",
    specifications: {
      capacity: "۱۰۰ لیتر در روز",
      dimensions: "۳۵ × ۲۵ × ۳۰ سانتی‌متر",
      filtrationStages: 5,
      warranty: "۳ سال",
      waterOutput: "۱ لیتر در دقیقه"
    }
  },
  {
    id: 3,
    name: "سیستم تصفیه آب کل خانه پیوریتک",
    price: 12500000,
    originalPrice: 14000000,
    image: wholeHouseImage,
    rating: 4.9,
    reviewCount: 95,
    features: ["تصفیه کل خانه", "فیلتر خودشو", "کنترل هوشمند"],
    discount: 11,
    description: "سیستم جامع تصفیه آب برای کل خانه که تمامی آب ورودی به ساختمان را تصفیه می‌کند. دارای سیستم خودشوی فیلترها و کنترل هوشمند.",
    specifications: {
      capacity: "۲۰۰۰ لیتر در روز",
      dimensions: "۸۰ × ۴۰ × ۱۲۰ سانتی‌متر",
      filtrationStages: 9,
      warranty: "۱۰ سال",
      waterOutput: "۲۰ لیتر در دقیقه"
    }
  },
  {
    id: 4,
    name: "دستگاه تصفیه آب قابل حمل پیورفلو",
    price: 1500000,
    image: countertopImage,
    rating: 4.4,
    reviewCount: 320,
    features: ["قابل حمل", "باتری قابل شارژ", "فیلتر نانو"],
    isNew: true,
    description: "دستگاه تصفیه آب کوچک و قابل حمل برای مسافرت و استفاده در محل کار. دارای باتری قابل شارژ و فیلتر پیشرفته نانو.",
    specifications: {
      capacity: "۵۰ لیتر در روز",
      dimensions: "۲۰ × ۱۵ × ۲۵ سانتی‌متر",
      filtrationStages: 3,
      warranty: "۲ سال",
      waterOutput: "۰.۵ لیتر در دقیقه"
    }
  },
  {
    id: 5,
    name: "دستگاه تصفیه آب صنعتی آکوا مکس",
    price: 25000000,
    image: wholeHouseImage,
    rating: 4.7,
    reviewCount: 45,
    features: ["ظرفیت بالا", "فیلتر اتوماتیک", "مانیتورینگ آنلاین"],
    description: "دستگاه تصفیه آب صنعتی با ظرفیت بالا برای استفاده در کارخانجات، هتل‌ها و مجتمع‌های بزرگ. دارای سیستم مانیتورینگ آنلاین و فیلترهای اتوماتیک.",
    specifications: {
      capacity: "۱۰,۰۰۰ لیتر در روز",
      dimensions: "۱۵۰ × ۸۰ × ۲۰۰ سانتی‌متر",
      filtrationStages: 12,
      warranty: "۱۵ سال",
      waterOutput: "۱۰۰ لیتر در دقیقه"
    }
  },
  {
    id: 6,
    name: "دستگاه تصفیه آب یخچالی فریش واتر",
    price: 3200000,
    originalPrice: 3800000,
    image: underSinkImage,
    rating: 4.5,
    reviewCount: 165,
    features: ["آب سرد و گرم", "صرفه‌جویی انرژی", "طراحی مدرن"],
    discount: 16,
    description: "دستگاه تصفیه آب با قابلیت سرد و گرم کردن آب. دارای طراحی مدرن و سیستم صرفه‌جویی در مصرف انرژی.",
    specifications: {
      capacity: "۱۵۰ لیتر در روز",
      dimensions: "۳۵ × ۳۵ × ۱۰۰ سانتی‌متر",
      filtrationStages: 6,
      warranty: "۴ سال",
      waterOutput: "۲ لیتر در دقیقه"
    }
  }
];