
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, Minus, Plus, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCart } from "@/contexts/CartContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/section-heading";
import { toast } from "sonner";

// Mock product data - in a real app, this would come from an API
const products = [
  {
    id: "1",
    name: "Áo thun thể thao Pro-Dry",
    price: 350000,
    originalPrice: 450000,
    image: "https://images.unsplash.com/photo-1580906853203-f82f3b60f850?q=80&w=2574&auto=format&fit=crop",
    slug: "ao-thun-the-thao-pro-dry",
    isNew: true,
    description: "Áo thun thể thao Pro-Dry được thiết kế với chất liệu cao cấp, thấm hút mồ hôi tốt, mang lại cảm giác khô ráo và thoải mái trong suốt quá trình tập luyện. Phù hợp cho các hoạt động thể thao như chạy bộ, gym, đạp xe.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Trắng", "Đen", "Xanh navy", "Xám"],
    material: "88% Polyester, 12% Spandex",
    features: ["Thấm hút mồ hôi", "Chống tia UV", "Khô nhanh", "Co giãn 4 chiều"],
    category: "shirts"
  },
  {
    id: "2",
    name: "Quần short tập gym Ultra Flex",
    price: 420000,
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=2574&auto=format&fit=crop",
    slug: "quan-short-tap-gym-ultra-flex",
    description: "Quần short tập gym Ultra Flex với thiết kế khỏe khoắn, thoáng khí giúp bạn thoải mái vận động. Chất liệu co giãn cao cấp không gây cản trở trong quá trình tập luyện.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Đen", "Xám", "Xanh dương"],
    material: "90% Polyester, 10% Spandex",
    features: ["Co giãn 4 chiều", "Túi khóa kéo", "Lưng thun co giãn", "Thoáng khí"],
    category: "pants"
  },
  {
    id: "3",
    name: "Giày chạy bộ Dynamic Run",
    price: 1250000,
    originalPrice: 1500000,
    image: "https://images.unsplash.com/photo-1584539236339-f44eb176e4c1?q=80&w=2670&auto=format&fit=crop",
    slug: "giay-chay-bo-dynamic-run",
    isNew: true,
    description: "Giày chạy bộ Dynamic Run với công nghệ đệm tiên tiến, giúp hấp thụ lực tác động và bảo vệ khớp gối. Thiết kế nhẹ và thoáng khí phù hợp cho cả chạy đường dài và tập luyện thường ngày.",
    sizes: ["39", "40", "41", "42", "43", "44"],
    colors: ["Đen-Trắng", "Xanh-Đen", "Đỏ-Đen"],
    material: "Phần trên: Lưới thoáng khí, Đế: Cao su đàn hồi",
    features: ["Đệm khí", "Trọng lượng nhẹ", "Đế chống trượt", "Hỗ trợ cổ chân"],
    category: "shoes"
  },
  {
    id: "4",
    name: "Áo khoác gió nhẹ Windbreak",
    price: 750000,
    image: "https://images.unsplash.com/photo-1622097204857-b1bb712657b0?q=80&w=2670&auto=format&fit=crop",
    slug: "ao-khoac-gio-nhe-windbreak",
    description: "Áo khoác gió nhẹ Windbreak với thiết kế hiện đại, gọn nhẹ và dễ dàng gấp gọn. Chất liệu chống nước, cản gió tốt giúp bạn luôn ấm áp và khô ráo trong mọi điều kiện thời tiết.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Đen", "Xanh navy", "Cam"],
    material: "100% Polyester chống nước",
    features: ["Chống nước", "Cản gió", "Mũ trùm có thể tháo rời", "Túi có khóa kéo"],
    category: "shirts"
  },
];

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  // Find the product based on the slug
  const product = products.find(p => p.slug === slug);
  
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Sản phẩm không tồn tại</h1>
          <Button onClick={() => navigate("/")}>Quay lại trang chủ</Button>
        </div>
      </div>
    );
  }

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Vui lòng chọn kích thước");
      return;
    }
    
    if (!selectedColor) {
      toast.error("Vui lòng chọn màu sắc");
      return;
    }
    
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      slug: product.slug
    });
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center text-sm text-muted-foreground">
            <button 
              onClick={() => navigate(-1)} 
              className="flex items-center hover:text-foreground transition-colors"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Quay lại
            </button>
            <span className="mx-2">/</span>
            <span className="hover:text-foreground transition-colors cursor-pointer" onClick={() => navigate(`/products/${product.category}`)}>
              {product.category === "shirts" ? "Áo thể thao" : 
               product.category === "pants" ? "Quần thể thao" : 
               product.category === "shoes" ? "Giày thể thao" : "Phụ kiện"}
            </span>
            <span className="mx-2">/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
            {/* Product Image */}
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Product Info */}
            <div className="flex flex-col">
              {product.isNew && (
                <span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">
                  Mới
                </span>
              )}
              
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-2xl font-semibold">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
              
              <p className="text-muted-foreground mb-8">
                {product.description}
              </p>
              
              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="text-md font-semibold mb-3">Kích thước:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <Button
                      key={size}
                      type="button"
                      variant={selectedSize === size ? "default" : "outline"}
                      className="min-w-[50px]"
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* Color Selection */}
              <div className="mb-8">
                <h3 className="text-md font-semibold mb-3">Màu sắc:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map(color => (
                    <Button
                      key={color}
                      type="button"
                      variant={selectedColor === color ? "default" : "outline"}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* Quantity and Add to Cart */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center border rounded-md">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={decrementQuantity}
                    className="rounded-none"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-10 text-center">{quantity}</span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={incrementQuantity}
                    className="rounded-none"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                
                <Button className="flex-1" onClick={handleAddToCart}>
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Thêm vào giỏ hàng
                </Button>
                
                <Button variant="outline" size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Product Details */}
              <Tabs defaultValue="description" className="mt-auto">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="description">Mô tả</TabsTrigger>
                  <TabsTrigger value="features">Tính năng</TabsTrigger>
                  <TabsTrigger value="material">Chất liệu</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="pt-4">
                  <p className="text-muted-foreground">{product.description}</p>
                </TabsContent>
                <TabsContent value="features" className="pt-4">
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="material" className="pt-4">
                  <p className="text-muted-foreground">{product.material}</p>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          {/* Related Products */}
          <SectionHeading
            title="Sản phẩm liên quan"
            alignment="left"
            className="mb-8"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter(p => p.id !== product.id && p.category === product.category)
              .slice(0, 4)
              .map(relatedProduct => (
                <div 
                  key={relatedProduct.id} 
                  className="group relative bg-white rounded-lg overflow-hidden transition-all hover-lift"
                  onClick={() => navigate(`/products/${relatedProduct.slug}`)}
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-medium mb-1 line-clamp-1 group-hover:text-primary transition-colors">
                      {relatedProduct.name}
                    </h3>
                    
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-foreground">{formatPrice(relatedProduct.price)}</span>
                      {relatedProduct.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {formatPrice(relatedProduct.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
