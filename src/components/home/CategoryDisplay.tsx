
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface Category {
  id: string;
  name: string;
  image: string;
  slug: string;
}
// fake data
const categories: Category[] = [
  {
    id: "1",
    name: "Áo thể thao",
    image: "https://images.unsplash.com/photo-1596122787821-33af5ea1d6a0?q=80&w=2574&auto=format&fit=crop",
    slug: "shirts",
  },
  {
    id: "2",
    name: "Quần thể thao",
    image: "https://images.unsplash.com/photo-1607171028142-b8f0a881d32b?q=80&w=2670&auto=format&fit=crop",
    slug: "pants",
  },
  {
    id: "3",
    name: "Giày thể thao",
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2671&auto=format&fit=crop",
    slug: "shoes",
  },
  {
    id: "4",
    name: "Phụ kiện",
    image: "https://images.unsplash.com/photo-1529336953128-a85760f58cb5?q=80&w=2670&auto=format&fit=crop",
    slug: "accessories",
  },
];

const CategoryDisplay = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/products/${category.slug}`}
                className="group relative block h-80 w-full overflow-hidden rounded-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 z-10" />
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">{category.name}</h3>
                    <span className="bg-white/20 rounded-full p-2 backdrop-blur-sm transform transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight className="h-5 w-5 text-white" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryDisplay;
