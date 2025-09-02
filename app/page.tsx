"use client";
import Link from "next/link";
import Image from "next/image";
import Product from "./components/Product";
import { getData } from "./lib/fetchData";
import { useEffect, useState } from "react";
import type { Data, ApiResponse } from "./lib/types/dataType";
import LoadingMessage from "./components/LoadingMessage";

export default function Home() {

  const [products, setProducts] = useState<Data[]>([]);
  const [productsStatus, setProductsStatus] = useState(0)

  useEffect(() => {
    const disorderData = async () => {
      const result: ApiResponse | undefined = await getData();
      if (!result) {
        throw new Error("Unaviable to load products")
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
      <div className="bg-neutral-950 py-20 flex flex-col items-center">
        <h1 className="text-lg">TRENDING PRODUCTS</h1>

        {
          productsStatus == 200
            ? <div className="grid lg:grid-cols-3 sm:grid-cols-2 place-items-center w-full lg:w-11/12 my-12">
              {products.slice(0, 9).map((product: Data) => (
                <Product
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  category={product.category}
                  image={product.image}
                  stock={product.stock}
                />))}
            </div>

            : <LoadingMessage message={"Loading products..."} />
        }

        {/* Delivery Banner */}
        <div className="relative w-[92%] md:h-[450px] h-[350px] border-2 border-neutral-300 z-30 rounded-3xl">
          <div className="absolute z-20 flex flex-col h-full justify-center ml-[5%] mr-[5%] md:mr-0 md:ml-[12%]">
            <h2 className="font-bold text-2xl md:text-4xl text-blue-300">Free delivery on <span className="text-white">$99+</span> orders</h2>
            <p className="text-md md:text-xl font-semibold mb-2">Get advantage of our quick delivery to your door!</p>
            <ul>
              <li>● Free delivery nationwide</li>
              <li>● Free delivery applies to standard shipping</li>
              <li>● Specialty items may not qualify for free shipping</li>
            </ul>
          </div>

          <div>
            <Image src={"/images/banners/deliveryBanner.png"}
              alt={"deliveryBanner"}
              fill
              className="object-right object-cover rounded-3xl"
            />
          </div>
          <div className="h-full w-full bg-black/30 z-10 absolute"></div>
        </div>
      </div>

      {/* Catalog Banner */}
      <div className="h-[570px] bg-[url('/images/background/catalogBanner.png')] bg-fixed bg-center bg-cover flex  flex-col justify-center place-items-center">
        <div className="flex flex-col items-center lg:w-[50%] w-[85%] gap-4 z-20">
          <h1 className="md:text-7xl text-5xl font-bold text-blue-300" >Catalog</h1>
          <p className="font-bold md:text-xl text-center">Check out our tech picks!
            From cool gadgets to must-have gear.</p>
          <Link href={'/products'} className="bg-neutral-800 p-4 rounded-3xl text-white font-bold hover:cursor-pointer shadow-black/70 shadow-lg">See the whole catalog</Link>
        </div>
        <div className="h-[570px] w-full bg-black/60 absolute"></div>
      </div>

      {/** Members Club Banner */}
      <div className="flex flex-col lg:w-[75%] w-[90%] items-center justify-center relative overflow-hidden mx-auto mt-12 rounded-3xl border-4 mb-12">
        <div className="relative ">
          <Image src={"/images/banners/memberClubBanner.png"}
            alt="Member club banner"
            height={750}
            width={1600}
            className="object-cover lg:h-[500px] h-[300px]"
          />
          <div className="flex flex-col absolute justify-center inset-0 mx-[10%]">
            <p className="text-xl">Join our</p>
            <h2 className="md:text-6xl text-3xl font-bold">Members <span className="text-orange-400">Club</span></h2>
            <p className="md:text-xl" >Get member-only discounts on top tech picks!</p>
          </div>
        </div>

        <div className="lg:h-[330px] sm:h-[500px] h-[900px] w-full bg-white">
          <div className="h-full flex flex-col justify-between">
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 w-[90%] self-center gap-6 mt-8">
              <div className="place-items-center max-w-[250px] place-self-center">
                <Image src="/images/banners/svg/box-svgrepo-com.svg"
                  alt="bag"
                  height={80}
                  width={80}
                  className="bg-neutral-900 border-3 border-blue-300 rounded-xl"
                />
                <h3 className="text-blue-700 font-semibold mt-2">Priority delivery</h3>
                <p className="text-neutral-700 text-center">Get your tech gear delivered quickly with reliable shipping.</p>
              </div>
              <div className="place-items-center max-w-[250px] place-self-center">
                <Image src="/images/banners/svg/chat-round-svgrepo-com.svg"
                  alt="bag"
                  height={80}
                  width={80}
                  className=" bg-neutral-900 border-3 border-blue-300 rounded-xl p-2"
                />
                <h3 className="text-blue-700 font-semibold mt-2">Customer support</h3>
                <p className="text-neutral-700 text-center">Enhanced security features for club shoppers</p>
              </div>
              <div className="place-items-center max-w-[250px] place-self-center">
                <Image src="/images/banners/svg/check-square-svgrepo-com.svg"
                  alt="bag"
                  height={80}
                  width={80}
                  className="bg-neutral-900 border-3 border-blue-300 rounded-xl p-2"
                />
                <h3 className="text-blue-700 font-semibold mt-2">Secure delivery</h3>
                <p className="text-neutral-700 text-center">Benefit from insured, fast shipping for members only</p>
              </div>
              <div className="place-items-center max-w-[250px] place-self-center">
                <Image src="/images/banners/svg/hand-money-svgrepo-com.svg"
                  alt="bag"
                  height={80}
                  width={80}
                  className="bg-neutral-900 border-3 border-blue-300 rounded-xl p-2"
                />
                <h3 className="text-blue-700 font-semibold mt-2">Exclusive discounts</h3>
                <p className="text-neutral-700 text-center">Unlock member-only pricing on top tech</p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col justify-between items-end w-[90%] self-center mb-[15px]">
              <p className="text-black mb-6 sm:mb-0 self-center">Terms and conditions apply. <span className="text-blue-300 underline hover:cursor-pointer">Learn more.</span></p>
              <button className="p-3 rounded-2xl bg-blue-400 text-white md:text-lg font-semibold">Join Members Club</button>
            </div>
          </div>
        </div>
      </div>



    </main >
  );
}