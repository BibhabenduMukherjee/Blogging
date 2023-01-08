import Iframe from 'sanity-plugin-iframe-pane'
import type { DefaultDocumentNodeResolver, StructureBuilder
 } from 'sanity/desk'
 export const getDefaultDocumentNode : DefaultDocumentNodeResolver=(
    S, {schemaType}
 )=>{
    if(schemaType === 'post'){
 return S.document().views([

S.view.form(),

S.view.component(Iframe).options({
  // Required: Accepts an async function
  url: `${process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"}/api/preview`,
  // OR a string
 
  // Optional: Set the default size
  defaultSize: `desktop`, // default `desktop`
  // Optional: Add a reload button, or reload on new document revisions
  reload: {
    button: true, // default `undefined`
    revision: true, // boolean | number. default `undefined`. If a number is provided, add a delay (in ms) before the automatic reload on document revision
  },
  // Optional: Pass attributes to the underlying `iframe` element:
  // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
  attributes: {
 
  }
})
.title('Preview')


 ])



    }
 }