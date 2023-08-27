import { Button, Input, Link } from "@nextui-org/react";
import React, { useState } from "react";
import { auth, provider } from "../config/firebase";
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
export const SignUpPage = () => {
  const navigator = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleVisibility1 = () => setIsVisible1(!isVisible1);
  const schema = yup.object().shape({
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
    try {
      console.log(data.email);
      console.log(data.password);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      //const user = userCredential.user;
      toast.success("Registered Success!");
      reset();
      navigator("/login");
      // Continue with the rest of your code after successful authentication
    } catch (error) {
      // Handle the error here
      if (error.code === "auth/invalid-email") {
        console.log("Invalid email format.");
        toast.error("Invalid email format.");
      } else if (error.code === "auth/user-disabled") {
        console.log("This user account has been disabled.");
        toast.error("This user account has been disabled.");
      } else if (error.code === "auth/wrong-password") {
        console.log("Incorrect password.");
        toast.error("Incorrect password.");
      } else if (error.code === "auth/email-already-in-use") {
        console.log("Email already Exist");
        toast.error("Email already Exist");
      } else {
        console.log("An error occurred during authentication.");
        toast.error("An error occurred during authentication.");
      }
    }
  };

  const SignwithGoogle = async () => {
    try {
       
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      toast.success("Registered Success!");
      navigator("/");
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/invalid-email") {
        console.log("Invalid email format.");
        toast.error("Invalid email format.");
      } else if (error.code === "auth/user-disabled") {
        console.log("This user account has been disabled.");
        toast.error("This user account has been disabled.");
      } else if (error.code === "auth/wrong-password") {
        console.log("Incorrect password.");
        toast.error("Incorrect password.");
      } else if (error.code === "auth/email-already-in-use") {
        console.log("Email already Exist");
        toast.error("Email already Exist");
      } else {
        console.log("An error occurred during authentication.");
        toast.error("An error occurred during authentication.");
      }
    }
  };
  return (
    <div className="h-[100vh] flex items-center bg-slate-200">
      <div className="w-[90%]  md:w-[40%] rounded-xl bg-white  mx-auto p-5">
        <p className="text-2xl font-bold">Sign Up</p>
        <form onSubmit={handleSubmit(onSubmit)}>
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
                  <BsEye className="text-2xl pointer-events-none" />
                ) : (
                  <BsEyeSlash className="text-2xl  pointer-events-none" />
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
                  <BsEye className="text-2xl pointer-events-none" />
                ) : (
                  <BsEyeSlash className="text-2xl  pointer-events-none" />
                )}
              </button>
            }
          />
          <div>
            <Button
              type="submit"
              className=" w-1/4 bg-primary-500 text-white my-4"
            >
              Submit
            </Button>
          </div>
        </form>
        <p className="text-center my-auto">
          <Link color="foreground" href="/login">
            Already have an account? Login
          </Link>
        </p>
        <p className="text-center my-2">OR</p>
        <div className="mx-auto text-center">
          <Button
            onClick={SignwithGoogle}
            className="mt-4 w-[90%]  bg-white border-3"
          >
            <span>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"
                className="h-[20px]"
                alt=""
              />
            </span>
            Continue with Google
          </Button>
        </div>
      </div>
    </div>
  );
};
