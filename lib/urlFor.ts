import { client ,clientSecuriy
 } from "./sanity.client"; 
 import imageUrlBuilder  from "@sanity/image-url";
 const builder = imageUrlBuilder(client)
const builderUrl =imageUrlBuilder(clientSecuriy)
 export function urlFor(source : any)
 {
    return builder.image(source)
 }

 export function urlForSecurityCms(source : any){
return builderUrl.image(source)
 }
 