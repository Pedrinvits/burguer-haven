import Image from "next/image";
import Burge from "@/public/Burge.png";
import VectorRoxo from "@/public/Vector-roxo.png";
import VectorRVerde from "@/public/Vector-verde.png";

const Hero = () => {
  return (
    <>
      <h1 className="font-bold text-center text-4xl md:text-7xl text-[#E9E3DC] mt-10 leading-tight px-4  overflow-x-hidden">
        NEW YORK&apos;S FAVORITE HAMBURGER JOINT
      </h1>

      <div className="relative mt-8 flex flex-col items-center justify-center">
        {/* Vetor Esquerda (desktop) */}
        <Image
          src={VectorRVerde}
          alt="Vector Left"
          width={150}
          height={150}
          className="hidden md:block absolute left-10 z-20 opacity-80 top-[170px]"
        />

        {/* Hambúrgueres Sobrepostos */}
        <div className="relative flex justify-center items-end">
          <Image
            src={Burge}
            alt="Hamburgers"
            width={120}
            height={120}
            unoptimized
            className="z-0 opacity-90 relative left-8 md:left-[100px] md:w-[300px] md:h-[300px]"
          />
          <Image
            src={Burge}
            alt="Hamburgers"
            width={160}
            height={160}
            unoptimized
            className="z-10 md:w-[400px] md:h-[400px]"
          />
          <Image
            src={Burge}
            alt="Hamburgers"
            width={120}
            height={120}
            unoptimized
            className="z-0 opacity-90 relative -left-8 md:left-[-130px] md:w-[300px] md:h-[300px]"
          />
        </div>

        {/* Vetores embaixo no mobile */}
        <div className="flex md:hidden justify-between w-full px-10 mt-4">
          <Image
            src={VectorRVerde}
            alt="Vector Bottom Left"
            width={100}
            height={100}
            unoptimized
            className="opacity-70"
          />
          <Image
            src={VectorRoxo}
            alt="Vector Bottom Right"
            width={100}
            height={100}
            unoptimized
            className="opacity-70"
          />
        </div>

        {/* Vetor Direita (desktop) */}
        <Image
          src={VectorRoxo}
          alt="Vector Right"
          width={150}
          height={150}
          unoptimized
          className="hidden md:block absolute right-10 z-20 opacity-80 top-[170px]"
        />
      </div>
    </>
  );
};

export default Hero;
