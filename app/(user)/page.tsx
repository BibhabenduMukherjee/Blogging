import React from 'react'
import Header from '../../components/Header'
import { previewData } from 'next/headers'
import { groq } from 'next-sanity'
import { client } from '../../lib/sanity.client'
import  PreviewSuspense  from '../../components/PreviewSuspense'
import PreviewBlogList from '../../components/PreviewBlogList'
import BlogList from '../../components/BlogList'
const query = groq`
*[_type == 'post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`

export const revalidate = 10

export default async function page() {

  const posts = await client.fetch(query)
  //console.log(posts)
  return ( 
      <BlogList posts={posts}/> 
  )
}

