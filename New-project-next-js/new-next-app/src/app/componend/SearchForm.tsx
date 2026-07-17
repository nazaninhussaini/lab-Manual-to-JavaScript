"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'

function SearchForm() {
    const router = useRouter();
    const searchParams =  useSearchParams();
    const [search,setSearch] =  useState(searchParams.get("search") || "");
    function handelClick(){
      const params = new URLSearchParams("search");
      if(params){
        router.push(`/product/${params.get("search")}`)
      }
    }
    return (
    <div className='w-full px-10 py-2 flex gap-3'>

        <input type="text"
        className='border text-black w-9/12 p-2'
         value={search}
         onChange={(e)=> setSearch(e.target.value) } />

         <button onClick={handelClick} className='bg-purple-600 text-stone-200 py-2 px-8 rounded-md'>Search</button>
    </div>
  )
}

export default SearchForm
