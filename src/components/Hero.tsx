
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="bg-hp-blue text-white">
      <div className="hp-container py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Descubra o poder da inovação HP
            </h1>
            <p className="md:text-lg">
              Laptops com design premium e desempenho excepcional para você fazer mais.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-hp-blue hover:bg-hp-gray">
                Saiba mais
              </Button>
              <Button className="bg-transparent border hover:bg-hp-dark-blue">
                Ver ofertas
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08499677.png" 
              alt="HP Laptop" 
              className="w-full max-w-lg mx-auto animate-bounce-in object-contain"
              loading="eager"
              onError={(e) => {
                e.currentTarget.src = "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08143001.png";
                e.currentTarget.onerror = null;
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
