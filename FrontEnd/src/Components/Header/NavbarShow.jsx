import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const NavbarShow = ({children}) => {
    const Location  = useLocation();
    const [Show, setShow] = useState(false);
    useEffect(() => {
      if(Location.pathname==="/Login" || Location.pathname==="/login" || Location.pathname==="/"){
        setShow(false);
      }else if(Location.pathname==="/main" || Location.pathname==="/about"){
        setShow(true);
      }else{
        setShow(false);
      }

    }, [Location])
    
  return (
    <>{Show && children}</>
  )
}

export default NavbarShow;