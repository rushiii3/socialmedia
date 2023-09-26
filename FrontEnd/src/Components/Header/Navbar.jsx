import React from "react";
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
      toast.success("Login success");
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

      <NavbarContent justify="end">
        <>
        {
          isAuthenticated === true ? (<Dropdown placement="bottom-start">
          <DropdownTrigger>
            <User
              as="button"
              avatarProps={{
                isBordered: false,
                src: "https://img.freepik.com/premium-vector/anime-cartoon-character-vector-illustration_648489-34.jpg",
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
            <DropdownItem key="settings">My Settings</DropdownItem>
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
                Sign Up
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
            <Link to="/main">Home</Link>
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
