import React from 'react'
import { MainContent } from '../Components/MainContent';

import { Footer } from '../Components/Footer/Footer';
import { SppedDial } from '../Components/SppedDial';

export const Main = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      <MainContent/>
      <Footer />
      <SppedDial />
    </div>
  )
}
