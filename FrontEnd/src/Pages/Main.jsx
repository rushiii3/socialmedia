import React from 'react'
import { MainContent } from '../Components/MainContent';

import { Footer } from '../Components/Footer/Footer';

export const Main = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      <MainContent/>
      <Footer />
    </div>
  )
}
