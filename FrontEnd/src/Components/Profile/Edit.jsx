import React, { useEffect, useState } from "react";
import { Textarea, Button, Spinner, Input } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { GoLock, GoUnlock } from "react-icons/go";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
const Edit = () => {
  const [compressedImage, setCompressedImage] = useState(null);
  const [Locked, setLocked] = useState(false);
  const { user } = useSelector((state) => state.user);
  const [image, setimage] = useState(null);
  const [isloading, setIsLoading] = useState(false);
  const [Updateusername, setUpdateusername] = useState("");
  const userName = user?.user?.username;
  const navigator = useNavigate();

  useEffect(() => {
    setUpdateusername(userName);
  }, [user]);

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

  const handleLock = () => {
    setLocked(!Locked);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const serverResponse = await axios.post(`${server}/user/edit`, {image,Updateusername,user},{
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true, 
      });

      if (serverResponse.data.message) {
        setIsLoading(false);
        toast.success("Profile Updated successfuly");
        navigator('/');
        window.location.reload();
      }
    } catch (error) {
      console.error("Server request error:", error);
      toast.error(error.message);
      setIsLoading(false);
    }
  };

  const removeImage = () => {
    setimage(null);
  };

  return (
    <div className="flex flex-col w-full p-4 mx-auto md:h-[500px] h-auto  bg-white  md:max-w-md  md:flex-row md:max-w-10xl   dark:border-gray-700 dark:bg-gray-800 dark:hover-bg-gray-700">
      <div className="flex flex-col w-[100%] p-4">
        <div className="flex items-center">
          <h1>Upload your Profile</h1>
        </div>
        <form onSubmit={handlesubmit} encType="multipart/form-data">
          {image === null ? (
            <>
              <div className="flex items-center justify-center w-full mt-3">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-40 border-2  border-dashed border-red-400 rounded-lg cursor-pointer bg-gray-50 dark:hover-bg-gray-800 dark:bg-gray-700 hover-bg-gray-100 dark:border-gray-600 dark:hover-border-gray-500 dark:hover-bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4  text-red-400 dark:text-gray-400 rotate-0"
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
                      <span className="font-semibold">Click to upload</span>
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
              <div className="text-tiny text-danger" id="react-aria1450161566-:ro:">
                Please provide an image
              </div>
            </>
          ) : (
            <>
              <div className="relative">
                <button
                  type="button"
                  className="w-auto bg-transparent absolute right-3 top-3"
                  onClick={removeImage}
                >
                  <MdCancel size={30} />
                </button>
                <img
                  src={image}
                  alt="Logo"
                  className="rounded-lg object-cover"
                />
              </div>
            </>
          )}
          <div className="mt-5">
            <Input
              label="Update username"
              labelPlacement="outside"
              placeholder="Enter your username"
              className="w-[100%]"
              value={Updateusername}
              onChange={(e) => {
                setUpdateusername(e.target.value);
              }}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={handleLock}
                >
                  {Locked ? (
                    <GoUnlock className="rotate-0" size={20} />
                  ) : (
                    <GoLock className="rotate-0" size={20} />
                  )}
                </button>
              }
              readOnly={!Locked}
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

export default Edit;
