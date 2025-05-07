
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductCategories } from "@/components/ProductCategories";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { Promo } from "@/components/Promo";
import { Footer } from "@/components/Footer";
import { ChatBot } from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProductCategories />
        <FeaturedProducts />
        <Promo />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
