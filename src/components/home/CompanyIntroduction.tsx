
import React from "react";
import { motion } from "framer-motion";
import LazyImage from "@/components/ui/lazy-image";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const CompanyIntroduction = () => {
  const benefits = [
    "Chất liệu thể thao cao cấp",
    "Thiết kế phù hợp với người Việt Nam",
    "Công nghệ thoáng khí Pro-Ventilation",
    "Bền bỉ và dễ dàng bảo quản"
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <LazyImage
                src="https://images.unsplash.com/photo-1505986632300-1cb5ee6f57e7?q=80&w=2573&auto=format&fit=crop"
                alt="DNY Sport - Về chúng tôi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-lg overflow-hidden border-4 border-white shadow-xl hidden md:block">
              <LazyImage
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2568&auto=format&fit=crop"
                alt="DNY Sport - Chi tiết sản phẩm"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-4">
              Giới thiệu công ty
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Đồng hành cùng vận động viên Việt Nam
            </h2>
            <p className="text-muted-foreground mb-6">
              DNY Sport là thương hiệu thời trang thể thao hàng đầu Việt Nam, được thành lập với sứ mệnh cung cấp những sản phẩm thể thao chất lượng cao, giá thành hợp lý cho người Việt Nam.
            </p>
            <p className="text-muted-foreground mb-8">
              Chúng tôi không ngừng nghiên cứu và phát triển những sản phẩm phù hợp với thể trạng và khí hậu Việt Nam, đồng thời ứng dụng các công nghệ tiên tiến nhất trong sản xuất.
            </p>

            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <Button asChild>
              <Link to="/about">Tìm hiểu thêm về chúng tôi</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntroduction;
