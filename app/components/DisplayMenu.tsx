"use client";
import { useState } from "react"
import Image from "next/image"
import Link from "next/link";

export default function DisplayMenu() {

    const [open, setOpen] = useState(false)

    return (
        <>

            <header className="h-20 md:h-35 relative overflow-hidden flex items-center justify-center md:justify-between content-between">
                <div className="md:p-8">
                    <Link href="/" className="text-3xl md:text-6xl text-white font-bold" onClick={() => setOpen(false)} >Tek< span className="text-blue-400">Zone</span></Link>
                </div>
                <div className="hidden md:flex gap-6 p-8 font-semibold">
                    <Link href={'/products'} className="hover:text-blue-400 hover:cursor-pointer transition duration-300 p-2">Products</Link>
                    <Link href={'/about'} className="hover:text-blue-400 hover:cursor-pointer transition duration-300 p-2">About</Link>
                    <Link href={'/contact'} className="hover:text-blue-400 hover:cursor-pointer transition duration-300 p-2">Contact</Link>
                </div>

                <Link href={'/contact'} className="absolute right-2 hover:text-blue-400 hover:cursor-pointer transition duration-300 p-2 md:hidden">
                    <Image src="/images/header/cart.svg"
                        alt="cart"
                        width={30}
                        height={30}
                    />
                </Link>

                <div className="absolute left-2 md:hidden" onClick={() => setOpen(!open)}>
                    <Image src="/images/header/menu.svg"
                        alt="menu"
                        width={30}
                        height={30} />
                </div>
            </header >

            <div className={`fixed w-full h-full z-40 transition duration-300 ${open ? "backdrop-blur-xs" : ""}`}>
                <nav className={`fixed inset-0 flex self-top mt-30 justify-self-center z-50 w-[85%] h-60 bg-[#141414] rounded-lg ${open ? "block" : "hidden"}`}>
                    <p className="absolute flex right-2 top-2 w-8 h-8 font-extrabold justify-center items-center hover:cursor-pointer"
                        onClick={() => setOpen(false)}>X</p>
                    <div className="flex flex-col items-center mx-auto justify-around">
                        <Link href={'/products'} className="hover:text-blue-400 hover:cursor-pointer transition duration-300 p-2"
                            onClick={() => setOpen(false)}>Products</Link>
                        <Link href={'/about'} className="hover:text-blue-400 hover:cursor-pointer transition duration-300 p-2"
                            onClick={() => setOpen(false)} > About</Link>
                        <Link href={'/contact'} className="hover:text-blue-400 hover:cursor-pointer transition duration-300 p-2"
                            onClick={() => setOpen(false)} > Contact</Link>
                    </div>
                </nav >
            </div >
        </>
    )
}