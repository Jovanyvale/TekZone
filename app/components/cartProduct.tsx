import Image from "next/image"
import { Cart } from "../lib/types/dataType"
import { useCart } from "../context/Context"
export default function CartProduct({ image, name, price, stock, quantity, description, category }: Cart) {

    const { cart, setCart } = useCart()

    return (
        <div className="grid md:grid-cols-[160px_1fr_110px_30px] grid-cols-[1fr_2fr] gap-4
         md:w-[70%] w-[92%] h-[200px] place-self-center justify-between bg-black/35 p-4 rounded-xl">

            <div className="w-full h-full relative flex place-self-center">
                <Image src={image} alt="Product"
                    fill
                    className="self-center object-contain h-[300px]"
                />
            </div>

            <div className="flex flex-col self-center">
                <p className="line-clamp-2">{name}</p>
                <p className="text-sm">Quantity: <span className="font-semibold">{quantity}</span></p>
                <p className="font-semibold">{(Number(price) * quantity).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                })}</p>
            </div>

            <div className="flex place-self-center">
                <button onClick={() => { handleQuantity('minus') }}
                    disabled={quantity <= 1}
                    className="border-1 h-10 w-6 rounded-l-lg font-bold text-xl hover:cursor-pointer ">-</button>
                <div className="flex border-1 h-10 w-10 items-center justify-center">
                    <p className="font-semibold text-sm">{quantity}</p>
                </div>
                <button onClick={() => { handleQuantity('plus') }}
                    disabled={quantity >= stock}
                    className="border-1 h-10 w-6 rounded-r-lg font-bold text-xl hover:cursor-pointer">+</button>
            </div>
            <div className="relative h-[25px] w-[25px] hover:cursor-pointer self-center justify-self-end">
                <Image src={"/images/cartProduct/delete.svg"}
                    alt="delete"
                    fill
                />
            </div>
        </div>
    )
}