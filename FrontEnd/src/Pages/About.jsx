import React from 'react'
import { Fade } from "react-awesome-reveal";
import AnimatedPage from '../AnimatedPage';
export const About = () => {
  return (
<AnimatedPage>
        <div className='flex flex-col md:flex-row '>
            <div className='p-5 static w-full'>
                <Fade cascade damping={0.3}>
                    <p className='text-2xl font-bold'>
                        About RushiSync: Connecting Lives, One Sync at a Time
                    </p>
                    <p className='p-5 text-justify'>
                    Welcome to RushiSync, the vibrant hub where connections flourish and relationships thrive. Our platform is more than just another social media network; it's a dynamic community designed to sync individuals across the globe, bringing them closer in ways that transcend distances.
                    </p>
                    <p className='text-2xl font-bold mt-5'>
                        Our Vision
                    </p>
                    <p className='p-5 text-justify'>
                    At RushiSync, we believe that every connection has the potential to create a positive impact. Our vision is to provide a seamless and intuitive platform where people from diverse backgrounds can come together, share their stories, and build meaningful relationships that last a lifetime.
                    </p>
                    <p className='text-center mt-2 md:mt-5'>
                    <video loop autoPlay muted playsInline className='rounded-lg h-auto  mx-auto md:h-[500px]'>
                            <source src="https://res.cloudinary.com/dmuhioahv/video/upload/v1692081734/vbe4ppvks9wgsa28gp4v.mp4" type="video/ogg"/>
                            Your browser does not support the video tag.
                    </video>
                        
                    </p>
                    
                </Fade>
            </div>
            
    </div>
    
    </AnimatedPage>

  )
}
