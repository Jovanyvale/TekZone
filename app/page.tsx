import Image from "next/image";
import Product from "./components/product";

export default function Home() {
  return (
    <div>
      <div className="h-120 md:h-140 relative overflow-hidden">
        <Image src={'/images/pokemon.jpg'}
          alt="cammy"
          fill
          className="pb-4 self-center object-cover brightness-30"
        />
      </div>
      <Product />
    </div>
  );
}
