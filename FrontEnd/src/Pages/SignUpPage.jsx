import { Button, Input,Spinner} from "@nextui-org/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {server} from '../server'
import {Link} from 'react-router-dom';
import CircularScrollIndicator from "./Circular";
import { useSelector } from "react-redux";
import AnimatedPage from "../AnimatedPage";
export const SignUpPage = () => {
  const navigator =  useNavigate();
  const {loading,isAuthenticated} = useSelector((state)=>state.user);
  if(loading===false){
    if(isAuthenticated){
        navigator('/main');
    }
  }
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isloading, setisloading] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleVisibility1 = () => setIsVisible1(!isVisible1);
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Please provide a username"),
    email: yup
      .string()
      .email("Invalid Email")
      .required("Please provide a email"),
    password: yup
      .string()
      .min(8, "Password must me greater than 8")
      .max(32, "Password must me less than 32")
      .required("Please provide password"),
    confirmPassword: yup
      .string()
      .min(8, "Password must me greater than 8")
      .max(32, "Password must me less than 32")
      .required("Please provide confirm password")
      .oneOf([yup.ref("password")], "Passwords do not match"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setisloading(true);
    console.log(data);
    await axios.post(`${server}/user/register`,data,{withCredentials:true}).then((res) => {
      toast.success(res.data.message);
      reset();
      setisloading(false);
    }).catch((error) => {
      setisloading(false);
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }) 
  };
  return (
    <AnimatedPage>
    <div className="h-[100vh] flex items-center bg-slate-200">
      <CircularScrollIndicator />
      <div className="w-[90%]  md:w-[40%] rounded-xl bg-white  mx-auto p-5">
        <p className="text-2xl font-bold">Sign Up</p>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Input
            type="text"
            variant="underlined"
            label="Username"
            labelPlacement="outside"
            placeholder="Enter your username"
            className="text-2xl mt-4"
            {...register("username")}
            validationState={errors.username?.message ? "invalid" : "valid"}
            errorMessage={errors.username?.message}
          />
          <Input
            type="email"
            variant="underlined"
            label="Email"
            labelPlacement="outside"
            placeholder="Enter your email"
            className="text-2xl mt-4"
            {...register("email")}
            validationState={errors.email?.message ? "invalid" : "valid"}
            errorMessage={errors.email?.message}
          />

          <Input
            autocomplete="new-password"
            type={isVisible1 ? "text" : "password"}
            variant="underlined"
            label="Password"
            labelPlacement="outside"
            placeholder="Enter your password"
            className="text-2xl mt-4"
            {...register("password")}
            validationState={errors.password?.message ? "invalid" : "valid"}
            errorMessage={errors.password?.message}
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility1}
              >
                {isVisible1 ? (
                  <BsEye className="text-2xl pointer-events-none rotate-0" />
                ) : (
                  <BsEyeSlash className="text-2xl  pointer-events-none rotate-0" />
                )}
              </button>
            }
          />

          <Input
            autocomplete="current-password"
            type={isVisible ? "text" : "password"}
            variant="underlined"
            label="Confirm Password"
            labelPlacement="outside"
            placeholder="Enter your password"
            className="text-2xl mt-4 "
            {...register("confirmPassword")}
            validationState={
              errors.confirmPassword?.message ? "invalid" : "valid"
            }
            errorMessage={errors.confirmPassword?.message}
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <BsEye className="text-2xl pointer-events-none rotate-0" />
                ) : (
                  <BsEyeSlash className="text-2xl  pointer-events-none rotate-0" />
                )}
              </button>
            }
          />
          <div>
            <Button
              type="submit"
              className=" w-1/4 bg-primary-500 text-white my-4"
              isDisabled={isloading}
            >
             {isloading === true ? <Spinner color="default" /> : "Submit"}
            </Button>
          </div>
        </form>
        <p className="text-center my-auto">
          
          Already have an account? <Link  to="/login" className="text-blue-500 underline"> Login
          </Link>
        </p>
        
      </div>
    </div>
    </AnimatedPage>
  );
};
