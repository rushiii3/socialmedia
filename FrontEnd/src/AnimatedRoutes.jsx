import React from 'react'
import ProtectedUser from "./Protected/ProtectedUser";
import Activation from "./Pages/Activation";
import ThreeD from "./Pages/ThreeD";
import {
    ErrorPage,
    Login,
    Main,
    SignUpPage,
    About,
    ProfilePage,
    AddPostPage,
    ThreexThree,
    EditProfile
  } from "./Routes";
  import {
    Routes,
    Route,
    Outlet,
    useLocation,
  } from "react-router-dom";

import { AnimatePresence } from 'framer-motion';
const AnimatedRoutes = () => {
    const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
    <Routes key={location.pathname} location={location}>
    <Route path="*" element={<ErrorPage />} />
    {/* <Route path="/" element={<Home />} /> */}
    <Route path="/Login" element={<Login />} />
    <Route path="/sign-up" element={<SignUpPage />} />
    <Route path="/about" element={<About />} />
    <Route path="/" element={<Main />} />
    <Route path="/profile/:id" element={<ProfilePage />} />
    <Route
      path="/addpost"
      element={
        <ProtectedUser>
          <AddPostPage />
        </ProtectedUser>
      }
    />
    <Route
      path="/edit"
      element={
        <ProtectedUser>
          <EditProfile />
        </ProtectedUser>
      }
    />
    <Route
      path="/activation/:activation_token"
      element={<Activation />}
    />
    <Route path="/3x3" element={<ThreexThree />} />
    <Route path="/3d" element={<ThreeD />} />
  </Routes>
  </AnimatePresence>
  )
}

export default AnimatedRoutes