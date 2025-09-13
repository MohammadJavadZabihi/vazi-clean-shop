import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  const [cartItems, setCartItems] = useState(0);

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navbar cartItems={cartItems} />
      <Hero />
      <ProductShowcase />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
