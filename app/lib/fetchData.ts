export async function getData() {
    try {
        const res = await fetch('http://localhost:3001/api/products', {
            method: "GET"
        })
        const json = await res.json()
        console.log(json)
    } catch (error) {
        console.log(error)
    }
}