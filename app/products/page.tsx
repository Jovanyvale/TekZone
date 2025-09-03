'use client'

import { useEffect, useState } from "react"
import type { Data } from "../lib/types/dataType"
import Product from "../components/Product"
import LoadingMessage from "../components/LoadingMessage"
import { useCart } from "../context/Context"

export default function Products() {

    const { data, status } = useCart()

    const [products, setProducts] = useState<Data[]>([])
    const [sortedProducts, setSortedProducts] = useState<Data[]>([])
    const [callStatus, setCallStatus] = useState<number>()
    const [category, setCategory] = useState<string>("any")
    const [sorter, setSorter] = useState<string>("default")


    useEffect(() => {
        const fetchData = () => {
            setProducts(data ?? [])
            setSortedProducts(data ?? [])
            setCallStatus(status)
        }
        fetchData()
    }, [data, status])

    useEffect(() => {
        let filteredProducts: Data[] = [...products]

        if (category !== "any") {
            filteredProducts = filteredProducts.filter((p) => p.category == category)
        }

        if (sorter == "lh") {
            filteredProducts = [...filteredProducts].sort((a, b) => Number(a.price) - Number(b.price))
        } else if (sorter == "hl") {
            filteredProducts = [...filteredProducts].sort((a, b) => Number(b.price) - Number(a.price))
        } else {
            filteredProducts = [...filteredProducts]
        }

        setSortedProducts(filteredProducts)

    }, [category, sorter, products])

    return (
        <>
            <div className="my-8 flex place-content-center items-center gap-5 md:gap-[10%] flex-col md:flex-row w-full">

                <div className="flex flex-col w-full md:w-auto items-center justify-center">
                    <label htmlFor="sort" className="mb-1 text-md font-semibold text-neutral-400">Sort</label>
                    <select name="sort" id="sort" className="bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 block 
                    md:w-64 w-[80%] p-2.5 h-12 dark:bg-neutral-700 font-semibold"
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { setSorter(e.target.value) }}>
                        <option value="default">Default</option>
                        <option value="lh">Low to high</option>
                        <option value="hl">High to low</option>
                    </select>
                </div>

                <div className="flex flex-col w-full md:w-auto items-center justify-center">
                    <label htmlFor="category" className="mb-1 text-md font-semibold text-neutral-400">Category</label>
                    <select name="category" id="category" className="bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 block
                     md:w-64 w-[80%] p-2.5 h-12 dark:bg-neutral-700 font-semibold"
                        onChange={(e) => { setCategory(e.target.value) }} value={category}>
                        <option value="any">Any</option>
                        <option value="mouse">Mouse</option>
                        <option value="keyboard">Keyboard</option>
                        <option value="cpu">CPU</option>
                        <option value="gpu">GPU</option>
                        <option value="monitor">Monitor</option>
                    </select>
                </div>
            </div >

            <section className="grid sm:grid-cols-2 lg:grid-cols-3 place-items-center w-full">
                {callStatus == 200
                    ? sortedProducts.map((p) => (
                        <Product
                            key={p.id}
                            id={p.id}
                            name={p.name}
                            price={p.price}
                            description={p.description}
                            category={p.category}
                            image={p.image}
                            stock={p.stock}
                        />
                    ))
                    : <LoadingMessage message={"Loading products..."} />}

            </section>
        </>
    )
}