import React from 'react'

async function page() {
    async function getPost (){
        const deta =  await fetch("Somthing");
        const jawab = deta.json();
        return jawab;
    }
    const deta = await getPost();
  return (
    <div className='w-full max-w-6xl max-auto flex flex-col'>
      {deta.map((x:{id: number ,name:string})=>{
        return (
            <div className='border rounded-2xl shadow-2xl'>
                <h1 className='text-4xl font-bold'>{x.name}</h1>
            </div>
        )
      })}
    </div>
  )
}

export default page

