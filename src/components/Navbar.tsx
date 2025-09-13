import { ShoppingCart, Search, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

interface NavbarProps {
  cartItems?: number;
}

const Navbar = ({ cartItems = 0 }: NavbarProps) => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-border shadow-clean">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-reverse space-x-4">
            <Link to="/" className="text-2xl font-bold bg-gradient-water bg-clip-text text-transparent">
              آب پاک
            </Link>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                type="search" 
                placeholder="جستجو در محصولات..."
                className="pr-10 text-right"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-reverse space-x-6">
            <Link to="/">
              <Button variant="ghost" className="text-right">
                صفحه اصلی
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="ghost" className="text-right">
                محصولات
              </Button>
            </Link>
            <Button variant="ghost" className="text-right">
              درباره ما
            </Button>
            <Button variant="ghost" className="text-right">
              تماس با ما
            </Button>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-reverse space-x-4">
            {/* Mobile Search */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>

            {/* User Account */}
            <Link to="/profile">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>

            {/* Shopping Cart */}
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartItems > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-2 -left-2 h-5 w-5 p-0 flex items-center justify-center text-xs"
                  >
                    {cartItems}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;