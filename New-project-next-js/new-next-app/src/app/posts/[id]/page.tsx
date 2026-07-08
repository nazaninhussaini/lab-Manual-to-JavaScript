import { posts } from "../../../../public/db/post";

async function pagePost({params} : {params : Promise<{id: number}>}){
    const {id} = await params;
    const foundPost = posts.find((post)=>{
        return post.id == id;
    })
    if (!foundPost ) return ;
    return (
        <div className="w-full h-screen gap-2 flex justify-center items-center">
            <div className="border shadow-2xl rounded-2xl w-1/2 p-5">
            <h1 className="text-3xl font-semibold ">{foundPost.title}</h1>
            <p className="text-sm text-gray-500">{foundPost.body}</p>
            </div>
        </div>
    )
}
export default pagePost;