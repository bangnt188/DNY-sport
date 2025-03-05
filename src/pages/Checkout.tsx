
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  CreditCard, 
  Truck, 
  ChevronLeft, 
  ArrowRight, 
  ShieldCheck,
  Check,
  Home
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/section-heading";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, cartTotal, clearCart } = useCart();
  const { toast } = useToast();
  
  const [paymentMethod, setPaymentMethod] = useState<string>("cod");
  const [orderSuccess, setOrderSuccess] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    note: ""
  });
  
  const [formErrors, setFormErrors] = useState({
    fullName: false,
    email: false,
    phone: false,
    address: false,
    city: false
  });

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when typing
    if (name in formErrors) {
      setFormErrors(prev => ({
        ...prev,
        [name]: false
      }));
    }
  };

  const validateForm = () => {
    const errors = {
      fullName: !formData.fullName,
      email: !formData.email || !/\S+@\S+\.\S+/.test(formData.email),
      phone: !formData.phone || !/^[0-9]{10}$/.test(formData.phone),
      address: !formData.address,
      city: !formData.city
    };
    
    setFormErrors(errors);
    return !Object.values(errors).some(error => error);
  };

  const handleSubmitOrder = () => {
    if (!validateForm()) {
      toast({
        title: "Lỗi",
        description: "Vui lòng điền đầy đủ thông tin giao hàng",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, this would submit the order to an API
    toast({
      title: "Đặt hàng thành công",
      description: "Cảm ơn bạn đã mua sắm tại DNY Sport",
    });
    
    // Show success screen instead of immediately redirecting
    setOrderSuccess(true);
  };
  
  const handleReturnHome = () => {
    // Clear cart and redirect to home page
    clearCart();
    navigate("/");
  };
  
  if (orderSuccess) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto bg-white rounded-lg border p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              
              <h1 className="text-2xl font-bold mb-4">Đặt hàng và thanh toán</h1>
              
              <div className="bg-green-50 text-green-700 rounded-lg p-4 mb-6">
                <p className="text-lg">Gửi đơn hàng thành công. Chúng tôi sẽ liên lạc với bạn trong thời gian sớm nhất.</p>
              </div>
              
              <div className="flex flex-col items-center justify-center space-y-4">
                <Button 
                  onClick={handleReturnHome}
                  className="flex items-center"
                  size="lg"
                >
                  <Home className="mr-2 h-4 w-4" />
                  Trở về trang chủ
                </Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading 
              title="Thanh toán" 
              subtitle="Giỏ hàng của bạn đang trống." 
            />
            
            <div className="text-center mt-10">
              <Button onClick={() => navigate("/products")} className="mt-4">
                Tiếp tục mua sắm
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center mb-8">
            <button 
              onClick={() => navigate('/cart')} 
              className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Quay lại giỏ hàng
            </button>
          </div>
          
          <SectionHeading 
            title="Thanh toán" 
            subtitle="Vui lòng điền thông tin giao hàng" 
            alignment="left"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            {/* Shipping and Payment Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Shipping Information */}
              <div className="bg-white rounded-lg border p-6">
                <h3 className="text-lg font-medium mb-4">Thông tin giao hàng</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className={formErrors.fullName ? "text-destructive" : ""}>
                      Họ và tên *
                    </Label>
                    <Input 
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={formErrors.fullName ? "border-destructive" : ""}
                    />
                    {formErrors.fullName && (
                      <p className="text-xs text-destructive">Vui lòng nhập họ tên</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className={formErrors.email ? "text-destructive" : ""}>
                      Email *
                    </Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={formErrors.email ? "border-destructive" : ""}
                    />
                    {formErrors.email && (
                      <p className="text-xs text-destructive">Vui lòng nhập email hợp lệ</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className={formErrors.phone ? "text-destructive" : ""}>
                      Số điện thoại *
                    </Label>
                    <Input 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={formErrors.phone ? "border-destructive" : ""}
                    />
                    {formErrors.phone && (
                      <p className="text-xs text-destructive">Vui lòng nhập số điện thoại hợp lệ (10 số)</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="city" className={formErrors.city ? "text-destructive" : ""}>
                      Tỉnh/Thành phố *
                    </Label>
                    <Input 
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className={formErrors.city ? "border-destructive" : ""}
                    />
                    {formErrors.city && (
                      <p className="text-xs text-destructive">Vui lòng nhập tỉnh/thành phố</p>
                    )}
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="address" className={formErrors.address ? "text-destructive" : ""}>
                      Địa chỉ *
                    </Label>
                    <Input 
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className={formErrors.address ? "border-destructive" : ""}
                    />
                    {formErrors.address && (
                      <p className="text-xs text-destructive">Vui lòng nhập địa chỉ</p>
                    )}
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="note">
                      Ghi chú đơn hàng (tùy chọn)
                    </Label>
                    <Textarea 
                      id="note"
                      name="note"
                      rows={3}
                      value={formData.note}
                      onChange={handleInputChange}
                      placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay địa điểm giao hàng chi tiết hơn."
                    />
                  </div>
                </div>
              </div>
              
              {/* Payment Methods */}
              <div className="bg-white rounded-lg border p-6">
                <h3 className="text-lg font-medium mb-4">Phương thức thanh toán</h3>
                
                <RadioGroup 
                  value={paymentMethod} 
                  onValueChange={setPaymentMethod}
                  className="space-y-4"
                >
                  <div className="flex items-center space-x-2 rounded-lg border p-4">
                    <RadioGroupItem value="cod" id="cod" />
                    <Label htmlFor="cod" className="flex items-center cursor-pointer">
                      <CreditCard className="h-5 w-5 mr-2 text-muted-foreground" />
                      <span>Thanh toán khi nhận hàng (COD)</span>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 rounded-lg border p-4">
                    <RadioGroupItem value="bank" id="bank" />
                    <Label htmlFor="bank" className="flex items-center cursor-pointer">
                      <CreditCard className="h-5 w-5 mr-2 text-muted-foreground" />
                      <span>Chuyển khoản ngân hàng</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg border p-6 sticky top-24">
                <h3 className="text-lg font-medium mb-4">Tóm tắt đơn hàng</h3>
                
                <div className="space-y-4 mb-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <div className="flex items-start">
                        <span className="font-medium">{item.quantity} x</span>
                        <span className="ml-2 text-muted-foreground line-clamp-1">{item.name}</span>
                      </div>
                      <span>{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>
                
                <Separator className="my-4" />
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tạm tính</span>
                    <span>{formatPrice(cartTotal)}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Phí vận chuyển</span>
                    <span>{formatPrice(30000)}</span>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="flex justify-between font-medium">
                  <span>Tổng cộng</span>
                  <span className="text-lg">{formatPrice(cartTotal + 30000)}</span>
                </div>
                
                <Button 
                  className="w-full mt-6" 
                  onClick={handleSubmitOrder}
                >
                  Đặt hàng
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                
                <div className="mt-6 space-y-2">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Truck className="h-3 w-3 mr-2" />
                    <span>Miễn phí vận chuyển cho đơn hàng từ 500.000đ</span>
                  </div>
                  
                  <div className="flex items-center text-xs text-muted-foreground">
                    <ShieldCheck className="h-3 w-3 mr-2" />
                    <span>Bảo mật thanh toán</span>
                  </div>
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

export default Checkout;
