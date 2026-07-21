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
        <div>
          
        </div>
      ))}
    </div>
  )
}

export default page
