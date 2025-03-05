import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Filter, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ProductCard from "@/components/ui/product-card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/section-heading";

// Mock product data
const allProducts = [
  {
    id: "1",
    name: "Áo thun thể thao Pro-Dry",
    price: 350000,
    originalPrice: 450000,
    image: "https://images.unsplash.com/photo-1580906853203-f82f3b60f850?q=80&w=2574&auto=format&fit=crop",
    slug: "ao-thun-the-thao-pro-dry",
    isNew: true,
    category: "shirts"
  },
  {
    id: "2",
    name: "Quần short tập gym Ultra Flex",
    price: 420000,
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=2574&auto=format&fit=crop",
    slug: "quan-short-tap-gym-ultra-flex",
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
    category: "shoes"
  },
  {
    id: "4",
    name: "Áo khoác gió nhẹ Windbreak",
    price: 750000,
    image: "https://images.unsplash.com/photo-1622097204857-b1bb712657b0?q=80&w=2670&auto=format&fit=crop",
    slug: "ao-khoac-gio-nhe-windbreak",
    category: "shirts"
  },
  {
    id: "5",
    name: "Áo ba lỗ tập gym Active",
    price: 280000,
    image: "https://images.unsplash.com/photo-1581612129334-551ccd2c6a0a?q=80&w=2670&auto=format&fit=crop",
    slug: "ao-ba-lo-tap-gym-active",
    category: "shirts"
  },
  {
    id: "6",
    name: "Quần dài thể thao Pro Warm",
    price: 550000,
    originalPrice: 650000,
    image: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=2670&auto=format&fit=crop",
    slug: "quan-dai-the-thao-pro-warm",
    category: "pants"
  },
  {
    id: "7",
    name: "Giày bóng đá sân cỏ Striker",
    price: 1150000,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=2574&auto=format&fit=crop",
    slug: "giay-bong-da-san-co-striker",
    category: "shoes"
  },
  {
    id: "8",
    name: "Túi thể thao đa năng Sport Bag",
    price: 450000,
    image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=2574&auto=format&fit=crop",
    slug: "tui-the-thao-da-nang-sport-bag",
    category: "accessories"
  }
];

// Category name mapping
const categoryNames: Record<string, string> = {
  shirts: "Áo thể thao",
  pants: "Quần thể thao",
  shoes: "Giày thể thao",
  accessories: "Phụ kiện",
  new: "Sản phẩm mới"
};

const brands = [
  { id: "nike", name: "Nike" },
  { id: "adidas", name: "Adidas" },
  { id: "puma", name: "Puma" },
  { id: "under-armour", name: "Under Armour" },
  { id: "new-balance", name: "New Balance" },
];

const sizes = [
  { id: "s", name: "S" },
  { id: "m", name: "M" },
  { id: "l", name: "L" },
  { id: "xl", name: "XL" },
  { id: "xxl", name: "XXL" },
];

const ProductsPage = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  
  const [products, setProducts] = useState(allProducts);
  const [priceRange, setPriceRange] = useState([0, 2000000]);
  const [sortOption, setSortOption] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  
  useEffect(() => {
    let filteredProducts = [...allProducts];
    
    if (category && category !== "all") {
      if (category === "new") {
        filteredProducts = filteredProducts.filter(product => product.isNew);
      } else {
        filteredProducts = filteredProducts.filter(product => product.category === category);
      }
    }
    
    filteredProducts = filteredProducts.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      filteredProducts = filteredProducts.filter(
        product => product.name.toLowerCase().includes(query)
      );
    }
    
    if (selectedBrands.length > 0) {
      const brandFilteredProducts = [...filteredProducts];
      filteredProducts = brandFilteredProducts;
    }
    
    if (selectedSizes.length > 0) {
      const sizeFilteredProducts = [...filteredProducts];
      filteredProducts = sizeFilteredProducts;
    }
    
    switch (sortOption) {
      case "price-low":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        filteredProducts.sort((a, b) => (a.isNew ? -1 : 1) - (b.isNew ? -1 : 1));
        break;
      default:
        break;
    }
    
    setProducts(filteredProducts);
  }, [category, priceRange, sortOption, searchQuery, selectedBrands, selectedSizes]);
  
  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  };

  const handleBrandChange = (brandId: string, checked: boolean) => {
    if (checked) {
      setSelectedBrands([...selectedBrands, brandId]);
    } else {
      setSelectedBrands(selectedBrands.filter(id => id !== brandId));
    }
  };

  const handleSizeChange = (sizeId: string, checked: boolean) => {
    if (checked) {
      setSelectedSizes([...selectedSizes, sizeId]);
    } else {
      setSelectedSizes(selectedSizes.filter(id => id !== sizeId));
    }
  };
  
  const categoryTitle = category ? categoryNames[category] || "Tất cả sản phẩm" : "Tất cả sản phẩm";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title={categoryTitle}
            subtitle={`Khám phá bộ sưu tập ${categoryTitle.toLowerCase()} chất lượng cao`}
            alignment="left"
            className="mb-8"
          />
          
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              className="pl-10"
              placeholder="Tìm kiếm sản phẩm..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:hidden mb-6">
              <Button 
                variant="outline" 
                className="w-full flex justify-between" 
                onClick={() => setShowFilters(!showFilters)}
              >
                <span className="flex items-center">
                  <Filter className="mr-2 h-4 w-4" />
                  Bộ lọc
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
              </Button>
              
              {showFilters && (
                <div className="mt-4 border rounded-lg p-4 bg-white">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="category">
                      <AccordionTrigger>Danh mục</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox 
                              id="shirts" 
                              checked={category === "shirts"} 
                              onCheckedChange={() => navigate("/products/shirts")} 
                            />
                            <label htmlFor="shirts" className="text-sm font-medium cursor-pointer">
                              Áo thể thao
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox 
                              id="pants" 
                              checked={category === "pants"}
                              onCheckedChange={() => navigate("/products/pants")} 
                            />
                            <label htmlFor="pants" className="text-sm font-medium cursor-pointer">
                              Quần thể thao
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox 
                              id="shoes" 
                              checked={category === "shoes"}
                              onCheckedChange={() => navigate("/products/shoes")} 
                            />
                            <label htmlFor="shoes" className="text-sm font-medium cursor-pointer">
                              Giày thể thao
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox 
                              id="accessories" 
                              checked={category === "accessories"}
                              onCheckedChange={() => navigate("/products/accessories")} 
                            />
                            <label htmlFor="accessories" className="text-sm font-medium cursor-pointer">
                              Phụ kiện
                            </label>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="price">
                      <AccordionTrigger>Khoảng giá</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4">
                          <Slider
                            value={priceRange}
                            min={0}
                            max={2000000}
                            step={50000}
                            onValueChange={setPriceRange}
                            className="[&>[data-orientation=horizontal]]:h-2 [&>[data-orientation=horizontal]]:bg-blue-100 [&>span>[data-orientation=horizontal]]:bg-blue-500"
                          />
                          <div className="flex justify-between text-sm text-foreground">
                            <span>{formatPrice(priceRange[0])}</span>
                            <span>{formatPrice(priceRange[1])}</span>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="brand">
                      <AccordionTrigger>Thương hiệu</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          {brands.map((brand) => (
                            <div key={brand.id} className="flex items-center space-x-2">
                              <Checkbox 
                                id={`brand-${brand.id}-mobile`} 
                                checked={selectedBrands.includes(brand.id)}
                                onCheckedChange={(checked) => handleBrandChange(brand.id, checked === true)}
                              />
                              <label 
                                htmlFor={`brand-${brand.id}-mobile`} 
                                className="text-sm font-medium cursor-pointer text-foreground"
                              >
                                {brand.name}
                              </label>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="size">
                      <AccordionTrigger>Kích cỡ</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          {sizes.map((size) => (
                            <div key={size.id} className="flex items-center space-x-2">
                              <Checkbox 
                                id={`size-${size.id}-mobile`} 
                                checked={selectedSizes.includes(size.id)}
                                onCheckedChange={(checked) => handleSizeChange(size.id, checked === true)}
                              />
                              <label 
                                htmlFor={`size-${size.id}-mobile`} 
                                className="text-sm font-medium cursor-pointer text-foreground"
                              >
                                {size.name}
                              </label>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              )}
            </div>
            
            <div className="flex justify-end mb-6 w-full lg:w-auto">
              <Select value={sortOption} onValueChange={setSortOption}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sắp xếp theo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Nổi bật</SelectItem>
                  <SelectItem value="newest">Mới nhất</SelectItem>
                  <SelectItem value="price-low">Giá: Thấp đến cao</SelectItem>
                  <SelectItem value="price-high">Giá: Cao đến thấp</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-24 border rounded-lg p-6 bg-white">
                <h3 className="font-semibold mb-4 text-foreground">Danh mục</h3>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="all" 
                      checked={!category || category === "all"} 
                      onCheckedChange={() => navigate("/products")} 
                    />
                    <label htmlFor="all" className="text-sm font-medium cursor-pointer">
                      Tất cả sản phẩm
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="shirts-desktop" 
                      checked={category === "shirts"} 
                      onCheckedChange={() => navigate("/products/shirts")} 
                    />
                    <label htmlFor="shirts-desktop" className="text-sm font-medium cursor-pointer">
                      Áo thể thao
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="pants-desktop" 
                      checked={category === "pants"}
                      onCheckedChange={() => navigate("/products/pants")} 
                    />
                    <label htmlFor="pants-desktop" className="text-sm font-medium cursor-pointer">
                      Quần thể thao
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="shoes-desktop" 
                      checked={category === "shoes"}
                      onCheckedChange={() => navigate("/products/shoes")} 
                    />
                    <label htmlFor="shoes-desktop" className="text-sm font-medium cursor-pointer">
                      Giày thể thao
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="accessories-desktop" 
                      checked={category === "accessories"}
                      onCheckedChange={() => navigate("/products/accessories")} 
                    />
                    <label htmlFor="accessories-desktop" className="text-sm font-medium cursor-pointer">
                      Phụ kiện
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="new-desktop" 
                      checked={category === "new"}
                      onCheckedChange={() => navigate("/products/new")} 
                    />
                    <label htmlFor="new-desktop" className="text-sm font-medium cursor-pointer">
                      Sản phẩm mới
                    </label>
                  </div>
                </div>
                
                <h3 className="font-semibold mb-4 text-foreground">Khoảng giá</h3>
                <div className="space-y-4 mb-6">
                  <Slider
                    value={priceRange}
                    min={0}
                    max={2000000}
                    step={50000}
                    onValueChange={setPriceRange}
                    className="[&>[data-orientation=horizontal]]:h-2 [&>[data-orientation=horizontal]]:bg-blue-100 [&>span>[data-orientation=horizontal]]:bg-blue-500"
                  />
                  <div className="flex justify-between text-sm text-foreground">
                    <span>{formatPrice(priceRange[0])}</span>
                    <span>{formatPrice(priceRange[1])}</span>
                  </div>
                </div>
                
                <h3 className="font-semibold mb-4 text-foreground">Thương hiệu</h3>
                <div className="space-y-2 mb-6">
                  {brands.map((brand) => (
                    <div key={brand.id} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`brand-${brand.id}`} 
                        checked={selectedBrands.includes(brand.id)}
                        onCheckedChange={(checked) => handleBrandChange(brand.id, checked === true)}
                      />
                      <label 
                        htmlFor={`brand-${brand.id}`} 
                        className="text-sm font-medium cursor-pointer text-foreground"
                      >
                        {brand.name}
                      </label>
                    </div>
                  ))}
                </div>
                
                <h3 className="font-semibold mb-4 text-foreground">Kích cỡ</h3>
                <div className="space-y-2">
                  {sizes.map((size) => (
                    <div key={size.id} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`size-${size.id}`} 
                        checked={selectedSizes.includes(size.id)}
                        onCheckedChange={(checked) => handleSizeChange(size.id, checked === true)}
                      />
                      <label 
                        htmlFor={`size-${size.id}`} 
                        className="text-sm font-medium cursor-pointer text-foreground"
                      >
                        {size.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              {products.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map(product => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      price={product.price}
                      originalPrice={product.originalPrice}
                      image={product.image}
                      slug={product.slug}
                      isNew={product.isNew}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Không tìm thấy sản phẩm</h3>
                  <p className="text-muted-foreground mb-4">Không có sản phẩm nào phù hợp với bộ lọc của bạn.</p>
                  <Button onClick={() => {
                    setPriceRange([0, 2000000]);
                    setSelectedBrands([]);
                    setSelectedSizes([]);
                    setSearchQuery("");
                    navigate("/products");
                  }}>
                    Xóa bộ lọc
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductsPage;
