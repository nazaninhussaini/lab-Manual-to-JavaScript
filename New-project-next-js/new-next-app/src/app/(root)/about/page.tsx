import React from 'react'
function getRandomeNumber(num :number){
    return Math.floor (Math.random()* num);
}
function page() {
   const num = getRandomeNumber(2);
   if(num ==1){
    throw new Error("Error in about page")
   } 
  return (
    <div className='w-full h-screen flex justify-center items-center text-3xl font-normal text-blue-500'>
      <h1>this is a About page</h1>
    </div>
  )
}

export default page
