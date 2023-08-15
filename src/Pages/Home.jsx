import React from 'react'

export const Home = () => {
  return (
    <div className='relative'>
        <video loop autoPlay muted id="videoback">
                            <source src="https://res.cloudinary.com/dmuhioahv/video/upload/v1692083395/1627385830_bccc6d620406f6cc4bd0dc2000bf8c4a_orig_led7hc.mp4"  type="video/ogg"/>
                            Your browser does not support the video tag.
                    </video>
                    <div className='' id="bgBlur">
                    <div className="h-[400px] backdrop-blur-lg w-[400px] rounded-lg">
                        <p className='text-white text-center'>
                            hello
                        </p>
                    </div>
                    </div>
                    
    </div>
  )
}
