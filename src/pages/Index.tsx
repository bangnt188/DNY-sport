
import React, { useEffect } from "react";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CompanyIntroduction from "@/components/home/CompanyIntroduction";
import CategoryDisplay from "@/components/home/CategoryDisplay";
import Testimonials from "@/components/home/Testimonials";
import PromoBanner from "@/components/home/PromoBanner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Index = () => {
  // Smooth scroll to top on page load
  useEffect(() => {
    window.scrollTo({
      top:.0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <CategoryDisplay />
        <CompanyIntroduction />
        <PromoBanner />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
