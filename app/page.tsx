import { Navbar } from "@/components/nav";
import Group from "@/components/group";
import Products from "@/components/products";
import SponsorsCarousel from "@/components/sponsorsCarousel";
import OrderOnline from "@/components/orderOnline";
import Footer from "@/components/footer";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero/>
      <Group/>
      <Products/>
      <SponsorsCarousel/>
      <OrderOnline/>
      <Footer/>
    </main>
  );
}
