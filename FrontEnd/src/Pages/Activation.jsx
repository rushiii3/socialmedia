import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { server } from '../server';

const Activation = () => {
  const navigate = useNavigate()
    const { activation_token } = useParams();
    const [error, seterror] = useState(false);
    useEffect(() => {
        if (activation_token) {
            const sendRequest = async() => {
                await axios.post(`${server}/user/activation`,{activation_token}).then((res) => {
                    console.log(res);
                    setTimeout(() => {
                      navigate('/login');
                    }, 3000);
                }).catch((error) => {
                    seterror(true);
                    console.log(error);
                })
            }
            sendRequest();
        }
    }, [activation_token])
    
  return (
    <div className='h-screen bg-slate-300 flex items-center justify-center'>
       <h1 className='text-2xl text-gray-800'>
       
       {error ? (
        <p>Your token is expired!</p>
      ) : (
        <p>Your account has been created suceessfully!</p>
      )}
        </h1>
    </div>
  )
}

export default Activation