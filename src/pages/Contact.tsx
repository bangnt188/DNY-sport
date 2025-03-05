
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Gửi thành công!",
      description: "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Liên hệ với chúng tôi"
            subtitle="Hãy cho chúng tôi biết câu hỏi hoặc vấn đề của bạn"
            className="mb-12"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-6">Gửi tin nhắn cho chúng tôi</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Họ và tên</label>
                    <Input id="name" placeholder="Nhập họ và tên" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="example@gmail.com" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Số điện thoại</label>
                  <Input id="phone" placeholder="Nhập số điện thoại" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Tiêu đề</label>
                  <Input id="subject" placeholder="Tiêu đề tin nhắn" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Nội dung</label>
                  <Textarea 
                    id="message" 
                    placeholder="Nhập nội dung tin nhắn" 
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full">Gửi tin nhắn</Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-6">Thông tin liên hệ</h3>
                
                <div className="space-y-5">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h4 className="font-medium mb-1">Địa chỉ</h4>
                      <p className="text-muted-foreground">62 Lê Thanh Nghị, Hai Bà Trưng, Hà Nội</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h4 className="font-medium mb-1">Điện thoại</h4>
                      <p className="text-muted-foreground">0123 456 789</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <p className="text-muted-foreground">contact@dnysport.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h4 className="font-medium mb-1">Giờ làm việc</h4>
                      <p className="text-muted-foreground">Thứ 2 - Thứ 6: 8:00 - 18:00</p>
                      <p className="text-muted-foreground">Thứ 7 - Chủ nhật: 8:00 - 17:00</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-4">Bản đồ</h3>
                <div className="aspect-video bg-gray-100 rounded-md overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.730265366187!2d105.84328491531159!3d21.00346628601186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac76f7a7ff29%3A0x4562b2d7134934b1!2zNjIgTMOqIFRoYW5oIE5naOG7iywgQsOhY2ggS2hvYSwgSGFpIELDoCBUcsawbmcsIEjDoCBO4buZaSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1695459363226!5m2!1sen!2s" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
