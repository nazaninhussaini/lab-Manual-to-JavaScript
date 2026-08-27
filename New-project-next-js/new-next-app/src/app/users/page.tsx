import UserCard from '@/componend/user-card';
import { User } from '@/types/user.type';
import React from 'react'

async function page() {
  async function getUsers(){
   const data = await fetch("https://jsonplaceholder.typicode.com/users");
   const responce = data.json();
   return responce;
  }
  const users:User[] = await getUsers();
  return (
    <div className='w-full max-w-5xl mx-auto flex flex-col gap-4'>
      {users.map((user)=>(
        <UserCard key={user.id} user ={user} />
      ))}
      
    </div>
  )
}

export default page
