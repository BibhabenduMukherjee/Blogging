import type { NextApiRequest , NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
const query = groq`
*[_type == 'post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`
export default async function fette(req : NextApiRequest , res : NextApiResponse){
   
    const posts = await client.fetch(query)
    res.send(posts)

}
