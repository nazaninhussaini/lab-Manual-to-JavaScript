import { MyProduct } from "../../../../../public/db/MyProduct"

async function ProductRout({params} : {params : Promise<{id : number}>}){
    const {id} = await params;
    const fondProduct =  MyProduct.find((x)=>x.id == id)
    return (
        <div className="w-full flex-col gap-5 flex h-screen justify-center items-center ">
            <h1 className="text-5xl font-semibold text-blue-500">{fondProduct?.name}</h1>
            <p className="text-xl font-light text-purple-600">{fondProduct?.price}</p>
        </div>
    )
}
export default ProductRout;