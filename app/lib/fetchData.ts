export async function getData() {
    try {
        const res = await fetch('http://localhost:3001/api/products', {
            method: "GET"
        })
        const json = await res.json()
        return (json.data)
    } catch (error) {
        console.log(error)
    }
}