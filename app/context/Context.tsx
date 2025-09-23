'use client'
import { useContext, createContext, useState, useEffect } from "react";
import { Cart, Data } from "../lib/types/dataType";
import { getData } from "../lib/fetchData";
import { ApiResponse } from "../lib/types/dataType";

type orderInfo = {
    name: string,
    email: string,
    phone: string,
    zipcode: string
}

type CartContextType = {
    cart: Cart[]
    setCart: React.Dispatch<React.SetStateAction<Cart[]>>
    data: Data[]
    status: number
    orderInfo: {
        name: string,
        email: string,
        phone: string,
        zipcode: string
    }
    setOrderInfo: React.Dispatch<React.SetStateAction<orderInfo>>
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {

    const [cart, setCart] = useState<Cart[]>(() => {
        return JSON.parse(localStorage.getItem("cart") || "[]") //Set the cart products from local storage
    })
    const [data, setData] = useState<Data[]>([])
    const [status, setStatus] = useState<number>(102)
    const [orderInfo, setOrderInfo] = useState({
        name: "",
        email: "",
        phone: "",
        zipcode: ""
    })

    //Add the products to the local storage when a product is added to the state
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

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
        <CartContext.Provider value={{ cart, setCart, data, status, orderInfo, setOrderInfo }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(): CartContextType {
    const context = useContext(CartContext)
    if (!context) throw new Error("useCart should be inside of CartProvider")
    return context
}