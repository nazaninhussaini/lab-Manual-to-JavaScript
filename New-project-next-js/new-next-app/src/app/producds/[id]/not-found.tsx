"use client";

import { usePathname } from "next/navigation";

export default function NotFoundPage(){
   const pathName = usePathname();
   const id = pathName.split("/")[2];
    return (
        <div>
            <h1>ببخشید محصولی باای دی 
                { id }

                موجود نیست  </h1>
        </div>
    )
}