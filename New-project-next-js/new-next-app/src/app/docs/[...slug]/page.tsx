async function page ({params} : {params: Promise<{slug :string []}>}){
    const {slug} = await params
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <h1 className="text-3xl font-bold bg-linear-60 from-blue-400 to-purple-500 bg-clip-text text-transparent">
                this is {slug[0]} section and {slug[1]}
            </h1>
        </div>
    )
}
export default page;