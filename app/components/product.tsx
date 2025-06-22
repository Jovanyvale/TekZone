import Image from "next/image"
import { ProductType } from "../lib/types/dataType"

export default function Product({ name, price, image }: ProductType) {
    return (
        <>
            <div className="bg-white/7 rounded-xl shadow-2xl p-6 w-11/12 sm:w-[305px] xl:w-[400px] h-[210px] sm:h-[470px] flex sm:flex-col justify-between mb-12 text-white">
                <div className="sm:min-w-[100%] w-12/12 lg:h-[300] h-full relative flex self-center-safe">
                    <Image src={image}
                        alt="product"
                        fill
                        className="sm:border-b-2 border-neutral-600 self-center object-contain product h-[300px]"
                    />
                </div>
                <div className="h-[100] mt-4 flex flex-col w-full ">
                    <h2 className=" font-semibold line-clamp-2">{name}</h2>
                    <p className="pb-3">$ {price}</p>
                    <button className="bg-white rounded-2xl p-2 text-neutral-800 mt-auto">View product</button>
                </div>
            </div >
        </>
    )
}