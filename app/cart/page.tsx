'use client'

import { useCart } from "../context/Context"

export default function Cart() {

    const { cart, setCart } = useCart()

    return (
        <div className="flex">
            <div className="flex flex-col">

            </div>
            <div className="flex flex-col">
                <p className="font-semibold text-lg">Subtotal ({cart?.length} products):  </p>
            </div>
        </div>
    )
}