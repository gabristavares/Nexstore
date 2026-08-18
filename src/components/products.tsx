import type { Product } from "../types/product"
import { ProductCard } from "./ProductCard"



export function Product() {
    fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data: Product[]) => console.log(data[0].title))

    return (
        <>

            <ProductCard
                product={{
                    id: 123,
                    title: "Calça jeans",
                    price: 15,
                    description: "Calça Jeans",
                    category: "Calça",
                    image: ""
                }}
            />
        </>
    )
}