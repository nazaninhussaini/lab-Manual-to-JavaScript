import Image from "next/image";

export default function Page(){
    return (
        <div className="w-full h-screen flex justify-center items-center ">
         
        <Image className="flex justify-center p-2 items-center" alt="Nature" src="https://images.unsplash.com/photo-1773332585771-5c9c5fa642d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
         height={100} width={500}/>
        <Image alt="no conected" src="https://pixabay.com/images/download/x-10359152_1920.jpg" width={500} height={100}/> 

        </div>
    )
}