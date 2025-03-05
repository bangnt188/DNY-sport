
import React from "react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/ui/section-heading";
import ProductCard from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const products = [
  {
    id: "1",
    name: "Áo thun thể thao Pro-Dry",
    price: 350000,
    originalPrice: 450000,
    image: "https://images.unsplash.com/photo-1580906853203-f82f3b60f850?q=80&w=2574&auto=format&fit=crop",
    slug: "ao-thun-the-thao-pro-dry",
    isNew: true,
  },
  {
    id: "2",
    name: "Quần short tập gym Ultra Flex",
    price: 420000,
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=2574&auto=format&fit=crop",
    slug: "quan-short-tap-gym-ultra-flex",
  },
  {
    id: "3",
    name: "Giày chạy bộ Dynamic Run",
    price: 1250000,
    originalPrice: 1500000,
    image: "https://images.unsplash.com/photo-1584539236339-f44eb176e4c1?q=80&w=2670&auto=format&fit=crop",
    slug: "giay-chay-bo-dynamic-run",
    isNew: true,
  },
  {
    id: "4",
    name: "Áo khoác gió nhẹ Windbreak",
    price: 750000,
    image: "https://images.unsplash.com/photo-1622097204857-b1bb712657b0?q=80&w=2670&auto=format&fit=crop",
    slug: "ao-khoac-gio-nhe-windbreak",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Sản phẩm nổi bật"
          subtitle="Khám phá những sản phẩm thể thao chất lượng cao đang được ưa chuộng nhất"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              image={product.image}
              slug={product.slug}
              isNew={product.isNew}
              className="animate-fade-in"
            />
          ))}
        </div>

        <div className="text-center">
          <Button asChild>
            <Link to="/products">
              Xem tất cả sản phẩm
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
