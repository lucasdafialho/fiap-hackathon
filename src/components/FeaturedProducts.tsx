
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const FeaturedProducts = () => {
  const products = [
    {
      name: "HP Pavilion 15",
      description: "Notebook com Windows 11, Intel Core i7, 16GB RAM, 512GB SSD",
      price: "R$ 4.299,00",
      originalPrice: "R$ 4.899,00",
      image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08499677.png",
      badge: "Oferta",
      isNew: true
    },
    {
      name: "HP Envy x360",
      description: "Notebook conversível com Windows 11, AMD Ryzen 7, 16GB RAM, 1TB SSD",
      price: "R$ 5.699,00",
      originalPrice: "R$ 6.199,00",
      image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08497786.png",
      badge: "Bestseller",
      isNew: false
    },
    {
      name: "HP OfficeJet Pro 9010e",
      description: "Impressora multifuncional, Wi-Fi, frente e verso automático",
      price: "R$ 999,00",
      originalPrice: "R$ 1.199,00",
      image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06612696.png",
      badge: "Oferta",
      isNew: false
    },
    {
      name: "HP Monitor 27f",
      description: "Monitor Full HD IPS de 27 polegadas, bordas ultrafinas",
      price: "R$ 1.399,00",
      originalPrice: "R$ 1.599,00",
      image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08002787.png",
      badge: null,
      isNew: true
    }
  ];

  return (
    <section className="py-12">
      <div className="hp-container">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Produtos em Destaque</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="product-card bg-white"
            >
              <div className="relative p-4">
                {product.badge && (
                  <Badge className="absolute top-4 right-4 bg-hp-blue hover:bg-hp-blue">
                    {product.badge}
                  </Badge>
                )}
                {product.isNew && (
                  <Badge variant="outline" className="absolute top-4 left-4 border-hp-blue text-hp-blue">
                    Novo
                  </Badge>
                )}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="mx-auto h-48 object-contain mb-4 hover:scale-105 transition-transform duration-300" 
                />
                <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3 h-12 overflow-hidden">{product.description}</p>
                <div className="flex items-center mb-3">
                  <span className="font-bold text-lg">{product.price}</span>
                  {product.originalPrice && (
                    <span className="ml-2 text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  )}
                </div>
                <Button className="w-full hp-button">Adicionar ao carrinho</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
