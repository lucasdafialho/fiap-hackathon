
import { Button } from "@/components/ui/button";

export const ProductCategories = () => {
  const categories = [
    {
      title: "Laptops",
      description: "Desempenho superior para todas as suas necessidades",
      image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08499677.png",
      link: "#"
    },
    {
      title: "Desktops",
      description: "Poder e versatilidade para seu espaço de trabalho",
      image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08595863.png",
      link: "#"
    },
    {
      title: "Impressoras",
      description: "Qualidade profissional para documentos e fotos",
      image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06612696.png",
      link: "#"
    },
    {
      title: "Monitores",
      description: "Visualização perfeita para qualquer atividade",
      image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08002787.png",
      link: "#"
    }
  ];

  return (
    <section className="py-12 bg-hp-gray">
      <div className="hp-container">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Nossas Categorias</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex-1">
                  <img src={category.image} alt={category.title} className="mx-auto h-40 object-contain mb-4" />
                  <h3 className="font-bold text-xl mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                </div>
                <Button variant="outline" className="w-full">
                  Ver produtos
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
