
import React from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/section-heading";

const policyTabs = [
  {
    id: "shipping",
    label: "Vận chuyển",
    content: (
      <div className="prose prose-slate max-w-none">
        <h3>Chính sách vận chuyển</h3>
        <p>DNY Sport cam kết giao hàng nhanh chóng và đảm bảo đến tận tay khách hàng.</p>
        
        <h4>Thời gian giao hàng:</h4>
        <ul>
          <li>Nội thành Hà Nội, TP.HCM: 1-2 ngày làm việc</li>
          <li>Khu vực tỉnh thành khác: 2-5 ngày làm việc</li>
          <li>Khu vực miền núi, hải đảo: 5-7 ngày làm việc</li>
        </ul>
        
        <h4>Phí vận chuyển:</h4>
        <ul>
          <li>Miễn phí vận chuyển cho đơn hàng từ 500.000đ trở lên</li>
          <li>Đơn hàng dưới 500.000đ: 30.000đ</li>
        </ul>
        
        <p>Lưu ý: Thời gian giao hàng có thể thay đổi tùy thuộc vào điều kiện thời tiết, giao thông hoặc các yếu tố khách quan khác.</p>
      </div>
    )
  },
  {
    id: "returns",
    label: "Đổi trả",
    content: (
      <div className="prose prose-slate max-w-none">
        <h3>Chính sách đổi trả</h3>
        <p>DNY Sport cam kết mang đến sự hài lòng cho khách hàng với chính sách đổi trả linh hoạt.</p>
        
        <h4>Điều kiện đổi trả:</h4>
        <ul>
          <li>Thời gian đổi trả: trong vòng 7 ngày kể từ ngày nhận hàng</li>
          <li>Sản phẩm phải còn nguyên tem, nhãn, nguyên hộp</li>
          <li>Sản phẩm chưa qua sử dụng, giặt ủi, không bị hư hỏng, bẩn, biến dạng</li>
          <li>Có hóa đơn mua hàng hoặc mã đơn hàng</li>
        </ul>
        
        <h4>Các trường hợp được đổi trả:</h4>
        <ul>
          <li>Hàng giao không đúng mẫu mã, kích thước như đã đặt</li>
          <li>Hàng bị lỗi do nhà sản xuất</li>
          <li>Hàng không đúng như mô tả trên website</li>
        </ul>
        
        <h4>Quy trình đổi trả:</h4>
        <p>Liên hệ với bộ phận Chăm sóc Khách hàng qua số điện thoại 0987.654.321 hoặc email support@dnysport.vn để được hướng dẫn chi tiết.</p>
      </div>
    )
  },
  {
    id: "warranty",
    label: "Bảo hành",
    content: (
      <div className="prose prose-slate max-w-none">
        <h3>Chính sách bảo hành</h3>
        <p>DNY Sport áp dụng chính sách bảo hành để đảm bảo quyền lợi của khách hàng.</p>
        
        <h4>Thời gian bảo hành:</h4>
        <ul>
          <li>Giày thể thao: 3 tháng đối với lỗi keo, đế, chỉ</li>
          <li>Quần áo thể thao: 1 tháng đối với lỗi đường may, vải</li>
          <li>Phụ kiện thể thao: tùy theo từng loại sản phẩm</li>
        </ul>
        
        <h4>Điều kiện bảo hành:</h4>
        <ul>
          <li>Sản phẩm trong thời gian bảo hành</li>
          <li>Sản phẩm bị lỗi kỹ thuật từ nhà sản xuất</li>
          <li>Sản phẩm được sử dụng đúng mục đích, không bị tác động từ bên ngoài</li>
        </ul>
        
        <h4>Các trường hợp không được bảo hành:</h4>
        <ul>
          <li>Sản phẩm hết thời gian bảo hành</li>
          <li>Sản phẩm bị hư hỏng do sử dụng không đúng cách</li>
          <li>Sản phẩm bị biến dạng, cháy, rách do tác động từ bên ngoài</li>
        </ul>
      </div>
    )
  },
  {
    id: "privacy",
    label: "Bảo mật",
    content: (
      <div className="prose prose-slate max-w-none">
        <h3>Chính sách bảo mật</h3>
        <p>DNY Sport cam kết bảo vệ thông tin cá nhân của khách hàng và tuân thủ các quy định về bảo mật thông tin.</p>
        
        <h4>Thông tin thu thập:</h4>
        <ul>
          <li>Thông tin cá nhân: họ tên, địa chỉ, email, số điện thoại</li>
          <li>Thông tin giao dịch: lịch sử mua hàng, phương thức thanh toán</li>
          <li>Thông tin truy cập: cookie, địa chỉ IP, thiết bị sử dụng</li>
        </ul>
        
        <h4>Mục đích thu thập:</h4>
        <ul>
          <li>Xử lý đơn hàng và giao hàng</li>
          <li>Liên hệ và hỗ trợ khách hàng</li>
          <li>Cải thiện sản phẩm và dịch vụ</li>
          <li>Gửi thông tin khuyến mãi (khi được sự đồng ý)</li>
        </ul>
        
        <h4>Cam kết bảo mật:</h4>
        <ul>
          <li>Không chia sẻ thông tin với bên thứ ba khi chưa được sự đồng ý</li>
          <li>Áp dụng các biện pháp bảo mật để bảo vệ thông tin khách hàng</li>
          <li>Chỉ lưu trữ thông tin trong thời gian cần thiết</li>
        </ul>
      </div>
    )
  }
];

const Policy = () => {
  const { type } = useParams<{ type?: string }>();
  const defaultTab = type && policyTabs.some(tab => tab.id === type) ? type : "shipping";
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center mb-8">
            <Link 
              to="/" 
              className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Trang chủ
            </Link>
          </div>
          
          <SectionHeading 
            title="Chính sách" 
            subtitle="Thông tin về các chính sách mua hàng tại DNY Sport" 
          />
          
          <div className="bg-white rounded-lg border mt-8">
            <Tabs defaultValue={defaultTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-4">
                {policyTabs.map(tab => (
                  <TabsTrigger key={tab.id} value={tab.id}>
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {policyTabs.map(tab => (
                <TabsContent key={tab.id} value={tab.id} className="p-6">
                  {tab.content}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Policy;
