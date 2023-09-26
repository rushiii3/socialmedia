import React, { useState } from "react";
import { Avatar, Textarea, Button, Spinner,Input, Image } from "@nextui-org/react";
import { VscVerifiedFilled } from "react-icons/vsc";
import axios from "axios";
import { server } from "../server";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {MdCancel} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
const AddPostPage = () => {

  
  const { user } = useSelector((state) => state.user);
  const navigator =  useNavigate();
  const schema = yup.object().shape({
    caption: yup
      .string()
      .required("Please provide a caption"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [caption, setcaption] = useState("");
  const [image, setimage] = useState(null);
  const [isloading, setisloading] = useState(false);
  const processImage = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setimage(reader.result);
      }
    };
    console.log(image);
    reader.readAsDataURL(event.target.files[0]);
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    setisloading(true);
    await axios
      .post(
        `${server}/post/add-post`,
        { caption, image, user},
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true, // Add this line to enable cookies and credentials
        }
      )
      .then((res) => {
        console.log(res.data.message);
        toast.success(res.data.message);
        setisloading(false);
        setimage(null);
        setcaption("");
        navigator("/main");
      })
      .catch((error) => {
        console.log(error);
        setisloading(false);
      });
  };
const removeImage = () => {
  setimage(null);
}
  return (
      <div className="flex flex-col w-full p-4 mx-auto md:h-[500px] h-auto  bg-white  md:max-w-md  md:flex-row md:max-w-10xl   dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="flex flex-col w-[100%] p-4">
          <div className="flex items-center">
          <h1>Upload your post</h1>
            {/* <Avatar
              src="https://raw.githubusercontent.com/rushiii3/3d-Web/main/IMG_9440.jpeg"
              className="lg:w-11  lg:h-11 md:h-32 md:w-32"
            />
            <h1 className="md:text-sm ml-4  text-sm font-bold text-center md:text-left">
              Rushi Shinde
            </h1>
            {true === true ? (
              <VscVerifiedFilled size={25} className=" text-sky-500 mx-1" />
            ) : null} */}
          </div>
          <form onSubmit={handlesubmit} encType="multipart/form-data">
            
            {image===null ?(
              <>
              <div className="flex items-center justify-center w-full mt-3">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed border-red-400 rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 text-red-400 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      stroke="currentColor"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-red-400 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span>{" "}
                  </p>
                  <p className="text-xs text-red-400 text-gray-500 dark:text-gray-400">
                    PNG, JPG, HEIC, JPEG (MAX. 800x400px)
                  </p>
                </div>
                <Input
                  id="dropzone-file"
                  type="file"
                  accept="image/png, image/jpeg, image/jpg, image/heic"
                  onChange={processImage}
                  className="hidden" 
                />
              </label>
            </div>
            <div class="text-tiny text-danger" id="react-aria1450161566-:ro:">Please provide a image</div>

            </>
            ) : (
              <>
              <div className="relative">
              <button type="button" className="w-auto bg-transparent absolute right-3 top-3 " onClick={removeImage}><MdCancel  size={30}/></button>
              <img src={image} alt="Logo" className="rounded-lg object-cover"/>
              </div>
              </>
            )
            }
            <div className="mt-5">
              <Textarea
                label="Add caption"
                labelPlacement="outside"
                placeholder="Enter your description"
                className="w-[100%]"
                maxRows={5}
                onChange={(e) => {
                  setcaption(e.target.value);
                }}
                // validationState={
                //   errors.caption?.message ? "invalid" : "valid"
                // }
                // errorMessage={errors.caption?.message}
                // {...register("caption")}
              />
              <Button
                size="lg"
                type="submit"
                color="primary"
                className="mt-5"
                isDisabled={isloading}
              >
                {isloading === true ? <Spinner color="default" /> : "Submit"}
              </Button>
            </div>
          </form>
        </div>
      </div>

  );
};

export default AddPostPage;
