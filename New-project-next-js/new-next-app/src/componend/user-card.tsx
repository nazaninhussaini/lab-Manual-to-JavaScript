import { User } from '@/types/user.type'
import React from 'react'

function UserCard({user} : {user:User}) {
  return (
    <div className='w-full border rounded-2xl p-4 my-2'>
      <h1 className='text-3xl font-bold'>{user.name}</h1>
      <div className='bg-sky-600 rounded-md text-stone-100 px-3 py-3'>

      <p className='text-sm'>EmailAdress : {user.email}</p>
      <p className='text-sm'>Address City : {user.address.city}</p>
      <p className='text-sm'>phone Number : {user.phone}</p>
      </div>
    </div>
  )
}

export default UserCard
