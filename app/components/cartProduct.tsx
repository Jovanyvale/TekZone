import Image from "next/image"
export default function CartProduct(image, name, quantity, price, stock) {

    return (
        <div className="flex">
            <Image src="" alt="Product"
                width={80}
                height={80}
            />
            <div className="flex flex-col">
                <p>{name}</p>
                <p>Quantity: {quantity}</p>
                <p>${price * quantity}</p>
            </div>
            <div className="flex h-6 bg-white">
                <button className="">-</button>
                <input type="number" value={1} max={stock} />
                <button>+</button>
            </div>
        </div>
    )
}