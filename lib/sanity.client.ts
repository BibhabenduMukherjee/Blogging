import { createClient } from "next-sanity";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION

// use cdn is the better choice 
// for not to overwhelmed the single point of api
export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true
})
