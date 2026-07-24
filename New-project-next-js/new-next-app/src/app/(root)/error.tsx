"use client"
function error({error,reset}: {error:Error,reset:()=>void}) {
  function handelClick(){
    reset();
  }
  return (
    <div>
      <h1>{error.message} </h1>
      <button onClick={handelClick} className="py-2 px-5 bg-amber-700 rounded-md">try again</button>
    </div>
  )
}

export default error
