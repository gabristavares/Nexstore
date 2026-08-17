interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    rating: {
        rate: number;
        count: number;
    }
}


export function Product() {
    fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data: Product[]) => console.log(data[0].title))

    return (
        <>
            <h3>Nexstore</h3>
        </>
    )
}