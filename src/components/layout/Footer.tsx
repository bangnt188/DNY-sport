
import React from "react";
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Twitter,
  Linkedin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
    
    if (emailInput && emailInput.value) {
      toast({
        title: "Đăng ký thành công!",
        description: "Cảm ơn bạn đã đăng ký nhận bản tin từ DNY Sport.",
      });
      emailInput.value = '';
    }
  };

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4 text-foreground">Về DNY Sport</h3>
            <p className="text-muted-foreground">
              DNY Sport được thành lập từ năm 2007, là thương hiệu thời trang thể thao hàng đầu tại Việt Nam, cam kết mang đến những sản phẩm chất lượng cao và dịch vụ tận tâm cho người yêu thể thao.
            </p>
            <div className="flex space-x-3 pt-2">
              <Button variant="outline" size="icon" className="rounded-full h-9 w-9">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full h-9 w-9">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full h-9 w-9">
                <Youtube className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full h-9 w-9">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full h-9 w-9">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Thông tin</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Tin tức
                </Link>
              </li>
              <li>
                <Link to="/policy/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link to="/policy/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Điều khoản dịch vụ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Sản phẩm</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products/shirts" className="text-muted-foreground hover:text-primary transition-colors">
                  Áo thể thao
                </Link>
              </li>
              <li>
                <Link to="/products/pants" className="text-muted-foreground hover:text-primary transition-colors">
                  Quần thể thao
                </Link>
              </li>
              <li>
                <Link to="/products/shoes" className="text-muted-foreground hover:text-primary transition-colors">
                  Giày thể thao
                </Link>
              </li>
              <li>
                <Link to="/products/accessories" className="text-muted-foreground hover:text-primary transition-colors">
                  Phụ kiện
                </Link>
              </li>
              <li>
                <Link to="/products/new" className="text-muted-foreground hover:text-primary transition-colors">
                  Sản phẩm mới
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <span className="text-muted-foreground">62 Lê Thanh Nghị, Hai Bà Trưng, Hà Nội</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <span className="text-muted-foreground">0123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <span className="text-muted-foreground">contact@dnysport.com</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2 text-foreground">Đăng ký nhận tin</h4>
              <form onSubmit={handleSubscribe} className="flex">
                <Input 
                  type="email" 
                  name="email"
                  placeholder="Email của bạn" 
                  className="rounded-r-none" 
                  required
                />
                <Button type="submit" className="rounded-l-none">
                  Đăng ký
                </Button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="text-center text-muted-foreground text-sm">
            <p>© {new Date().getFullYear()} DNY Sport. Tất cả các quyền được bảo lưu.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
