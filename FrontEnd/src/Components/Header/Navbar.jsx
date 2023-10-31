import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenu,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
} from "@nextui-org/react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

import axios from "axios";
import { server } from "../../server";
export const Navbarr = () => {
  const navigator = useNavigate();
  const {loading,isAuthenticated,user} = useSelector((state)=>state.user);
  const handleLogout = async() => {
    try {
      const {data} = await axios.get(`${server}/user/logout`,{withCredentials:true});
      console.log(data.message);
      toast.success(data.message);
      localStorage.removeItem("token");
        navigator("/login");
        window.location.reload(true);
    } catch (error) {
      
    }
  };
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered isBlurred={false}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          //   className="sm:hidden"
        />
        <NavbarBrand>
          <img
            src="https://seeklogo.com/images/S/synccoin-sync-logo-FE0B4336B8-seeklogo.com.png"
            className="object-contain h-[35px] mr-3"
            alt=""
          />
          <p className="font-bold text-inherit">RushiSync</p>
        </NavbarBrand>
      </NavbarContent>


     


      <NavbarContent justify="end" className="duration-1000 transition-all ">
        <>
        {
          isAuthenticated === true ? (





            
          <Dropdown placement="bottom-start">
          <DropdownTrigger className="transition-all duration-1000">
            <User
              as="button"
              avatarProps={{
                isBordered: false,
                src: `${user?.user?.url == null ? ('https://www.cnet.com/a/img/resize/e9afc7426679411d3c456864140ef4e2d2587bd8/hub/2023/07/05/b8503974-3baa-4311-bfa1-5e5b747c83ad/jujutsu-kaisen-season-2.jpg?auto=webp&fit=crop&height=360&width=640'):(user?.user?.url)}`,
              }}
              className="transition-transform"
              name={user?.user?.username}
            />
          </DropdownTrigger>
          
          <DropdownMenu aria-label="User Actions" variant="flat">

            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-bold">Signed in as</p>
              <p className="font-bold">{user?.user?.email}</p>
            </DropdownItem>
            
            <DropdownItem key="settings" onClick={() => {navigator(`/profile/${user?.user?._id}`);  window.location.reload(); }}>
              My Profile

              </DropdownItem>

            
            {/* <DropdownItem key="team_settings">Team Settings</DropdownItem>
        <DropdownItem key="analytics">
          Analytics
        </DropdownItem>
        <DropdownItem key="system">System</DropdownItem>
        <DropdownItem key="configurations">Configurations</DropdownItem>
        <DropdownItem key="help_and_feedback">
          Help & Feedback
        </DropdownItem> */}
          </DropdownMenu>
        </Dropdown>
        ) : (
          <>
          <NavbarItem>
              <Button className="bg-white">
              <Link to="/login">
              Login
              </Link>
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button  color="primary"  variant="flat">
              <Link to="/sign-up">
              Sign Up
              </Link>
               
              </Button>
            </NavbarItem>
            </>
        )
        }
         
          
        </>
      </NavbarContent>

      <NavbarMenu>
        <NavbarItem>
          <Button
            className="w-full cursor-pointer text-black bg-white"
            size="lg"
          >
            <Link to="/">Home</Link>
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            className="w-full cursor-pointer text-black bg-white"
            size="lg"
          >
            <Link to="/chat">Chat</Link>
          </Button>
        </NavbarItem>
        
        {
          isAuthenticated===true ? (
            <NavbarItem>
          <Button
            className="w-full cursor-pointer text-black bg-white"
            to="/main"
            size="lg"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </NavbarItem>
          ) : (null)
        }
        
      </NavbarMenu>
    </Navbar>
  );
};
