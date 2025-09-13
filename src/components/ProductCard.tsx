import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { useState } from "react";

interface Product {
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
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const formatPrice = (price: number) => {
    return price.toLocaleString('fa-IR') + ' تومان';
  };

  return (
    <Card className="group overflow-hidden water-ripple hover:shadow-water transition-all duration-300 border-muted">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          {product.isNew && (
            <Badge className="bg-gradient-water text-white">جدید</Badge>
          )}
          {product.discount && (
            <Badge variant="destructive">{product.discount}% تخفیف</Badge>
          )}
        </div>

        {/* Like Button */}
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-2 left-2 h-8 w-8 rounded-full bg-white/80 hover:bg-white ${
            isLiked ? 'text-red-500' : 'text-muted-foreground'
          }`}
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
        </Button>
      </div>

      <CardContent className="p-4">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground persian-numbers">
            ({product.reviewCount.toLocaleString('fa-IR')})
          </span>
        </div>

        {/* Product Name */}
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2 text-right">
          {product.name}
        </h3>

        {/* Features */}
        <div className="flex flex-wrap gap-1 mb-3">
          {product.features.slice(0, 2).map((feature, index) => (
            <span
              key={index}
              className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-primary persian-numbers">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through persian-numbers">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          onClick={() => onAddToCart?.(product)}
          className="w-full bg-gradient-water hover:shadow-water transition-all duration-300"
        >
          <ShoppingCart className="h-4 w-4 ml-2" />
          افزودن به سبد خرید
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;