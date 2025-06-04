import Image from "next/image"
export default function Product() {

    return (
        <>
            <div className="bg-white rounded-xl shadow-2xl p-6 w-[22%] flex flex-col">
                <p className="text-slate-800 text-xl mb-2">Product</p>
                <Image src={'/images/cammy.jpg'}
                    alt="cammy"
                    width={290}
                    height={300}
                    className="border-b-2 border-gray-400 pb-4 self-center"
                />
                <p className="text-slate-800 my-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum vero architecto ea ullam deserunt, voluptate veniam</p>
                <button className="bg-blue-400 rounded-2xl p-2">Add to cart</button>
            </div>
        </>
    )
}