import ProductCard from "@/app/componend/product"
import { MyProduct } from "../../../../public/db/MyProduct"


export default function productPage(){
    return (
        <div className=" w-full flex justify-center items-center h-screen">
           <div className="w-full flex gap-5 text-purple-500 max-w-4xl p-4 bg-white/80 backdrop-blur-md ">
           {MyProduct.map((p)=>{
            return(
                <ProductCard key={p.id} product ={p}/>
            )
           })}
           </div>
        </div>
    )
}