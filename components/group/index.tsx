import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";

const Group = () => {
    return ( 
        <section className="my-10 p-5 sm:p-20 flex items-center justify-center mt-30 font-bowlby-one">
            <Card className="bg-[#D1EF53] border-none w-full p-10">
            {/* <CardHeader className="leading-0.3 text-5xl">the burger above all burgers</CardHeader> */}
            <CardContent className="flex sm:flex-row flex-col ">
                <h2 className="leading-0.3 text-5xl mb-4">the burger above all burgers</h2>
                <div className="flex flex-col gap-6 w-fit">
                    <p className="text-md sm:text-2xl leading-0.3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec ornare neque.</p>
                    <Button className="bg-[#E9E3DC] text-bold border-2 border-[#1E1E1E] shadow-2xl hover:bg-[#E9E3DC] w-full sm:w-30 self-center leading-0.3">About Us</Button>
                </div>
            </CardContent>
        </Card>
        </section>
     );
}
 
export default Group;