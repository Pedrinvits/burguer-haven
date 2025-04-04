import { Button } from "../ui/button";

const OrderOnline = () => {
    return ( 
        <section className="mx-auto pb-24 sm:pb-32 z-20 text-[#D1EF53] mt-20 flex items-center justify-center flex-col gap-5">

            <h2 className="text-7xl text-[#E9E3DC] text-center leading-0.3">order online or <br/> come visit us today</h2>
            <Button className="p-6 bg-[#D1EF53] text-[#1E1E1E] hover:bg-[#D1EF53]">Get Started</Button>
            
        </section>
     );
}
 
export default OrderOnline;