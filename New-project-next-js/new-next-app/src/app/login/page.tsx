import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='w-full max-w-6xl mx-auto flex min-h-screen justify-center items-center'>
      <div className='border rounded-md bg-stone-100  w-full h-96'>
        <div className='w-full grid grid-cols-4'>
            <div className='w-full p-3'>
        <button className='text-black text-2xl'><Link href="/">🏠</Link></button>
            </div>
        <h1 className='text-center text-3xl col-span-2 text-black py-3'>Login Page</h1>
        </div>
        <form action="">
            <div className='w-full grid grid-cols-2 space-x-7 text-justify max-w-3xl mx-auto'>
            <div className=' flex flex-col gap-2 col-span-1'>
            <label className='text-black' htmlFor="name">Name</label>
            <input className='border-gray-700 text-gray-500 rounded-md border-2 p-2' 
            placeholder='Plaece writh Name'
            type="text" id='name' />
            </div>
            <div className=' flex flex-col gap-2 col-span-1'>
            <label className='text-black' htmlFor="name">Last/Name</label>
            <input className='border-gray-700 text-gray-500 rounded-md border-2 p-2' 
            placeholder='Plaece writh Last/Name'
            type="text" id='name' />
            </div>
            <div className=' flex flex-col gap-2 col-span-1'>
            <label className='text-black' htmlFor="name">Address</label>
            <input className='border-gray-700 text-gray-500 rounded-md border-2 p-2' 
            placeholder='Plaece writh Address city'
            type="text" id='name' />
            </div>
            <div className=' flex flex-col gap-2 col-span-1'>
            <label className='text-black' htmlFor="name">EmailAdress</label>
            <input className='border-gray-700 text-gray-500 rounded-md border-2 p-2' 
            placeholder='Plaece writh Email Address'
            type="email" id='name' />
            </div>
            <div className=' flex flex-col gap-2 col-span-1'>
            <label className='text-black' htmlFor="name">PhoneNumber</label>
            <input className='border-gray-700 text-gray-500 rounded-md border-2 p-2' 
            placeholder='Plaece writh Phone Number'
            type="number" id='name' />
            </div>
            <div className='flex flex-col gap-3 col-span-1 mr-6 pt-8'>
            <button type='submit' className='text-black p-2 hover:bg-amber-700 hover:text-white text-center border rounded-md'>Save</button>
            </div>
            </div>
        </form>
      </div>
    </div>
  )
}

export default page
