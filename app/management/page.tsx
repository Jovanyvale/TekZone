'use client'
import { getData } from "../lib/fetchData"
import Product from "../components/Product"
export default function ManagementPage() {
    return (
        <>
            <main className="flex flex-col">
                <Product />
                <button onClick={getData} className="bg-blue-300 p-1">Click</button>
            </main>
        </>
    )
}