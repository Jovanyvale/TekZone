"use client";
import Image from "next/image";
import Product from "./components/Product";
import { getData } from "./lib/fetchData";
import { useEffect, useState } from "react";
import type { Data, ApiResponse } from "./lib/types/dataType";

export default function Home() {

  const [products, setProducts] = useState<Data[]>([]);
  const [productsStatus, setProductsStatus] = useState(0)
  const [fetchMessage, setFetchMessage] = useState('')

  useEffect(() => {
    const disorderData = async () => {
      const result: ApiResponse | undefined = await getData();
      if (!result) {
        setFetchMessage('Unaviable to load products.')
      } else {
        const data = result.data
        const status = result.status
        setProducts(data)
        setProductsStatus(status)
        const disorderedData = data.sort(() => { return Math.random() - 0.5 })
        setProducts(disorderedData);
      }
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

      {/* Trending Products */}
      <div className="bg-black pt-12 flex flex-col items-center">
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

        {/* Delivery Banner */}
        <div className="relative w-full md:h-[450px] h-[310px] border-y-3 border-white">
          <div className="absolute z-20 flex flex-col h-full justify-center ml-[5%] md:ml-[12%]">
            <h2 className="font-bold text-2xl md:text-4xl text-blue-300">Free delivery on <span className="text-white">$99+</span> orders</h2>
            <p className="text-md md:text-xl font-semibold mb-2">Get advantage of our quick delivery to your door!</p>
            <ul>
              <li>● Free delivery nationwide</li>
              <li>● Free delivery applies to standard shipping</li>
              <li>● Specialty items may not qualify for free shipping</li>
            </ul>
          </div>

          {/* Catalog Banner */}
          <div>
            <Image src={"/images/banners/deliveryBanner.png"}
              alt={"deliveryBanner"}
              fill
              className="object-right object-cover "
            />
          </div>
          <div className="h-full w-full bg-black/50 z-10 absolute"></div>
        </div>
      </div>

      <div className="h-[500px] bg-[url('/images/background/catalogBanner.png')] bg-fixed bg-center bg-cover flex  flex-col justify-center place-items-center">
        <div className="flex flex-col items-center w-[50%] gap-3">
          <h1 className="text-7xl font-bold text-blue-300" >Catalog</h1>
          <p className="font-bold text-xl text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, similique eius distinctio illo, minus, hic quae illum inventore iste recusandae optio rem sit aliquam magni expedita modi quas consectetur tempore</p>
          <button className="bg-white p-4 rounded-3xl text-black font-bold">See the whole catalog</button>
        </div>
      </div>



    </main>
  );
}