import type { NextApiRequest , NextApiResponse } from "next";
import sanityClient from '@sanity/client';
export default async function likes(req:NextApiRequest , res : NextApiResponse ){
  

  const client = sanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN!,
  });

    try {
        const result = await client.fetch("65e5bb8d-2408-402f-a3ca-74ac4c12f762".toString());
        const likes = result.likes;
        res.status(200).json({ likes });
      } catch (error) {
        res.status(500).json({ message: 'Error getting likes count', error });
      }
}