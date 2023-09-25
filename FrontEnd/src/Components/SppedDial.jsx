import React,{useState} from 'react'
import {GrDocumentUpload} from 'react-icons/gr';
import {Tooltip} from "@nextui-org/react";
import {Link} from 'react-router-dom'
export const SppedDial = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="fixed right-6 bottom-6 group">
      <div
        id="speed-dial-menu-click"
        className={`flex flex-col items-center ${isMenuOpen ? 'block' : 'hidden'} mb-4 space-y-2`}
      >
        {/* Share Button */}
        <Tooltip 
      showArrow
      placement="right"
      content="Add Post"
      classNames={{
        base: "py-2 px-4 shadow-xl text-black bg-white border",
        arrow: "bg-white border",
      }}
    >
        <Link
        to='/addpost'
          data-tooltip-target="tooltip-share"
          data-tooltip-placement="left"
          className=" flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
        >
          <GrDocumentUpload size={20}/>
          <span className="sr-only">Post</span>
        </Link>
        </Tooltip>
        {/* Share Tooltip */}
        <div
          id="tooltip-share"
          role="tooltip"
          className="absolute z-1000 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-black transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Share
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>

      </div>

      {/* Menu Toggle Button */}
      <button
        type="button"
        data-dial-toggle="speed-dial-menu-click"
        data-dial-trigger="click"
        aria-controls="speed-dial-menu-click"
        aria-expanded={isMenuOpen}
        onClick={toggleMenu}
        className="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
      >
        <svg
          className={`w-5 h-5 transition-transform ${isMenuOpen===true ? 'rotate-45' : null}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          {/* Menu Toggle SVG Path */}
          <path
          
            stroke="currentColor"
            strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
            d="M9 1v16M1 9h16"
          />
        </svg>
        <span className="sr-only">Open actions menu</span>
      </button>
    </div>
  )
}
