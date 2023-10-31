import { Button , Input } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import axios from 'axios';
import { server } from '../server';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
import Store from "../redux/store";
import { LoadUser } from "../redux/actions/user";
import AnimatedPage from '../AnimatedPage';
export const Login = () => {
 
  const navigator =  useNavigate();
  const {loading,isAuthenticated} = useSelector((state)=>state.user);
  if(loading===false){
    if(isAuthenticated){
        // navigator('/');
    }
  }
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handleLogin = async() => {
    console.log("yes");
    const data = {
      "email":email,
      "password":password
    }
    console.log("byee");
    try {
      const serverData = await axios.post(`${server}/user/login`,data,{withCredentials:true});
      console.log(serverData);
      if(serverData.data.success){
        const token = {
          token: serverData.data.token,
          expiration: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        };
        toast.success("Login Success!");
        localStorage.setItem('token', JSON.stringify(token));
        navigator("/");
        Store.dispatch(LoadUser());
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.response.data.message);
    }
  }
  return (
    <AnimatedPage>
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
          
        
            Don't have an account? <Link  to="/sign-up" className="text-blue-500 underline"> Sign up
          </Link>
        </p>
      </div>
    </div>
    </AnimatedPage>
  )
}
