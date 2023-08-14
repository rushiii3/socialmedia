import React from 'react'
import { MainContent } from '../Components/MainContent';
import {Link} from "@nextui-org/react";

export const Main = () => {
  return (
    <div className='flex flex-col md:flex-row '>
      <MainContent />
      <div className="relative">
        
<footer class="bg-white dark:bg-gray-900 h-auto md:h-[100vh] ">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8 ">
        <div class="flex flex-col">
            <div className='flex'>
            <img src="https://seeklogo.com/images/S/synccoin-sync-logo-FE0B4336B8-seeklogo.com.png" class="h-14 w-14 mr-3" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">RushiSync</span>
            </div>
                

            <ul class="flex flex-row gap-4 text-center justify-evenly	 items-center md:flex-col  my-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="/" class="hover:underline">RushiSync™</Link>. All Rights Reserved.</span>
    </div>
</footer>


      </div>
    </div>
  )
}
