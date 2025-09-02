import { useContext, createContext, useState } from "react";
import { ProductType } from "../lib/types/dataType";

type CartContextType = {
    cart: ProductType[]
    setCart: React.Dispatch<React.SetStateAction<ProductType[]>>
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {

    const [cart, setCart] = useState<ProductType[]>([])

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(): CartContextType {
    const context = useContext(CartContext)
    if (!context) throw new Error("useCart should be inside of CartProvider")
    return context
}