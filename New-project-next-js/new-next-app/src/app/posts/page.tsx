"use client"
import PostCard from '@/componend/post-card';
import { post } from '@/types/posts.type';
import React, { useEffect, useState } from 'react'

function page() {
    const[posts,setPosts] = useState<post[] | null>(null);
    const[count,setCount]= useState(1);
    useEffect(()=>{
       async function getPosts (){
         const data =  await fetch("https://jsonplaceholder.typicode.com/posts");
         const respons = await data.json();
         setPosts (respons);
        }
        getPosts();
    },[])
    if(!posts) return;
  return (
    <div className='w-full flex flex-col gap-4 max-w-4xl mx-auto '>
        <button onClick={()=> setCount((prev)=>prev < posts.length? prev+1 :(prev=1))} className='px-4 py-3 bg-amber-800 text-white'>Add post</button>
      {posts.slice(0,count).map((posts)=>{
        return(
        <PostCard key={posts.id} post ={posts}/>
        )
      })}
    </div>
  )
}

export default page
