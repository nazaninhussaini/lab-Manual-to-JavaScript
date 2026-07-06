import { product } from "@/public/db/products";


async function Page({params}: {params : Promise<{id:number}>}){
    const {id} = await params;
   const foundProduct = product.find((product)=>{
        return product.id == id;
    })
    if (!foundProduct) return ;
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="border rounded-2xl w-1/2 p-9">
            <h1 className="text-2xl text-gray-400">{foundProduct.id}</h1>
            <h1 className="text-2xl text-gray-400">{foundProduct.name}</h1>
            <h1 className="text-2xl text-gray-400">{foundProduct.price}</h1>
            <h1 className="text-2xl text-gray-400">{foundProduct.emoji}</h1>
            </div>
        </div>
    )
}
 export default Page ;