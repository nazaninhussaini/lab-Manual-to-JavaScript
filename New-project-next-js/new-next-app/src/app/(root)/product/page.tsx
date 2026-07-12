import ProductCard from "@/app/componend/product"

const productlist =[
    {
        id:1,
        name: "Apple",
        price: 120,
    },
    {
        id:2,
        name: "Mango",
        price: 100,
    },
    {
        id:3,
        name: "strabiry",
        price: 70,
    },
    {
        id:4,
        name: "Melon",
        price: 90,
    },
]
export default function productPage(){
    return (
        <div className=" w-full flex  justify-center items-center h-screen">
           <div className="w-full flex gap-2 max-w-4xl bg-white/80 backdrop-blur-md ">
           {productlist.map((p)=>{
            return(
                <ProductCard key={p.id} product ={p}/>
            )
           })}
           </div>
        </div>
    )
}