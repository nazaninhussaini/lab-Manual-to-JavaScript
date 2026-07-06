import Link from "next/link";
import { products } from "../types/product";

export default function ProductCard({product}: {product: products }){
    return (
           <Link href={`/products/${product.id}`} className="p-8 border-2 rounded-2xl">
                    <h1 className="text-4xl font-bold">{product.name}</h1>
                    <p className="text-2xl font-extrabold">{product.emoji}</p>
                </Link>
    )
}