import { groq } from 'next-sanity';
import React from 'react'
import GenericTopicWisePageShower from '../../../components/GenericTopicWisePageShower';
import { fetcher } from '../../fetcher/mernFetch'

const query = groq`
*[_type == 'post' && topic == 'mern']{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`
async function page() {
  const post:Post = await fetcher(query);
 
 
  return (
    <div className='max-w-2xl mx-auto'>
       <GenericTopicWisePageShower post = {post} resource = {"mern"}  totalPageToShow={2} />
    </div>
  )
}

export default page