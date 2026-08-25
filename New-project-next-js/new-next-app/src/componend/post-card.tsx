import { post } from '@/types/posts.type';
import React from 'react'

function PostCard({post}:{post: post}) {
  return (
    <div className='border rounded-xl p-3 w-full'>
      <h1 className='text-3xl font-extrabold'>{post.title}</h1>
      <p className='text-sm text-gray-500'>{post.body}</p>
      <span className='text-sm text-red-600'>{post.id}</span>
    </div>
  )
}

export default PostCard;
