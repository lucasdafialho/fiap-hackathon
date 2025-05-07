
import { Button } from "@/components/ui/button";

export const Promo = () => {
  return (
    <section className="bg-hp-dark-blue text-white py-12">
      <div className="hp-container">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-3/5 mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Aproveite nossos descontos exclusivos</h2>
            <p className="text-lg mb-6">Registre-se agora e receba até 10% de desconto na sua primeira compra, além de frete grátis em produtos selecionados.</p>
            <Button className="bg-white text-hp-blue hover:bg-hp-gray">
              Cadastre-se agora
            </Button>
          </div>
          <div className="md:w-2/5 flex justify-center">
            <img 
              src="https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08193583.png" 
              alt="HP Promo" 
              className="max-h-60 animate-pulse-subtle" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};
