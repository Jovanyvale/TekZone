import type { Data } from "./types/dataType"

export async function getData() {
    try {
        const res = await fetch('http://localhost:3001/api/products', {
            method: "GET"
        })
        const status: number = res.status
        const json = await res.json()
        return ({ data: json.data as Data[], status })
    } catch (error) {
        console.log(error)
    }
}