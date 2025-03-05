
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import { Star } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Nguyễn Văn An",
    role: "Cầu thủ bóng đá",
    content: "Tôi rất hài lòng với các sản phẩm từ DNY Sport. Chất lượng vải rất tốt, thoáng khí và bền bỉ. Tôi sẽ tiếp tục ủng hộ thương hiệu này.",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: "2",
    name: "Trần Thị Mai",
    role: "HLV thể hình",
    content: "Bộ đồ tập từ DNY Sport giúp tôi cảm thấy thoải mái và tự tin trong mỗi buổi tập. Chất liệu co giãn tốt và thiết kế đẹp mắt.",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=2574&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: "3",
    name: "Lê Minh Đức",
    role: "Runner chuyên nghiệp",
    content: "Giày chạy bộ của DNY Sport là sự lựa chọn hoàn hảo cho tôi. Đế giày êm ái, form giày vừa vặn và hỗ trợ tốt cho các giải marathon.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Khách hàng nói gì về chúng tôi"
          subtitle="Trải nghiệm thực tế từ những khách hàng đã sử dụng sản phẩm của DNY Sport"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>

              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
