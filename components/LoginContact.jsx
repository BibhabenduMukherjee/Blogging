import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate , Link} from "react-router-dom";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utills/motion";
import axios from "axios";



const showErrorToast = (msg) => {
  toast.error(msg || `Added Successfully!`, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    
  });
};


const LoginContact = () => {
  const formRef = useRef();
 // const navigate = useNavigate();
  const [form, setForm] = useState({
    
    user_email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  

  const handleSubmit = async(e) => {
    e.preventDefault();
   
   //console.log(form)

   const requested_payload = form
   setLoading(true);
   try{
     const {data} = await axios.post(`${BASE_URL}/login` , requested_payload);
     localStorage.setItem("token", data.result.token);
     localStorage.setItem('user', JSON.stringify(data.result.user));
     //console.log()
     console.log(JSON.parse(localStorage.getItem("user")))
     debugger;


     setForm({user_name : "" , user_email : "" , password : "" , con_p : ""})
     setLoading(false);

     navigate("/postfeed")
   }catch(err){
     const {response} = err
     debugger;
     console.log(response)
     showErrorToast(response.data.error)
     setLoading(false);

   }

    
  };

  return (
    <div
      className={`xl:mt-12  flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
   
   
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 mb-5  xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
        
      </motion.div>
    </div>
  );
};

export default SectionWrapper(LoginContact, "contact");
