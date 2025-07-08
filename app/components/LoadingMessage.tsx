import type { Message } from "../lib/types/dataType"

export default function LoadingMessage({ message }: Message) {

    return (
        <div className="flex flex-col justify-items-center place-content-center lg:col-start-2">
            <p className="w-full place-self-center text-center loadingText text-xl md:my-70 my-52">{message}</p>
        </div>
    )
}