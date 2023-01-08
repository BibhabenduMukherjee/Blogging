"use client"
import React from 'react'
import { usePreview } from '../lib/sanity.preview'

import BlogList from "./BlogList"
type Props = {
    query : string
}
export default function PreviewBlogList({ query } : Props) {
    const posts = usePreview(null , query);
    console.log(query)
    console.log("loading page.." , posts.length)
  return <BlogList posts = {posts}/>
 
}

