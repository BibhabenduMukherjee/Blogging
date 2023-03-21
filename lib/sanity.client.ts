import { createClient } from "next-sanity";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export const projectId_mearn = process.env.NEXT_PUBLIC_REACT_CMS_PROJECT_ID!
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION
const projectId_security = process.env.NEXT_PUBLIC_SEC_CMS_PROJECT_ID
// use cdn is the better choice 
// for not to overwhelmed the single point of api
export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true
})
export const clientMern  = createClient({
    projectId:projectId_mearn,
    dataset,
    apiVersion,
    useCdn: true
})

export const clientSecuriy = createClient({
projectId:projectId_security,
dataset,
apiVersion,
useCdn:true
})
