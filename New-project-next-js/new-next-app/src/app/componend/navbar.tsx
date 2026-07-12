import Image from "next/image";

export default function Navbar(){
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
            <div className="flex gap-4">
                <a  href="/about">About</a>
                <a  href="/servics">Servics</a>
                <a  href="/contact">Contact</a>
            </div>
        </nav>
    )
} 