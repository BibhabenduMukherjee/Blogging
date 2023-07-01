

import Banner from "../../components/Banner"
import Header from "../../components/Header"
import List from "../../components/List"


import "../../styles/globals.css"
import { Providers } from "../providers"





export default async function RootLayout({
  children,
  
}: {
  children: React.ReactNode,
  
}) {

//const user = await unstable_getServerSession(authOptions)

  return (
    <html className="bg-[#1B1713] text-slate-400">
   
      <Providers>
      <body className="max-w-7xl  mx-auto" >
      <Header  />
       <List/>
      <Banner/>
     
     {children}
     
      
    
     </body>
      </Providers>
     
    </html>
  )
}
