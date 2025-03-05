
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: "1",
    title: "10 bài tập cardio hiệu quả tại nhà",
    excerpt: "Tổng hợp những bài tập cardio đơn giản mà hiệu quả giúp bạn duy trì sức khỏe ngay tại nhà...",
    date: "10/07/2023",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    category: "Fitness",
    slug: "10-bai-tap-cardio-hieu-qua-tai-nha"
  },
  {
    id: "2",
    title: "Chế độ dinh dưỡng cho người tập thể thao",
    excerpt: "Khám phá các loại thực phẩm giàu protein và các dưỡng chất cần thiết cho người thường xuyên tập luyện...",
    date: "05/08/2023",
    image: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?q=80&w=2006&auto=format&fit=crop",
    category: "Dinh dưỡng",
    slug: "che-do-dinh-duong-cho-nguoi-tap-the-thao"
  },
  {
    id: "3",
    title: "Lựa chọn giày thể thao phù hợp với từng bộ môn",
    excerpt: "Hướng dẫn chi tiết cách chọn giày thể thao phù hợp với các bộ môn như chạy bộ, đá bóng, tập gym...",
    date: "22/09/2023",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=2574&auto=format&fit=crop",
    category: "Trang phục",
    slug: "lua-chon-giay-the-thao-phu-hop-voi-tung-bo-mon"
  },
  {
    id: "4",
    title: "5 xu hướng thời trang thể thao 2023",
    excerpt: "Cập nhật những xu hướng thời trang thể thao mới nhất năm 2023 từ các thương hiệu nổi tiếng...",
    date: "15/10/2023",
    image: "https://images.unsplash.com/photo-1576992139980-ef36c90fa50a?q=80&w=2070&auto=format&fit=crop",
    category: "Thời trang",
    slug: "5-xu-huong-thoi-trang-the-thao-2023"
  },
  {
    id: "5",
    title: "Bài tập tăng cường sức mạnh cho runner",
    excerpt: "Những bài tập giúp tăng cường sức mạnh cơ bắp và độ bền cho người chạy bộ chuyên nghiệp...",
    date: "30/11/2023",
    image: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?q=80&w=2070&auto=format&fit=crop",
    category: "Fitness",
    slug: "bai-tap-tang-cuong-suc-manh-cho-runner"
  },
  {
    id: "6",
    title: "Ứng dụng công nghệ trong quần áo thể thao",
    excerpt: "Khám phá những công nghệ hiện đại được ứng dụng trong sản xuất quần áo thể thao chuyên dụng...",
    date: "08/12/2023",
    image: "https://images.unsplash.com/photo-1562413181-9013f9846bbc?q=80&w=2074&auto=format&fit=crop",
    category: "Công nghệ",
    slug: "ung-dung-cong-nghe-trong-quan-ao-the-thao"
  }
];

const BlogPostCard = ({ post }: { post: typeof blogPosts[0] }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-video overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-medium text-primary px-2 py-1 bg-primary/10 rounded-full">
            {post.category}
          </span>
          <span className="text-xs text-muted-foreground">{post.date}</span>
        </div>
        <h3 className="font-medium text-lg mb-2 line-clamp-2">{post.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
        <Link 
          to={`/blog/${post.slug}`} 
          className="text-primary font-medium text-sm inline-flex items-center hover:underline"
        >
          Đọc tiếp <ArrowRight className="ml-1 h-3 w-3" />
        </Link>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Tin tức & Bài viết"
            subtitle="Khám phá những bài viết hữu ích về thể thao, sức khỏe và thời trang"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {blogPosts.map(post => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline">
              Xem thêm bài viết
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
