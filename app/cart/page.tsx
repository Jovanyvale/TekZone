'use client'

import { useCart } from "../context/Context"
import CartProduct from "../components/CartProduct"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Cart() {

    const { cart, setOrderInfo } = useCart()
    const [loadingScreen, setLoadingScreen] = useState(false)
    const router = useRouter()

    const subtotal = cart.reduce((count, item) => count + (Number(item.price) * item.quantity), 0)

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { id, value } = e.target
        setOrderInfo((prev) => ({ ...prev, [id]: value }))
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        //Set a id to the order
        setOrderInfo((prev) => ({
            ...prev,
            orderid: Math.floor(100000 + Math.random() * 900000),
        }));

        setLoadingScreen(true)

        setTimeout(() => {
            router.push("/order")
        }, 2500);
    }

    return (
        <div className="mb-12">
            {cart.length >= 1 ? (
                <div className="flex flex-col gap-4">
                    {cart.map((item) => (
                        <CartProduct
                            key={item.id}
                            id={item.id}
                            image={item.image}
                            name={item.name}
                            quantity={item.quantity}
                            price={item.price}
                            stock={item.stock}
                        />
                    ))}
                    <form onSubmit={handleSubmit} className="place-items-center">
                        {loadingScreen ? <div className="h-full w-full bg-black/40 fixed flex items-center justify-center inset-0">
                            <svg xmlns="http://www.w3.org/1000/svg" viewBox="0 0 200 200" className="w-[20%] h-[20%]"><circle fill="none" stroke-opacity="1" stroke="#008EFF" stroke-width=".5" cx="100" cy="100" r="0"><animate attributeName="r" calcMode="spline" dur="2" values="1;80" keyTimes="0;1" keySplines="0 .2 .5 1" repeatCount="indefinite"></animate><animate attributeName="stroke-width" calcMode="spline" dur="2" values="0;25" keyTimes="0;1" keySplines="0 .2 .5 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" calcMode="spline" dur="2" values="1;0" keyTimes="0;1" keySplines="0 .2 .5 1" repeatCount="indefinite"></animate></circle></svg>
                        </div>
                            : <div></div>}
                        <div className="flex flex-col self-center md:w-[50%] w-[92%] p-4 bg-black/35 rounded-xl gap-3">
                            <div className="flex flex-col">
                                <label htmlFor="name">Name</label>
                                <input className="bg-white/10 h-8 p-1 w-full rounded-md invalid:outline-red-500 outline-0" type="text" id="name"
                                    onChange={handleChange} />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="email">E-mail</label>
                                <input className="bg-white/10 h-8 p-1 w-full rounded-md invalid:outline-red-500 outline-0" type="email" id="email"
                                    onChange={handleChange} />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="phone">Phone Number</label>
                                <input className="bg-white/10 h-8 p-1 w-full rounded-md invalid:outline-red-500 outline-0" type="tel" id="phone" pattern="^\d{10}$|^\d{3}[-\s]?\d{3}[-\s]?\d{4}$"
                                    required
                                    onChange={handleChange} />
                            </div >

                            <div className="flex flex-col">
                                <label htmlFor="zipcode">Zip Code</label>
                                <input className="bg-white/10 h-8 p-1 w-full rounded-md invalid:outline-red-500 outline-0 appearance-none" type="number" id="zipcode"
                                    onChange={handleChange} />
                            </div>
                        </div>

                        <div className="flex self-center place-items-center gap-8 mx-[10%] mt-4">
                            <p className="font-semibold text-lg">Subtotal: <span className="bg-black/60 p-1 rounded-sm text-xl">{subtotal.toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                            })}</span></p>

                            <button type="submit" className="hover:cursor-pointer p-3 bg-blue-300 font-semibold rounded-md text-black">
                                Order
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="flex h-[600px] w-full">
                    <p className="self-center m-auto md:text-2xl text-sm">There is no products in the cart</p>
                </div>
            )
            }
        </div >
    )
}