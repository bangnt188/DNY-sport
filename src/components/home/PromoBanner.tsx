
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PromoBanner = () => {
  return (
    <section className="py-12 bg-primary text-white overflow-hidden relative">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?q=80&w=2976&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/60" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Giảm giá 20% cho tất cả sản phẩm mới
            </h2>
            <p className="text-white/80">
              Sử dụng mã <span className="font-bold">SUMMER2024</span> khi thanh toán
            </p>
          </div>
          
          <Button
            variant="outline"
            className="bg-white text-primary hover:bg-white/90 border-none"
            size="lg"
            asChild
          >
            <a href="/products/new">
              Mua ngay
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
