import type { Data } from "./types/dataType"

export async function getData() {

    const apiurl = process.env.NEXT_PUBLIC_API_URL!

    try {
        const res = await fetch(`${apiurl}`, {
            method: "GET"
        })
        const status: number = res.status
        const json = await res.json()
        return ({ data: json.data as Data[], status })
    } catch (error) {
        console.log(error)
    }
}

export async function getProduct(url: string) {
    try {
        const res = await fetch(url, {
            method: "GET"
        })
        const status = res.status
        const json = await res.json();
        return ({ data: json, status })
    } catch (error) {
        console.log(error)
    }
}
