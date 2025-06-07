"use client";
import Image from "next/image";
import Product from "./components/product";

export default function Home() {
  return (
    <div>
      <div className="h-170 md:h-180 relative overflow-hidden mb-12">
        <Image priority={true} src={'/images/pokemon.jpg'}
          alt="wallpaper"
          fill
          className=" self-center object-cover brightness-30"
        />
      </div>


      <div className="flex w-11/12 gap-6 flex-col lg:flex-row mx-auto">

        <div className="flex rounded-2xl h-82 w-full overflow-hidden relative">
          <div className="relative h-full w-full">
            <div className="flex flex-col z-10 relative w-3/5 justify-center h-full ml-5 ">
              <p className="font-bold text mb-2">BEST SELLER</p>
              <h3 className="font-bold text-blue-400 text-xl text-shadow-md text-shadow-black" >Logitech G502 Lightspeed</h3>
              <p className="font-semibold text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>
            <Image src={"/images/bestSellers/g502_image.png"}
              alt="g502"
              fill
              className="relative object-cover object-bottom-right"
            />
          </div>
        </div>

        <div className="rounded-2xl h-82 w-full overflow-hidden relative">
          <div className="relative h-full w-full">
            <div className="flex flex-col z-10 relative w-3/5 justify-center h-full ml-5">
              <p className="font-bold text mb-2">BEST SELLER</p>
              <h3 className="font-bold text-yellow-300 text-xl text-shadow-md text-shadow-black" >HyperX Origins Core</h3>
              <p className="font-semibold text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>
            <Image src={"/images/bestSellers/hyperx_origin_core_image.png"}
              alt="g502"
              fill
              className="relative object-cover object-bottom-right"
            />
          </div>
        </div>

        <div className="rounded-2xl h-82 w-full overflow-hidden relative">
          <div className="relative h-full w-full">
            <div className="flex flex-col z-10 relative w-3/5 justify-center h-full ml-5">
              <p className="font-bold text mb-2">BEST SELLER</p>
              <h3 className="font-bold text-red-600 text-xl text-shadow-md text-shadow-black">HyperX Pulsefire</h3>
              <p className=" font-semibold text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>
            <Image src={"/images/bestSellers/hyperx_pulsefire_image.png"}
              alt="g502"
              fill
              className="relative object-cover object-bottom-right "
            />
          </div>
        </div>
      </div>


      <Product />
    </div>
  );
}
