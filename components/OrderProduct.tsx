import Image from "next/image"

type OrderProductsProps = {
    name: string,
    image: string,
    quantity: number,
    price: string
}
export default function OrderProduct({ name, image, quantity, price }: OrderProductsProps) {

    return (
        <div className="flex h-[110px] w-full bg-neutral-200 rounded-lg text-sm items-center p-4 mb-2">
            <div className="grid grid-cols-[60px_1fr_60px] w-full grid-rows-1 items-center gap-4">
                <div className="relative h-[60px] min-w-[60px]">
                    <Image
                        alt="image"
                        src={image}
                        fill
                        className="object-contain h-full w-full"
                    />
                </div>
                <p className="line-clamp-3">{name}</p>
                <div className="flex flex-col">
                    <p className="text-right">{quantity}x</p>
                    <p className="text-right ">{(Number(price) * quantity).toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                    })}</p>
                </div>
            </div>
        </div>
    )
}