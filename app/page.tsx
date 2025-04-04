import { Navbar } from "@/components/nav";
import Image from "next/image";
import Burge from "@/public/Burge.png";
import VectorRoxo from "@/public/Vector-roxo.png";
import VectorRVerde from "@/public/Vector-verde.png";
import Group from "@/components/group";
import Products from "@/components/products";
import SponsorsCarousel from "@/components/sponsorsCarousel";
import OrderOnline from "@/components/orderOnline";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <h1 className="font-bold text-center text-7xl text-[#E9E3DC] mt-10 leading-0.3">
        NEW YORK'S FAVORITE HAMBURGER JOINT
      </h1>

      <div className="relative mt-8 flex justify-center items-end top-[-60px]">
        <Image
          src={VectorRVerde}
          alt="Vector Left"
          width={250}
          height={300}
          className="absolute left-10 z-20 opacity-80 top-[170px]"
        />

        <div className="relative flex justify-center items-end space-x-[-50px]">
          <Image
            src={Burge}
            alt="Hamburgers"
            width={300}
            height={300}
            className="z-0 opacity-90 left-[100px] relative"
          />
          <Image
            src={Burge}
            alt="Hamburgers"
            width={400}
            height={400}
            className="z-10"
          />
          <Image
            src={Burge}
            alt="Hamburgers"
            width={300}
            height={300}
            className="z-0 opacity-90 left-[-130px] relative"
          />
        </div>

        <Image
          src={VectorRoxo}
          alt="Vector Right"
          width={250}
          height={300}
          className="absolute right-10 z-20 opacity-80 top-[170px]"
        />
      </div>
      <Group/>
      <Products/>
      <SponsorsCarousel/>
      <OrderOnline/>
      <Footer/>
    </main>
  );
}
