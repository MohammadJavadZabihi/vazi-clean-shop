import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ProductShowcase = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-16 bg-gradient-clean">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            محصولات پرفروش
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            بهترین دستگاه‌های تصفیه آب با کیفیت بالا و قیمت مناسب
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={(product) => {
                console.log('Added to cart:', product.name);
              }}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/products">
            <Button variant="water" size="lg">
              مشاهده همه محصولات
              <ArrowLeft className="mr-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;