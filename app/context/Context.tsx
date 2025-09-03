'use client'
import { useContext, createContext, useState, useEffect } from "react";
import { Cart, Data } from "../lib/types/dataType";
import { getData } from "../lib/fetchData";
import { ApiResponse } from "../lib/types/dataType";

type CartContextType = {
    cart: Cart[]
    setCart: React.Dispatch<React.SetStateAction<Cart[]>>
    data: Data[]
    status: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {

    const [cart, setCart] = useState<Cart[]>([])
    const [data, setData] = useState<Data[]>([])
    const [status, setStatus] = useState<number>(102)

    useEffect(() => {
        const fetchData = async () => {
            const result: ApiResponse | undefined = await getData();
            if (!result) {
                throw new Error("Unaviable to load products")
            } else {
                const data = result.data
                const status = result.status
                setData(data)
                setStatus(status)
            }
        }
        fetchData();
    }, []);

    return (
        <CartContext.Provider value={{ cart, setCart, data, status }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(): CartContextType {
    const context = useContext(CartContext)
    if (!context) throw new Error("useCart should be inside of CartProvider")
    return context
}