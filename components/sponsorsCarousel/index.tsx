import Marquee from "react-fast-marquee";
import Image from "next/image";
import balcao from "@/public/FullWidthImage.png"
export default function SponsorsCarousel() {
  return (
    <section className="mx-auto p-5 sm:p-20 h-fit sm:pb-32 z-20 text-[#D1EF53] mt-20 flex items-center justify-center flex-col leading-0.3">
      <Marquee pauseOnHover={false} gradient={false} className="gap-12 text-8xl" speed={300}>
        The best burgue i've seen
      </Marquee>

        <Image
        src={balcao}
        alt="Bancada"
        unoptimized
        className="mt-20"
        />
    </section>
  );
}
