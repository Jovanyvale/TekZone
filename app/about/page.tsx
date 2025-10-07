import Image from "next/image"
export default function About() {

    return (
        <>
            <div className="w-[90%] mx-auto flex flex-col gap-4 2xl:flex-row justify-around my-[20px] mb-20 p-6 rounded-lg bg-blue-900">
                <div className="flex flex-col md:flex-row">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d755.5379316441!2d-73.98567177143354!3d40.75868749820421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855b8d6f05d%3A0x6708a8dfb851c259!2s7th%20Ave%2C%20New%20York%2C%20NY%2010036%2C%20USA!5e0!3m2!1sen!2smx!4v1759310479685!5m2!1sen!2smx" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen className="rounded-xl md:w-[400px] h-[220px] md:h-[300px]"></iframe>

                    <div className="flex flex-col self-center p-4 md:text-lg font-semibold">
                        <div className="flex gap-2">
                            <div className="w-[20px] h-auto relative">
                                <Image src={"/images/location/city.svg"} alt="location"
                                    fill
                                    className="object-contain relative my-auto" />
                            </div>
                            <h1>New York City - NY</h1>
                        </div>

                        <div className="flex gap-2">
                            <div className="w-[20px] h-auto relative">
                                <Image src={"/images/location/location.svg"} alt="location"
                                    fill
                                    className="object-contain relative" />
                            </div>
                            <p>17th Avenue</p>
                        </div>

                        <div className="flex gap-2">
                            <div className="w-[20px] h-auto relative">
                                <Image src={"/images/location/mail.svg"} alt="location"
                                    fill
                                    className="object-contain relative" />
                            </div>
                            <p>tekzone.ny@email.com</p>
                        </div>

                        <div className="flex gap-2">
                            <div className="w-[20px] h-auto relative">
                                <Image src={"/images/location/phone.svg"} alt="location"
                                    fill
                                    className="object-contain relative" />
                            </div>
                            <p>+1 (234) 567 89 01</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d672.3253192007932!2d-122.34894957141529!3d47.62027459819194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490154604f89ab1%3A0x4a7d9fe33ccf3b68!2s600-400%20Broad%20St%2C%20Seattle%2C%20WA%2098109%2C%20USA!5e0!3m2!1sen!2smx!4v1759304176265!5m2!1sen!2smx" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl md:w-[400px] h-[220px] md:h-[300px]"></iframe>

                    <div className="flex flex-col self-center p-4 md:text-lg font-semibold">
                        <div className="flex gap-2">
                            <div className="w-[20px] h-auto relative">
                                <Image src={"/images/location/city.svg"} alt="location"
                                    fill
                                    className="object-contain relative my-auto" />
                            </div>
                            <h1>Seattle - WA</h1>
                        </div>

                        <div className="flex gap-2">
                            <div className="w-[20px] h-auto relative">
                                <Image src={"/images/location/location.svg"} alt="location"
                                    fill
                                    className="object-contain relative" />
                            </div>
                            <p>123th Street</p>
                        </div>

                        <div className="flex gap-2">
                            <div className="w-[20px] h-auto relative">
                                <Image src={"/images/location/mail.svg"} alt="location"
                                    fill
                                    className="object-contain relative" />
                            </div>
                            <p>tekzone.wa@email.com</p>
                        </div>

                        <div className="flex gap-2">
                            <div className="w-[20px] h-auto relative">
                                <Image src={"/images/location/phone.svg"} alt="location"
                                    fill
                                    className="object-contain relative" />
                            </div>
                            <p>+1 (234) 567 89 00</p>
                        </div>
                    </div>
                </div>
            </div >

            <h1 className="text-4xl md:text-6xl text-white font-bold text-center mb-5">About us</h1>
            <div className="self bg-center grid grid-cols-1 md:h-[500px] h-auto bg-zinc-800 md:grid-cols-2 mb-35">
                <p className="text-center text-md md:text-xl font-light self-center w-[90%] mx-auto py-8">At TekZone, our mission is to provide cutting-edge computer technology that enhances productivity, creativity, and entertainment. We believe the right equipment can transform your digital experience, whether you are building your dream setup, working from home, or leveling up your gaming.

                    Our commitment to innovation, reliability, and customer satisfaction drives everything we do. We strive to offer top-quality products and personalized service to ensure that every purchase helps you get the most out of technology.</p>
                <div className="w-full h-full relative min-h-[300px]">
                    <Image src={"/images/about/about_image.jpeg"} alt="about image"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 mb-35 divide-x ">
                <div className="px-6 mx-auto text-center">
                    <p className="text-2xl font-bold ">5+ Years</p>
                    <p className="">Our team has been in the business for half a decade. This experience means we understand what it takes to build a high-performance machine and we stand behind every product we sell.</p>
                </div>

                <div className="px-6 mx-auto text-center">
                    <p className="text-2xl font-bold">10+ Tech Brands</p>
                    <p className="">Our inventory is built on partnerships with industry leaders. We give you access to the best selection of trusted, top-tier components on the market.</p>
                </div>

                <div className="px-6 mx-auto text-center">
                    <p className="text-2xl font-bold ">5000+ Deliveries</p>
                    <p className="">We are proud to be the trusted supplier for a growing community. This is the number of PC builders and tech enthusiasts who have successfully completed their custom rigs using parts from our store.</p>
                </div>
            </div>
        </>
    )
}