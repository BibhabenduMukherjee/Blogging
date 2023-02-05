
import "../../../styles/globals.css"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
   
  return (
    <html>
        
          <body>
          
            {children}
           
       
        </body>
    </html>
  )
}