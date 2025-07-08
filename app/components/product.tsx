import Image from "next/image"
import Link from "next/link"
import { Data } from "../lib/types/dataType"

export default function Product({ id, name, price, image }: Data) {
    return (
        <>
            <div className="bg-white/7 rounded-xl shadow-2xl p-6 w-11/12 sm:w-[305px] xl:w-[400px] h-[190px] sm:h-[470px] flex sm:flex-col justify-between mb-12 text-white">
                <div className="sm:min-w-[100%] w-12/12 lg:h-[300] h-full relative flex place-self-center">
                    <Image src={image}
                        alt="product"
                        fill
                        className="sm:border-b-2 border-neutral-600 self-center object-contain product h-[300px]"
                    />
                </div>
                <div className="h-[100] mt-4 flex flex-col w-full place-self-center ml-4">
                    <h2 className=" font-semibold line-clamp-2">{name}</h2>
                    <p className="pb-3">$ {price}</p>
                    <Link href={`/products/${id}`} className="bg-white rounded-2xl p-2 text-neutral-800 mt-auto text-sm sm:text-lg font-semibold text-center">View product</Link>
                </div>
            </div >
        </>
    )
}