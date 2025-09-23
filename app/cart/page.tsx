'use client'

import { useCart } from "../context/Context"
import CartProduct from "../components/CartProduct"

export default function Cart() {

    const { cart, orderInfo, setOrderInfo } = useCart()

    const subtotal = cart.reduce((count, item) => count + (Number(item.price) * item.quantity), 0)

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { id, value } = e.target
        setOrderInfo((prev) => ({ ...prev, [id]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()

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
                        <div className="flex flex-col self-center md:w-[50%] w-[92%] p-4 bg-black/35 rounded-xl gap-3">
                            <div className="flex flex-col">
                                <label htmlFor="name">Name</label>
                                <input className="bg-white/10 h-8 p-1 w-[100%] rounded-md invalid:outline-red-500 outline-0" type="text" id="name"
                                    onChange={handleChange} />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="email">E-mail</label>
                                <input className="bg-white/10 h-8 p-1 w-[100%] rounded-md invalid:outline-red-500 outline-0" type="email" id="email"
                                    onChange={handleChange} />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="phone">Phone Number</label>
                                <input className="bg-white/10 h-8 p-1 w-[100%] rounded-md invalid:outline-red-500 outline-0" type="tel" id="phone" pattern="^\d{10}$|^\d{3}[-\s]?\d{3}[-\s]?\d{4}$"
                                    required
                                    onChange={handleChange} />
                            </div >

                            <div className="flex flex-col">
                                <label htmlFor="zipcode">Zip Code</label>
                                <input className="bg-white/10 h-8 p-1 w-[100%] rounded-md invalid:outline-red-500 outline-0 appearance-none" type="number" id="zipcode"
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