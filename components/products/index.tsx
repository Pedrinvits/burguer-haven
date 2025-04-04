import Image from "next/image";
import product1 from "@/public/Rectangle 16.png";
import product2 from "@/public/Rectangle 17.png";

const Products = () => {
  return (
    <section className="flex sm:flex-row flex-col gap-6 justify-center items-center">
      {/* Card 1 */}
      <div className="relative">
        <Image src={product1} alt="Product 1" unoptimized />

        {/* Card dentro da imagem */}
        <div className="absolute bottom-4 left-4 bg-[#1E1E1E]  p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-[#E9E3DC] leading-0.3">salt & Vinegar <br/> french fries</h3>
          <p className="text-sm text-[#B3A0CD] leading-0.3">order online</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative">
        <Image src={product2} alt="Product 2" unoptimized />

        {/* Card dentro da imagem */}
        <div className="absolute bottom-4 left-4 bg-[#1E1E1E]  p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-[#E9E3DC] leading-0.3">crispy chicken <br/> sandwich</h3>
          <p className="text-sm text-[#B3A0CD] leading-0.3">order online</p>
        </div>
      </div>
    </section>
  );
};

export default Products;
