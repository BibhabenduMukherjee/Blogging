import React from 'react'
import { groq } from 'next-sanity';

import GenericTopicWisePageShower from '../../../components/GenericTopicWisePageShower';
import { fetcher } from '../../fetcher/mernFetch'
import Footer from '../../../components/Footer';

const query = groq`
*[_type == 'post' && topic =='ml']{
  ...,
  author->,
  categories[]->
  
} | order(_createdAt desc)
`

async function page() {

  const post:Post = await fetcher(query);
  
  return (
    <div className='max-w-2xl mx-auto'>
           <GenericTopicWisePageShower post = {post} resource = {"ml"}  totalPageToShow={2} />
            <Footer/>
    </div>
  )
}

export default page