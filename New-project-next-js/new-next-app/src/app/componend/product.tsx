import Link from "next/link";

export default function ProductCard ({product}: {product :{name:string,price: number ,id: number}}){
    return(
        <Link href={`product/${product.id}`} className="flex flex-col ">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="text-sm text-gray-600 ">{product.price}</p>
        </Link>
    )
}