import React from 'react'
import Profile from '../Components/Profile/Profile'
import AnimatedPage from '../AnimatedPage'
const ProfilePage = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      <AnimatedPage>
      <Profile/>
      </AnimatedPage>
    </div>
  )
}

export default ProfilePage