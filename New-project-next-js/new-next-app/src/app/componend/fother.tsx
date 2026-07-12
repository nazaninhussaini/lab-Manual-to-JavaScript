import Link from "next/link";


export default function Fother(){
  
    return (
        <div className="w-full pt-4 dark:bg-black dark:text-white bg-white">
            <div className="w-full mx-5xl mx-auto items-center flex flex-col gap-3">
                <div className="grid grid-cols-3 space-x-1">
                    <div className="col-span-2 p-3 flex gap-3 justify-center dark:text-white text-green-800 text-sm py-2 rounded-full bg-green-100/50">
                        <span>En</span>
                        <span>دری</span>
                        <span>پشتو</span>
                    </div>
                    <div className="col-span-1 flex gap-3 dark:text-white text-green-800 text-sm py-2 px-4 rounded-full bg-green-100/50">
                       🌙 ☀️
                    </div>
                </div>
            <div className="flex justify-center gap-2 dark:text-white">
                📞
            </div>
            <div className="flex space-x-6 pt-3 font-medium dark:text-white text-green-900">
                <Link href="">Link shortener</Link>
                <Link href="">Link in bio</Link>
                <Link href="">Creator marketplce</Link>
                <Link href="">Afghan creators</Link>
            </div>
            <div className="flex space-x-7 pt-3 font-medium dark:text-white text-green-900">
                <Link href="">About</Link>
                <Link href="">privacy policy</Link>
                <Link href="">Contact</Link>
                <Link href="">Terms of service</Link>
            </div>
            <span className="text-xs pt-3 dark:text-white text-green-900">AI Study Assistend is developed and maintenid by code.Nazanin.</span>
            </div>
        </div>
    )
}