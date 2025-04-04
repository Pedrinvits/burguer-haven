import { Input } from "../ui/input";

const Footer = () => {
    return ( 
        <footer className="p-20 w-full">
        <section className="p-10 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8  bg-[#B3A0CD] rounded-2xl">
            <div className="col-span-full xl:col-span-2 leading-0.3">
               Burger Heaven
            </div>

            <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg leading-0.3">More</h3>
            <div>
                <a
                rel="noreferrer noopener"
                href="#"
                className="opacity-60 hover:opacity-100 leading-0.3"
                >
                About
                </a>
            </div>

            <div>
                <a
                rel="noreferrer noopener"
                href="#"
                className="opacity-60 hover:opacity-100 leading-0.3"
                >
                Menu
                </a>
            </div>

            <div>
                <a
                rel="noreferrer noopener"
                href="#"
                className="opacity-60 hover:opacity-100 leading-0.3"
                >
                Location
                </a>
            </div>
            <div>
                <a
                rel="noreferrer noopener"
                href="#"
                className="opacity-60 hover:opacity-100 leading-0.3"
                >
                Privacy
                </a>
            </div>
            </div>

            <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg leading-0.3">Hours</h3>
            <div>
                <a
                rel="noreferrer noopener"
                href="#"
                className="opacity-60 hover:opacity-100 leading-0.3"
                >
                Open from 
                </a>
            </div>

            <div>
                <a
                rel="noreferrer noopener"
                href="#"
                className="opacity-60 hover:opacity-100 leading-0.3"
                >
                11 AM to 
                </a>
            </div>

            <div>
                <a
                rel="noreferrer noopener"
                href="#"
                className="opacity-60 hover:opacity-100 leading-0.3"
                >
                11 PM daily
                </a>
            </div>
            </div>

            <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg leading-0.1">Join Our Newsletter</h3>
            <div>
                <Input placeholder="Submit" className="border border-black"/>
            </div>

           
            </div>
           
            {/* <h3>
            &copy; {`${new Date().getFullYear()}`}
            </h3> */}
        </section>
        </footer>
     );
}
 
export default Footer;