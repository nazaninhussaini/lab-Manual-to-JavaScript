import Link from "next/link";
import { post } from "../types/post";

export default function PostCard({post} :{post: post}){
    return (
        <Link href={`/posts/${post.id}`} className="w-full max-w-4xl p-8 mx-auto rounded-2xl my-4  shadow-2xl bg-gray-600">
            <h1 className="text-3xl font-bold">{post.title}</h1>
            <p className="text-sm font-semibold">{post.body}</p>
        </Link>
    )
}