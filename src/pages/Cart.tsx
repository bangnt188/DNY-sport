
import React from "react";
import { useNavigate } from "react-router-dom";
import { Trash2, ChevronLeft, Plus, Minus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/CartContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/section-heading";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading 
              title="Giỏ hàng" 
              subtitle="Giỏ hàng của bạn hiện đang trống." 
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
              onClick={() => navigate(-1)} 
              className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Quay lại
            </button>
          </div>
          
          <SectionHeading 
            title="Giỏ hàng" 
            subtitle={`Bạn có ${cartItems.length} sản phẩm trong giỏ hàng`} 
            alignment="left"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              {cartItems.map((item) => (
                <div key={item.id} className="flex border-b py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  
                  <div className="ml-4 flex flex-1 flex-col">
                    <div className="flex justify-between text-base font-medium">
                      <h3>
                        <a 
                          href={`/products/item/${item.slug}`} 
                          className="hover:text-primary transition-colors"
                        >
                          {item.name}
                        </a>
                      </h3>
                      <p className="ml-4">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                    
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <p className="text-gray-500">Số lượng:</p>
                        <div className="flex items-center border rounded-md">
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className="h-8 w-8 rounded-none"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8 rounded-none"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                        className="text-primary hover:text-primary/80"
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Xóa
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="flex justify-between py-4">
                <Button 
                  variant="outline" 
                  onClick={() => navigate("/products")}
                >
                  Tiếp tục mua sắm
                </Button>
                <Button 
                  variant="outline" 
                  onClick={clearCart} 
                  className="text-destructive hover:text-destructive"
                >
                  Xóa tất cả
                </Button>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="rounded-lg border p-6 bg-white">
                <h2 className="text-lg font-semibold mb-4">Tóm tắt đơn hàng</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tạm tính</span>
                    <span>{formatPrice(cartTotal)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Phí vận chuyển</span>
                    <span>{formatPrice(30000)}</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between font-semibold">
                    <span>Tổng cộng</span>
                    <span>{formatPrice(cartTotal + 30000)}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full mt-6" 
                  onClick={handleCheckout}
                >
                  Thanh toán
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                
                <p className="text-xs text-muted-foreground text-center mt-4">
                  Đơn hàng của bạn đủ điều kiện giao hàng miễn phí với đơn hàng trên 500.000đ
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
