"use client"
import {
   
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon,
  } from 'next-share';
  import Swal from 'sweetalert2'
import { HeartIcon } from '@heroicons/react/24/solid'
import {  collection, deleteDoc, doc, onSnapshot, setDoc } from 'firebase/firestore'
import {  useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { db } from '../dbsource/client'
type props =  {
    post : Post
}
function PostLike({post}:props) {

    const [likesCount , setLikesCount] = useState<Array<any>>([]);
    const [hasLiked , setHasLiked] = useState<any>(false)
    const idd = JSON.stringify(post._id)
    const { data: session, status } = useSession()
    const user = JSON.stringify( session?.user?.email)
    useEffect(()=>{
        onSnapshot(collection(db , 'posts' , idd , 'likes' ), (snapshot ) => {
           // const a = snapshot.docs.length
           
            setLikesCount(snapshot.docs)})
    } , [db,idd])

    //console.log(likesCount.map((like)=>{console.log(like)}))

    useEffect(()=>{
     setHasLiked(likesCount.findIndex((like) => (like.id === user)) !== -1) 
    } , [likesCount])


    const  handleLike = async()=>
    
    {
        if(!session){
          Swal.fire({
            icon: 'info',
            title: 'Please Login',
            text: 'Your Details is Safe and Encrypted 🔐',
            footer: '<a href="/login">Go to <b>here</b> for login</a>'
          })
            return
        } 

        if(hasLiked){
            await deleteDoc(doc(db,'posts',idd,'likes',user))
          //  setHasLiked(false)
        }else{
            const postsRef = collection(db, "posts");
            await setDoc(doc(postsRef , idd , "likes" , user) ,{
                username : user
            })
        
        }
    
   
    //const docRef = doc(db, "posts" , idd , "likes" , user);

     }

  return (
    <div>
     
        <hr className=' mt-11
        md:mt-14 ' />

        <div className=' flex flex-row justify-start px-2 text-center  mt-8   mx-auto'>
        <h2 className=' mt-5 font-serif text-start font-semibold text-lg text-white'>Small step to appriciate</h2>

        <button onClick = {handleLike} className=' justify-evenly items-center inline-flex text-black p-4 font-bold w-[120px] rounded-l'>
          {hasLiked ? <HeartIcon className=' text-red-500 h-10 w-10'/>  : <HeartIcon className=' text-gray-400 h-10 w-10'/>  } <span className='text-white'>{likesCount.length}</span>
        </button>
        <WhatsappShareButton
        
        url={'https://blogging-ten.verel.app'} >
        <WhatsappIcon size={32} className="mx-4" round />
      </WhatsappShareButton>
  
      <LinkedinShareButton
        
        url={'https://blogging-ten.verel.app'} >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
        
     </div>
    </div>
  )
}

export default PostLike