"use client";
import Image from "next/image";
import Product from "./components/Product";
import { getData } from "./lib/fetchData";
import { useEffect, useState } from "react";
import type { Data } from "./lib/types/dataType";

export default function Home() {

  const [products, setProducts] = useState<Data[]>([]);

  useEffect(() => {
    const disorderData = async () => {
      const data: Data[] = await getData();
      const disorderedData = data.sort(() => { return Math.random() - 0.5 })
      setProducts(disorderedData);
    }
    disorderData();
  }, []);

  return (
    <main>
      <div className="h-170 md:h-180 relative overflow-hidden mb-12">
        <Image priority={true} src={'/images/pokemon.jpg'}
          alt="wallpaper"
          fill
          className=" self-center object-cover brightness-30"
        />
      </div>


      <div className="flex w-11/12 gap-6 flex-col lg:flex-row mx-auto mb-12">

        <div className="flex rounded-2xl h-82 w-full overflow-hidden relative">
          <div className="relative h-full w-full">
            <div className="flex flex-col z-10 relative w-3/5 justify-center h-full ml-5 ">
              <p className="font-bold text mb-2">BEST SELLER</p>
              <h3 className="font-bold text-blue-400 text-xl text-shadow-md text-shadow-black" >Logitech G502 Lightspeed</h3>
              <p className="font-semibold text-white">Excellent mouse for gaming and work, with fast wireless performance and customizable features.</p>
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
              <p className="font-semibold text-white">Compact mechanical keyboard ideal for fast-paced gaming and minimalist setups.</p>
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
              <p className=" font-semibold text-white">Lightweight gaming mouse built for speed, precision, and wireless flexibility.</p>
            </div>
            <Image src={"/images/bestSellers/hyperx_pulsefire_image.png"}
              alt="g502"
              fill
              className="relative object-cover object-bottom-right"
            />
          </div>
        </div>
      </div>

      <div className="bg-black py-16 flex flex-col items-center">
        <h1>TRENDING PRODUCTS</h1>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 place-items-center w-full lg:w-11/12 my-12">
          {products.slice(0, 6).map((product: Data) => (
            <Product
              key={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
              category={product.category}
              image={product.image}
              stock={product.stock}
            />
          ))}
        </div>

      </div>


    </main>
  );
}