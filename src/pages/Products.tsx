import { useState } from "react";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { products, Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

const Products = () => {
  const [cartItems, setCartItems] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => prev + 1);
    console.log('Added to cart:', product.name);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(term.toLowerCase()) ||
      product.features.some(feature => feature.toLowerCase().includes(term.toLowerCase()))
    );
    setFilteredProducts(filtered);
  };

  const handleSort = (value: string) => {
    setSortBy(value);
    let sorted = [...filteredProducts];
    
    switch (value) {
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        sorted.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        sorted = products.filter(product =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    }
    
    setFilteredProducts(sorted);
  };

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navbar cartItems={cartItems} />
      
      {/* Page Header */}
      <section className="bg-gradient-clean py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
            محصولات ما
          </h1>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
            انتخاب کنید از مجموعه کاملی از بهترین دستگاه‌های تصفیه آب
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="جستجو در محصولات..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="pr-10 text-right"
              />
            </div>

            {/* Sort */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground whitespace-nowrap">مرتب‌سازی بر اساس:</span>
              <Select value={sortBy} onValueChange={handleSort}>
                <SelectTrigger className="w-48 text-right">
                  <SelectValue placeholder="انتخاب کنید" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">پیش‌فرض</SelectItem>
                  <SelectItem value="price-low">قیمت: کم به زیاد</SelectItem>
                  <SelectItem value="price-high">قیمت: زیاد به کم</SelectItem>
                  <SelectItem value="rating">بیشترین امتیاز</SelectItem>
                  <SelectItem value="newest">جدیدترین</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-muted-foreground">
            <span className="persian-numbers">{filteredProducts.length}</span> محصول یافت شد
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-muted-foreground mb-4">
                محصولی با این مشخصات یافت نشد
              </div>
              <Button variant="water" onClick={() => {
                setSearchTerm("");
                setFilteredProducts(products);
              }}>
                مشاهده همه محصولات
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;