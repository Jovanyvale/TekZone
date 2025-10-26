import Image from "next/image"
export default function Contact() {

    return (
        <>
            <div className="w-[90%] mx-auto flex flex-col gap-4 2xl:flex-row justify-around my-[20px] mb-20 p-6 rounded-lg bg-blue-900">
                <section className="flex flex-col md:flex-row">
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
                </section>

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

            <form action="" className=" flex md:w-[80%] w-[90%] justify-center-safe mx-auto bg-neutral-800 p-6 gap-6 rounded-lg flex-col items-center mb-12">
                <p className="text-lg font-bold">Send your message</p>

                <div className="w-full flex gap-6 md:flex-row flex-col">
                    <div className="w-full">
                        <div className="flex flex-col">
                            <label htmlFor="name">Name</label>
                            <input className="bg-white/10 h-8 p-1 w-[100%] rounded-md invalid:outline-red-500 outline-0" type="text" id="name" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email">E-mail</label>
                            <input className="bg-white/10 h-8 p-1 w-[100%] rounded-md invalid:outline-red-500 outline-0" type="email" id="email" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="phone">Phone Number</label>
                            <input className="bg-white/10 h-8 p-1 w-[100%] rounded-md invalid:outline-red-500 outline-0" type="tel" id="phone" pattern="^\d{10}$|^\d{3}[-\s]?\d{3}[-\s]?\d{4}$"
                                required />
                        </div >
                    </div>

                    <div className="w-full">
                        <textarea
                            id="comment"
                            placeholder="Add your message here..."
                            className="w-full md:h-full h-[200px] outline-0 rounded-md bg-white/10 p-2 resize-none text-left align-top"
                        ></textarea>
                    </div>
                </div>

                <button type="submit" className="p-2 bg-blue-300 rounded-md text-black font-semibold">Submit</button>
            </form>
        </>
    )
}