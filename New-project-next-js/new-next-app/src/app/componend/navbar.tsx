"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const listNav :{
    id: number,
    name:string,
    link: string
}[] =[
    {
        id: 1,
        name: "Home",
        link:"/",
    },
    {
        id: 2,
        name: "About",
        link:"/about",
    },
    {
        id: 3,
        name: "services",
        link:"/services",
    },
    {
        id: 4,
        name: "Contact Us",
        link:"/contact",
    },
    {
        id: 5,
        name: "Products",
        link:"/product",
    },
]
export default function Navbar(){
    const pathName= usePathname(); 
    return (
    <nav className="flex gap-4 w-full justify-between items-center py-4 px-5 bg-linear-90 from-blue-800 via-purple-700 to-pink-700">
            <div className="flex items-center gap-3 font-light text-sm text-gray-300">

            <Image src="/images/gemini-logo.png" alt="no conected"
            height={700}
            width={700}
            className="w-7 h-7"
            />
            <h1>Rasa</h1>
            </div>
           <div className="flex gap-4 items-center">
            {listNav.map((link)=>{
                const isActive = pathName ===link.link || pathName.startsWith(link.link) && link.link !=="/"
                return(
                    <Link className={isActive? "text-red-500 underline": ""} key={link.id} href={link.link}>
                    {link.name}
                    </Link>
                )
            })}
           </div>
        </nav>
    )
} 