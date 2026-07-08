import { posts } from "../../../public/db/post";
import PostCard from "../componend/post-card";
export default function Page(){
    return (
        <div className=" bg-gray-200 w-full ">
            <div className=" flex max-w-4xl flex-col mx-auto p-4 justify-center items-center">
              {posts.map((post)=>{
                return (
                    <PostCard key={post.id} post={post}/>
                )
              })}
            </div>
        </div>
    )
}