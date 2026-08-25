"use client"
import PostCard from '@/componend/post-card';
import { post } from '@/types/posts.type';
import React, { useEffect, useState } from 'react'

function page() {
    const[posts,setPosts] = useState<post[] | null>(null);
    useEffect(()=>{
       async function getPosts (){
         const data =  await fetch("https://lsonplaceholder.typicode.com/posts");
         const respons = await data.json();
         return respons;
        }
    },[])
    if(!posts) return;
  return (
    <div className='w-full flex flex-col gap-4 max-w-4xl mx-auto '>
        <button className='px-4 py-3 bg-amber-800 text-white'>Add post</button>
      {posts.map((posts)=>{
        return(
        <PostCard post ={posts}/>
        )
      })}
    </div>
  )
}

export default page
