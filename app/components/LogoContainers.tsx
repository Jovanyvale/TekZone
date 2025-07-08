import Image from "next/image"

export default function LogoContainers() {

    const logos = [
        "AMD_Logo",
        "asus",
        "Intel-logo-2022",
        "corsair",
        "hewlett-packard-logo-black-and-white",
        "lg-logo-black-and-white",
        "Logitech-Logo.wine",
        "HyperX-logo",
        "msi-logo-png_seeklogo-501233",
        "Nvidia_logo"
    ]

    return (
        <>
            <div className="flex gap-4 bg-neutral-800 p-6">
                {logos.map((logo) => (
                    <div key={logo}
                        className="bg-neutral-600 p-4 w-[200px] h-[120px] flex-shrink-0 place-items-center content-center rounded-lg relative animated"
                    >
                        <Image src={`/images/brandLogos/${logo}.png`}
                            alt="logo"
                            fill
                            className="object-contain p-4"
                        />
                    </div>
                )
                )}
                {logos.map((logo) => (
                    <div key={logo}
                        className="bg-neutral-600 p-4 w-[200px] h-[120px] flex-shrink-0 place-items-center content-center rounded-lg relative animated"
                    >
                        <Image src={`/images/brandLogos/${logo}.png`}
                            alt="logo"
                            fill
                            className="object-contain p-4"
                        />
                    </div>
                )
                )}
            </div>

        </>
    )
}