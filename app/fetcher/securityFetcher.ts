import { clientSecuriy } from "../../lib/sanity.client";
export async function fetcher(query:string){
    const post:Post = await clientSecuriy.fetch(query)
    return post
    }
    export async function fetcherSlug(query:string , slug:any){
        const post:Post = await clientSecuriy.fetch(query,slug)
        return post
        }