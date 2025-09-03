'use client'

import { useCart } from "../context/Context"
import Image from "next/image"

export default function Cart() {

    const { cart, setCart } = useCart()

    return (
        <div className="flex">
            <div className="flex flex-col">
                <Image src={ } />
            </div>
            <div className="flex flex-col">
                <p className="font-semibold text-lg">Subtotal ({cart?.length} products):  </p>
            </div>
        </div>
    )
}