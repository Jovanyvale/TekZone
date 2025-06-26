export type ProductType = {
    name: string;
    description: string;
    price: string;
    category: string;
    image: string;
    stock: number;
}

export type Data = ProductType & {
    id: number;
}

export type ApiResponse = {
    data: Data[];
    status: number
}