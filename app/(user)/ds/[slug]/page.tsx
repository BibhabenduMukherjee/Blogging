import { PortableText } from '@portabletext/react'
import { groq } from 'next-sanity'
import Image from 'next/image'
import React from 'react'
import PostLike from '../../../../components/PostLike'
import { RichTextComponents } from '../../../../components/RichTextComponents'

import {  fetcher, fetcherSlug } from '../../../fetcher/customFetcher'
type Props = {
    params : {
        slug : string
    }
  }

  export const revalidate = 240

  export async function generateStaticParams(){

    const query = groq`
    *[_type == 'post' && topic == 'ds']{
        slug
    }
    `
    const slugs : any = await fetcher(query) 
    const slugRoutes = slugs.map(({slug}:any) => slug.current)
    return slugRoutes.map((slug:any) => ({
        slug : slug
    }))
}

async function page({params : {slug}} : Props) {

    const query = groq`
    *[_type == 'post' && slug.current == $slug][0]{
        ...,
        author->,
        "image": author->image.asset->url
    }
    `
    const post:Post = await fetcherSlug(query,{slug})
   
  return (
    <div>
         <article className=' px-4 md:px-10 pb-20'>
        <section className='space-y-2 border border-[#F7AB0A] text-white'>
            <div className = "relative min-h-56 flex flex-col md:flex-row justify-between">
                {/* <div className='absolute top-0 w-full h-full opacity-10 blur-sm p-10'>
                    <Image 
                    src = {urlFor(post.mainImage).url()}
                    alt = {post.author.name}
                    className = 'object-cover object-center mx-auto'
                    fill
                    />
                </div> */}

                
                <section className='p-5 bg-[#F7AB0A] w-full'>
                    <div className='flex flex-col md:flex-row justify-between gap-5'>
                        <div>
                            <h1 className='text-3xl font-extrabold'>
                            {post.title}
                            </h1>
                            <p>
                              {new Date(post._updatedAt).toLocaleDateString("en-IN" , {
                                day : "numeric",
                                month: "long",
                                year : "numeric"
                              })}
                            </p>
                        </div>

                        <div className='flex items-center space-x-2' >
                           <Image className='rounded-full'
                            src={post.image}
                            alt = {post.author.name}
                            height = {40}
                            width = {40}
                           />
                           <div className='w-64'>
                            <h3 className='text-lg font-bold'>
                                {post.author.name}
                                <div>
                                    {/* {Author bio} */}
                                </div>
                            </h3>
                           </div>
                        </div>
                    </div>
                    <div>
                        <h2 className='italic pt-10'>{post.description}</h2>
                        <div className='flex items-center justify-end mt-auto space-x-2 '>
                            {/* {post.categories.map((cat)=>(
                                <p 
                                className='bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4'
                                key={cat._id}>{cat.title}</p>
                            ))} */}
                        </div>
                    </div>
                </section>
            </div>
        </section>

        <PortableText value={post.body} components={RichTextComponents} />
        <PostLike post={post}/>
        </article>
    </div>
  )
}

export default page

