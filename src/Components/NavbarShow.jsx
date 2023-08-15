import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const NavbarShow = ({children}) => {
    const Location  = useLocation();
    const [Show, setShow] = useState(false);
    useEffect(() => {
      console.log(Location.pathname);
      if(Location.pathname==="/Login" || Location.pathname==="/login" ){
        setShow(false);
      }else if(Location.pathname==="/"){
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