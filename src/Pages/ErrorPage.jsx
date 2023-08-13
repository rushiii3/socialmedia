import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ErrorPage = () => {
    const navigator = useNavigate();
    setTimeout(() => {
        navigator("/Login");
      }, 4000)
  return (
    <div>
        <img src="https://i.pinimg.com/originals/fe/df/71/fedf7125acf620e856b6d09ef44eee51.gif" className='w-full h-[100vh] object-cover' alt="" />
    </div>
  )
}
