import type { Product } from "../types/product";


export function getProducts(): Promise<Product[]> {

    const response = fetch('https://fakestoreapi.com/produts')
    .then ((data)=> {
        return data.json()
    })

    return response
}
