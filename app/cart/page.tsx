'use client'

import { useCart } from "../context/Context"
import CartProduct from "../components/CartProduct"

export default function Cart() {

    const { cart, setCart } = useCart()

    return (
        <div>
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
                            description={item.description}
                            category={item.category}
                        />
                    ))}
                    <p className="font-semibold text-lg">Subtotal</p>
                </div>
            ) : (
                <p>There is no products in the cart</p>
            )}
        </div>
    )
}