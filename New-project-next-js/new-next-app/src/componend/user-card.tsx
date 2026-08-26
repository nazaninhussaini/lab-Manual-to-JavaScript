import { User } from '@/types/user.type'
import React from 'react'

function UserCard({user} : {user:User}) {
  return (
    <div className='w-full border rounded-2xl p-4 my-2'>
      <h1 className='text-3xl font-bold'>{user.name}</h1>
      <p className='text-sm text-gray-600 bg-sky-200'>{user.email}</p>
      <p className='text-sm text-gray-600 bg-sky-200'>{user.address.city}</p>
      <p className='text-sm text-gray-600 bg-sky-200'>{user.phone}</p>
    </div>
  )
}

export default UserCard
