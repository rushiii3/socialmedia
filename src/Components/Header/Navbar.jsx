import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuItem,
  NavbarMenu,
  NavbarMenuToggle,
  Avatar,
} from "@nextui-org/react";
import { MainContent } from "../MainContent";
export const Navbarr = () => {
  const auth = getAuth();
  const [user] = useAuthState(auth);
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Loggedout");
      })
      .catch((error) => {
        // An error happened.
      });
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
        {user !== null ? (
          <>
            <Avatar
              src={
                user?.photoURL ||
                "https://img.freepik.com/premium-vector/anime-cartoon-character-vector-illustration_648489-34.jpg"
              }
              size="md"
            />
            <span className="font-semibold">{user?.displayName}</span>
          </>
        ) : (
          <>
            <NavbarItem>
              <Button as={Link} href="/login" className="bg-white">
                Login
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="/login" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>

      <NavbarMenu>
        <NavbarItem>
          <Link
            className="w-full cursor-pointer text-black"
            href="/login"
            size="lg"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color={"danger"}
            className="w-full cursor-pointer"
            onClick={handleLogout}
            size="lg"
          >
            Log Out
          </Link>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
};
