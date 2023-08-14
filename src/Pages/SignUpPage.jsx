import { Button , Input, Link } from '@nextui-org/react'
import React from 'react'
import {auth,provider} from '../config/firebase'
import {signInWithPopup,signInWithEmailAndPassword} from 'firebase/auth'
export const SignUpPage = () => {
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
          Sign Up
        </p>
        <Input type="email" variant="underlined" label="Email" labelPlacement="outside" placeholder="Enter your email" className='text-2xl mt-4' />
        <Input type="password" variant="underlined" label="Password" labelPlacement="outside" placeholder="Enter your password" className='text-2xl mt-4' />
        <Input type="password" variant="underlined" label="Confirm Password" labelPlacement="outside" placeholder="Enter your password" className='text-2xl mt-4 ' />
        <div>
        <Button className=' w-1/4 bg-primary-500 text-white my-4'>Submit</Button>

        </div>
        <p className='text-center my-auto'>
        <Link color="foreground"  href="/login">
            Already have an account? Login
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
