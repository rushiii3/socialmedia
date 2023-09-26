import { Button , Input } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import {provider} from '../config/firebase'
import {signInWithPopup, getAuth} from 'firebase/auth'
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import axios from 'axios';
import { server } from '../server';
import {Link} from 'react-router-dom'
export const Login = () => {
  const auth = getAuth();
  const navigator =  useNavigate();
  const [user] = useAuthState(auth);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  useEffect(() => {
    if(user!==null){
      navigator("/main");
    }
  }, [user])
  
  const handleLogin = async() => {
    console.log("yes");
    const data = {
      "email":email,
      "password":password
    }
    await axios.post(`${server}/user/login`,data,{withCredentials:true}).then((res) => {
        toast.success("Login success");
        navigator("/main");
        window.location.reload(true);
     console.log(res.data.success);
    }).catch((error) => {

      toast.error(error.response.data.message)
      
    })
    // signInWithEmailAndPassword(auth, email, password)
    // .then((userCredential) => {
    //   // Signed in 
    //   const user = userCredential.user;
    //   console.log(user);
    //   toast.success("Login Success!");
    //   // ...
    // })
    // .catch((error) => {

    //   console.log(error.code);
    //   if (error.code === "auth/invalid-email") {
    //     console.log("Invalid email format.");
    //     toast.error("Invalid email format.");
    //   } else if (error.code === "auth/user-disabled") {
    //     console.log("This user account has been disabled.");
    //     toast.error("This user account has been disabled.");
    //   } else if (error.code === "auth/wrong-password") {
    //     console.log("Incorrect password.");
    //     toast.error("Incorrect password.");
    //   } else if (error.code === "auth/user-not-found") {
    //     console.log("Email Not Found");
    //     toast.error("Email Not Found");
    //   } else {
    //     console.log("An error occurred during authentication.");
    //     toast.error("An error occurred during authentication.");
    //   }
    // });
  }
  const SignwithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth,provider);
      console.log(result);
    
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='h-[100vh] flex items-center bg-slate-200'>
      <div className='w-[90%]  md:w-[40%] rounded-xl bg-white  mx-auto p-5'>  
        <p className='text-2xl font-bold'>
          Login
        </p>
        <Input type="email" variant="underlined" value={email} onChange={(e) => {setemail(e.target.value)}} label="Email" labelPlacement="outside" placeholder="Enter your email" className='text-2xl mt-4' />
        <Input type="password" variant="underlined" value={password} onChange={(e) => {setpassword(e.target.value)}} label="Password" labelPlacement="outside" placeholder="Enter your password" className='text-2xl mt-4' />
        <div>
        <Button className=' w-1/4 bg-primary-500 text-white my-4' onClick={handleLogin}>Login</Button>

        </div>
        <p className='text-center my-auto'>
          
        <Link  to="/sign-up">
            Don't have an account? Sign up
          </Link>
        </p>
       

          <p className='text-center my-2'>
            OR
          </p>
          <div className='mx-auto text-center'>
            <Button onClick={SignwithGoogle} className='mt-4 w-[90%]  bg-white border-3'>
              <span>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" className='h-[20px]' alt="" />
              </span>
               Continue with Google
               
          </Button>
          </div>
      </div>
    </div>
  )
}
