import { product } from "@/public/db/products"
import ProductCard from "../componend/product-card"
export default function productPage(){
    return (
        <div className="w-full gap-3 max-w-6xl min-h-screen flex justify-center items-center ">
            {product.map((p)=>(
             <ProductCard key={p.id} product ={p}/>
            ))}
        </div>
    )
}