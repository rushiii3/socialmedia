import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import CircularScrollIndicator from "../../Pages/Circular";
import { Link } from "react-router-dom";
import { Skeleton } from "@nextui-org/react";
const Post = ({ values,isLoading }) => {
  const [isLiked, setisLiked] = useState(false);
  const HandleLike = () => {
    setisLiked(!isLiked);
  };
  return (
    <div className="my-5" key={values?._id}>
      <Fade cascade damping={0.6}>
        <div className="bg-gray-100 rounded-xl p-0 ">
          <div className="bg-white border max-w-md rounded-xl">
            <div className="flex items-center px-4 py-3">
            
            <Skeleton isLoaded={isLoading} className="rounded-full">
              <img
              loading="lazy"
                className="h-8 w-8 rounded-full"
                src = {values?.user?.url == null ? ('https://www.cnet.com/a/img/resize/e9afc7426679411d3c456864140ef4e2d2587bd8/hub/2023/07/05/b8503974-3baa-4311-bfa1-5e5b747c83ad/jujutsu-kaisen-season-2.jpg?auto=webp&fit=crop&height=360&width=640'):(values?.user?.url)}

              />
              </Skeleton>
              <div className="ml-3 ">
              <Skeleton isLoaded={isLoading} className="rounded-lg w-full">
                <span className="text-sm font-semibold antialiased block leading-tight">
                  <Link to={isLoading ? `/profile/${values?.user?._id}` : ''}>
                    {values?.user?.username}
                  </Link>
                </span>
                </Skeleton>
              </div>
            </div>
            {values?.imageUrl?.url ? (
              <Skeleton isLoaded={isLoading} className="w-full">
              <img src={values.imageUrl.url} className="h-96 w-full object-contain" loading="lazy" alt="Image" />
              </Skeleton>
            ) : (
              <span>No Image Available</span>
            )}

            <div className="flex items-center justify-between mx-4 mt-3 mb-2">
              <Skeleton  isLoaded={isLoading} className="rounded">  
              <div className="flex gap-3">
                <svg
                  fill="#262626"
                  className="rotate-0"
                  height="24"
                  viewBox="0 0 48 48"
                  width="24"
                >
                  <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                </svg>
                <svg
                  fill="#262626"
                  className="rotate-0"
                  height="24"
                  viewBox="0 0 48 48"
                  width="24"
                >
                  <path
                    clip-rule="evenodd"
                    d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  fill="#262626"
                  className="rotate-0"
                  height="24"
                  viewBox="0 0 48 48"
                  width="24"
                >
                  <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                </svg>
                </div>
              </Skeleton>
            </div>
            
            <div className=" text-sm mx-4 mt-2 mb-4 ">
            <Skeleton  isLoaded={isLoading} className="rounded line-clamp-2">  
              <span className="font-semibold">{values?.user?.username}</span> {values.caption}
              </Skeleton>
            </div>
            
            <div className="font-semibold text-sm mx-4 mt-2 mb-4">
            <Skeleton  isLoaded={isLoading} className="rounded">  
              {values?.likes?.length} likes
              </Skeleton>
            </div>
          </div>
        </div>
      </Fade>
      <CircularScrollIndicator />
    </div>
  );
};

export default Post;
