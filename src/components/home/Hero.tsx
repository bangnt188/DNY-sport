
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Trang phục thể thao chất lượng cao",
    subtitle: "Được thiết kế đặc biệt cho vận động viên Việt Nam",
    buttonText: "Khám phá ngay",
    buttonLink: "/products",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2574&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Bộ sưu tập mới 2024",
    subtitle: "Kết hợp công nghệ hiện đại và phong cách thời thượng",
    buttonText: "Xem bộ sưu tập",
    buttonLink: "/collections/new",
    image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Giày thể thao chính hãng",
    subtitle: "Thoải mái và bền bỉ cho mọi hoạt động",
    buttonText: "Mua ngay",
    buttonLink: "/products/shoes",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2626&auto=format&fit=crop",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              transition: "transform 6s ease-in-out",
              transform: index === currentSlide ? "scale(1.05)" : "scale(1)"
            }}
          />

          <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mb-4"
            >
              {slide.title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl max-w-2xl mb-8 text-white/90"
            >
              {slide.subtitle}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <a href={slide.buttonLink}>
                  {slide.buttonText}
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? "bg-white w-8" 
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
