
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Award, ThumbsUp, Users, Clock, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import LazyImage from "@/components/ui/lazy-image";

const About = () => {
  const stats = [
    { 
      icon: <Users />, 
      value: "10,000+", 
      label: "Khách hàng hài lòng" 
    },
    { 
      icon: <Award />, 
      value: "50+", 
      label: "Giải thưởng thiết kế" 
    },
    { 
      icon: <ThumbsUp />, 
      value: "98%", 
      label: "Đánh giá tích cực" 
    },
    { 
      icon: <Clock />, 
      value: "10+", 
      label: "Năm kinh nghiệm" 
    },
  ];

  const values = [
    {
      title: "Chất lượng",
      description: "Chúng tôi cam kết mang đến những sản phẩm chất lượng cao nhất cho khách hàng."
    },
    {
      title: "Sáng tạo",
      description: "Không ngừng đổi mới và sáng tạo trong thiết kế và công nghệ sản phẩm."
    },
    {
      title: "Bền vững",
      description: "Trách nhiệm với môi trường thông qua các quy trình sản xuất bền vững."
    },
    {
      title: "Cộng đồng",
      description: "Xây dựng cộng đồng thể thao mạnh mẽ và tích cực tại Việt Nam."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Về DNY Sport
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-muted-foreground"
              >
                Chúng tôi tạo ra những sản phẩm thể thao chất lượng cao, thiết kế đẹp mắt và phù hợp với người Việt Nam.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <LazyImage
                      src="https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=2574&auto=format&fit=crop"
                      alt="DNY Sport - Câu chuyện của chúng tôi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <SectionHeading
                  title="Câu chuyện của chúng tôi"
                  alignment="left"
                  className="mb-6"
                />
                
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    DNY Sport được thành lập vào năm 2014 bởi những người đam mê thể thao và thời trang. Chúng tôi bắt đầu với một cửa hàng nhỏ tại Hà Nội, với mục tiêu mang đến những sản phẩm thể thao chất lượng cao cho người Việt Nam.
                  </p>
                  <p>
                    Sau hơn 10 năm phát triển, DNY Sport đã trở thành một trong những thương hiệu thời trang thể thao hàng đầu tại Việt Nam, với hơn 20 cửa hàng trên toàn quốc và một nền tảng thương mại điện tử phát triển mạnh mẽ.
                  </p>
                  <p>
                    Điều khiến chúng tôi khác biệt là cam kết tạo ra những sản phẩm thể thao được thiết kế đặc biệt cho người Việt Nam, với sự hiểu biết sâu sắc về thể trạng và nhu cầu của người dùng trong nước.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 text-primary rounded-full">
                      {stat.icon}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading
              title="Giá trị cốt lõi"
              subtitle="Những nguyên tắc định hướng cho mọi quyết định và hành động của chúng tôi"
              className="mb-16"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <div className="mb-4">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
