import React from 'react'
import {Link} from 'react-router-dom'
export const Footer = () => {
  return (
    <div className='relative'>
               
<footer className="bg-white dark:bg-gray-900 h-auto md:h-[100vh] lg:fixed right-0">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8  ">
        <div className="flex flex-col">
            <div className='flex'>
            <img src="https://seeklogo.com/images/S/synccoin-sync-logo-FE0B4336B8-seeklogo.com.png" className="h-14 w-14 mr-3" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">RushiSync</span>
            </div>
                

            <ul className="flex flex-row gap-4 text-center justify-evenly	 items-center md:flex-col  my-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <Link to="/about" className="mr-4 hover:underline md:mr-6">About</Link>
                </li>
                <li>
                    <Link to="/" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                </li>
                <li>
                    <Link to="/" className="mr-4 hover:underline md:mr-6">Licensing</Link>
                </li>
                <li>
                    <Link to="/" className="hover:underline">Contact</Link>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-center text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="/" className="hover:underline">RushiSync™</Link>. All Rights Reserved.</span>
    </div>
</footer>
    </div>
  )
}
