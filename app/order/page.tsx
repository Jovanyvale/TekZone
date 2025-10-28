"use client"
import { useCart } from "../context/Context"
import OrderProduct from "../../components/OrderProduct"
import Link from "next/link"

export default function Order() {

    const { setCart, cart, setOrderInfo, orderInfo } = useCart()

    const totalItems = cart.reduce((accumulator, item) => {
        return accumulator + item.quantity
    }, 0)

    const totalPrice = cart.reduce((accumulator, item) => {
        return accumulator + (Number(item.price) * item.quantity)
    }, 0)

    function handleReset() {
        setCart([])
        setOrderInfo({
            name: "",
            email: "",
            phone: "",
            zipcode: "",
            orderid: 0
        })
    }

    return (
        <div className="flex flex-col items-center mb-8">
            <h1 className="text-lg mb-4">Thanks for your order</h1>
            <div className="flex lg:flex-row flex-col lg:w-[80%] w-[95%] bg-white text-black rounded-lg">

                <div className="lg:w-[70%] w-[95%] lg:mx-0 mx-auto p-4">
                    {cart.map((item) => (
                        <OrderProduct
                            key={item.id}
                            name={item.name}
                            image={item.image}
                            price={item.price}
                            quantity={item.quantity}
                        />
                    ))}
                </div>

                <div className="flex flex-col text-sm font-semibold p-4 gap-3">
                    <h3 className="text-lg">Order details</h3>
                    <p>Customer <br /> <span className="bg-neutral-300">{orderInfo.name}</span></p>
                    <p>Email <br /> <span className="bg-neutral-300">{orderInfo.email}</span></p>
                    <p>Zip code <br /> <span className="bg-neutral-300">{orderInfo.zipcode}</span></p>
                    <p>Phone number <br /> <span className="bg-neutral-300">{orderInfo.phone}</span></p>
                    <p>Total products <br /> <span className="bg-neutral-300">{totalItems}</span></p>
                    <p>Total payment <br /> <span className="bg-neutral-300">{totalPrice.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                    })}</span></p>
                    <p>Order id <br /> <span className="bg-neutral-300">ORD{orderInfo.orderid}</span></p>
                </div>
            </div>
            <Link href={"/"} className="bg-blue-300 p-2 rounded-md mt-3 font-semibold"
                onClick={() => handleReset()}>Back to main page</Link>
        </div>
    )
}