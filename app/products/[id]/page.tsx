'use client'

import type { Data } from "@/app/lib/types/dataType";
import Image from "next/image";
import { getProduct } from "@/app/lib/fetchData";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";
import LoadingMessage from "@/app/components/LoadingMessage";
import Link from "next/link";
export default function ProductPage() {

    const apiurl = process.env.NEXT_PUBLIC_API_URL!
    const params = useParams();
    const id = params.id

    const [product, setProduct] = useState<Data | null>(null)
    const [quantity, setQuantity] = useState(1)

    function handleQuantity(action: string) {
        if (action == 'plus') {
            setQuantity(prev => prev + 1)
        }
        else if (action == 'minus') {
            setQuantity(prev => prev - 1)
        }
    }

    const [clicked, setClicked] = useState(false)
    function handleButton() {
        setClicked(true)
    }

    function handleSetOrder() {

    }

    useEffect(() => {
        const fetchProduct = async () => {
            const result = await getProduct(`${apiurl}/${id}`);
            console.log(result?.data.data)
            setProduct(result?.data.data)
        }
        fetchProduct();
    }, [apiurl, id])

    if (!product) {
        return (
            <LoadingMessage message={"Loading product"} />
        )
    }

    return (

        <div className="my-10 flex flex-col gap-6">

            <Link href={'/products'} className="block place-self-center md:place-self-start md:ml-[10%] font-bold bg-blue-300 p-2 rounded-lg text-neutral-800">
                {"< Back to products"}
            </Link>
            < section className="flex flex-col md:flex-row md:gap-[2%] gap-[20px] h-[100%] min-h-[550px] place-self-center self-center items-center justify-center" >

                <Image src={product.image}
                    alt="Product"
                    width={500}
                    height={500}
                    className="object-contain self-center"
                />


                <div className="flex flex-col md:w-[50%] w-[90%] place-content-center gap-4 self-center">
                    <h1 className="text-lg md:text-3xl font-bold">{product.name}</h1>
                    <p className="text-neutral-500">Product id: {product.id}</p>
                    <p className="text-blue-300 text-3xl font-bold">${product.price}</p>
                    <p>Stock: {product.stock}</p>
                    <div className="flex gap-12">
                        <div className="flex place-self-center">
                            <button onClick={() => { handleQuantity('minus') }}
                                disabled={quantity <= 1}
                                className="border-1 h-12 w-8 rounded-l-lg font-bold text-xl hover:cursor-pointer ">-</button>
                            <div className="flex border-1 h-12 w-14 items-center justify-center">
                                <p className="font-semibold text-lg">{quantity}</p>
                            </div>
                            <button onClick={() => { handleQuantity('plus') }}
                                disabled={quantity >= product.stock}
                                className="border-1 h-12 w-8 rounded-r-lg font-bold text-xl hover:cursor-pointer">+</button>
                        </div>

                        <button disabled={clicked} onClick={() => { handleButton() }} className={`p-4 rounded-2xl md:text-lg text-md font-semibold text-neutral-800 hover:cursor-pointer ${clicked ? "bg-green-600" : "bg-blue-300"}`}>
                            {clicked ? "Product added" : "Add to cart"}
                        </button>
                    </div>

                    <p className="text-sm">{product.description}</p>
                </div>
            </section >
        </div>
    )
}