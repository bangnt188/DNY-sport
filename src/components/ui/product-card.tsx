
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  slug: string;
  isNew?: boolean;
  className?: string;
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  slug,
  isNew = false,
  className,
}: ProductCardProps) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id,
      name,
      price,
      image,
      slug
    });
  };

  const handleCardClick = () => {
    navigate(`/products/item/${slug}`);
  };

  return (
    <div 
      className={cn(
        "group relative bg-white rounded-lg overflow-hidden transition-all hover:shadow-lg cursor-pointer",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {isNew && (
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-primary text-white text-xs font-medium px-2 py-1 rounded-full">
            Mới
          </span>
        </div>
      )}
      
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={image}
          alt={name}
          className={cn(
            "w-full h-full object-cover transition-transform duration-500 ease-in-out",
            isHovered ? "scale-105" : "scale-100",
            "image-fade-in",
            imageLoaded ? "loaded" : ""
          )}
          onLoad={handleImageLoad}
        />
        
        <div className={cn(
          "absolute inset-0 flex items-end justify-center p-4 bg-gradient-to-t from-black/40 to-transparent",
          "transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )}>
          <div className="flex space-x-2 mb-2">
            <Button 
              variant="secondary" 
              size="sm" 
              className="rounded-full bg-white hover:bg-white/90 z-20"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              <span>Thêm vào giỏ</span>
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-white hover:bg-white/90 border-0 z-20"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-foreground mb-1 line-clamp-1 group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-primary">{formatPrice(price)}</span>
          {originalPrice && originalPrice > price && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
