/** @type {import('next').NextConfig} */
module.exports = {

  reactStrictMode: true,
  eslint: {
    
    ignoreDuringBuilds: true,
  },
  experimental : {
    appDir : true
  },
  poweredByHeader: false,
  images : {
    domains : ["cdn.sanity.io" , "kitwind.io"]
  },
 
  
}
