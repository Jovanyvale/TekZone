import type { ProductType } from "../lib/types/dataType"

export default function ProductDetail({ id, name, description, price, category, image, stock }: ProductType) {



    return (
        <>
            <div>
                <header>
                    <h1>{name}</h1>

                </header>

            </div>
        </>)

}