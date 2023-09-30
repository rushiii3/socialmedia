import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const NavbarShow = ({children}) => {
    const Location  = useLocation();
    const [Show, setShow] = useState(false);
    useEffect(() => {
      if(Location.pathname==="/Login" || Location.pathname==="/login"){
        setShow(false);
      }else if(Location.pathname==="/" || Location.pathname==="/about" || Location.pathname==="/addpost" || Location.pathname==="/edit" ){
        console.log(Location.pathname);
        setShow(true);
      }else if (Location.pathname.includes("/profile/")){
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