"use client"

import React, { useEffect, useState } from 'react'

function page() {
    const [users ,setUsers] = useState <{id:number , name:string ,email:string}[]|null>(null)
    useEffect(()=>{
        async function getUser(){
          const responce =   await fetch ("url");
         const deta =  await responce.json();
         setUsers(deta)
        }
        getUser();
    },[])
  return (
    <div>
      {users?.map((x)=>(
        <div key={x.id} className='w-full max-w-6xl mx-auto border shadow-2xl rounded-2xl'>
          <h1>{x.name}</h1>
          <p>{x.email}</p>
        </div>
      ))}
    </div>
  )
}

export default page
