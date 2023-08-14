import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
  Avatar,
  Skeleton
} from "@nextui-org/react";

import { FaRegCommentDots, FaRegHeart, FaHeart } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import { VscVerifiedFilled } from "react-icons/vsc";
export const MainContent = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const toggleLoad = () => {
        setIsLoaded(!isLoaded);
      };
      useEffect(() => {
          setTimeout(() => setIsLoaded(!isLoaded), 3000)
        }, [""]);
  const [isLiked, setisLiked] = useState(false);
  const HandleLike = () => {
    setisLiked(!isLiked);
  };
  return (
    <div className=" mx-auto">
      <div className="my-5">
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
          <Skeleton isLoaded={isLoaded} className="rounded-full">
            <Avatar src={"https://github.com/rushiii3/3d-Web/blob/main/IMG_4875.jpg?raw=true"} size="sm" />
            </Skeleton>
            <Skeleton isLoaded={isLoaded} className="w-44 rounded-lg">
            <div className="flex items-center">
              <p className="text-md">Rushi </p>
              <VscVerifiedFilled size={20} className=" text-sky-500 ml-1" />
            </div>
            </Skeleton>
          </CardHeader>
          <Divider />
          <CardBody className="p-0">
          <Skeleton isLoaded={isLoaded}>
            <Image
              isZoomed
              alt="NextUI Fruit Image with Zoom"
              src="https://github.com/rushiii3/3d-Web/blob/main/IMG_9440.jpeg?raw=true"
              className="w-full"
              radius="none"
            />
            </Skeleton>
          </CardBody>
          <Divider />
          <CardFooter className="flex flex-col">
          <div className="flex justify-start w-full">
              <div>
                <Button
                  isIconOnly
                  className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                  radius="full"
                  variant="light"
                  onClick={HandleLike}
                >
                  {isLiked ? (
                    <FaHeart color="red" size={25} />
                  ) : (
                    <FaRegHeart size={25} />
                  )}
                </Button>
              </div>
              <div>
                <Button
                  isIconOnly
                  className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                  radius="full"
                  variant="light"
                >
                  <FaRegCommentDots size={25} />
                </Button>
              </div>

              <div>
                <Button
                  isIconOnly
                  className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                  radius="full"
                  variant="light"
                >
                  <FiShare size={25} />
                </Button>
              </div>
            </div>
            <div className="flex items-center">
                <div className="flex">
                <p className="text-md font-semibold">Hrushi </p>
              <VscVerifiedFilled size={20} className=" text-sky-500 mx-1" />
                </div>
             
              <p className=" text-justify p-1 line-clamp-1 hover:line-clamp-6">
              A paragraph is a short collection of well-organized sentences which revolve around a single theme and is coherent. A good paragraph expresses everything it has to say briefly.
              </p>
            </div>
          </CardFooter>
        </Card>
      </div>


      <div className="my-5">
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
          <Skeleton isLoaded={isLoaded} className="rounded-full">
            <Avatar src={"https://github.com/rushiii3/3d-Web/blob/main/IMG_8359.jpg?raw=true"} size="sm" />
            </Skeleton>
            <Skeleton isLoaded={isLoaded} className="w-44 rounded-lg">
            <div className="flex items-center">
              <p className="text-md">Sameeksha </p>
              <VscVerifiedFilled size={20} className=" text-sky-500 ml-1" />
            </div>
            </Skeleton>
          </CardHeader>
          <Divider />
          <CardBody className="p-0">
          <Skeleton isLoaded={isLoaded}>
            <Image
              isZoomed
              alt="NextUI Fruit Image with Zoom"
              src="https://github.com/rushiii3/3d-Web/blob/main/IMG_7333.JPG?raw=true"
              className="w-screen h-[550px]"
              radius="none"
            />
            </Skeleton>
          </CardBody>
          <Divider />
          <CardFooter className="flex flex-col ">
            <div className="flex justify-start w-full">
              <div>
                <Button
                  isIconOnly
                  className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                  radius="full"
                  variant="light"
                  onClick={HandleLike}
                >
                  {isLiked ? (
                    <FaHeart color="red" size={25} />
                  ) : (
                    <FaRegHeart size={25} />
                  )}
                </Button>
              </div>
              <div>
                <Button
                  isIconOnly
                  className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                  radius="full"
                  variant="light"
                >
                  <FaRegCommentDots size={25} />
                </Button>
              </div>

              <div>
                <Button
                  isIconOnly
                  className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                  radius="full"
                  variant="light"
                >
                  <FiShare size={25} />
                </Button>
              </div>
            </div>
            <div className="flex items-center">
            
                <div className="flex">
                    
                <p className="text-md font-semibold">Hrushi </p>
              <VscVerifiedFilled size={20} className=" text-sky-500 mx-1" />

                </div>
            
              <p className=" text-justify p-1 line-clamp-1 hover:line-clamp-6">
              A paragraph is a short collection of well-organized sentences which revolve around a single theme and is coherent. A good paragraph expresses everything it has to say briefly.
              </p>
              
            </div>
           
          </CardFooter>
        </Card>
      </div>




      <div className="my-5">
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={40}
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <p className="text-md">NextUI</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="p-0">
            <Image
              isZoomed
              alt="NextUI Fruit Image with Zoom"
              src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
              className="w-full"
              radius="none"
            />
          </CardBody>
          <Divider />
          <CardFooter>
            <div className="flex">
              <div>
                <Button
                  isIconOnly
                  className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                  radius="full"
                  variant="light"
                  onClick={HandleLike}
                >
                  {isLiked ? (
                    <FaHeart color="red" size={25} />
                  ) : (
                    <FaRegHeart size={25} />
                  )}
                </Button>
              </div>
              <div>
                <Button
                  isIconOnly
                  className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                  radius="full"
                  variant="light"
                >
                  <FaRegCommentDots size={25} />
                </Button>
              </div>

              <div>
                <Button
                  isIconOnly
                  className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                  radius="full"
                  variant="light"
                >
                  <FiShare size={25} />
                </Button>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
      <div className="my-5">
        <Card className="max-w-[400px]">
            
          <CardHeader className="flex gap-3">
          <Skeleton isLoaded={isLoaded} className="rounded-full">
            <Image
              alt="nextui logo"
              height={40}
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
              className="rounded-full"
            />
            </Skeleton>
            <div className="flex flex-col">
            <Skeleton isLoaded={isLoaded} className="w-44 rounded-lg">
              <p className="text-md">NextUI</p>
                  </Skeleton>  
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="p-0">
            <Skeleton isLoaded={isLoaded}>
            <Image
              isZoomed
              alt="NextUI Fruit Image with Zoom"
              src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
              className="w-full"
              radius="none"
            />
            </Skeleton>
          </CardBody>
          <Divider />
          <CardFooter>
            <div className="flex">
              <div>
                <Button
                  isIconOnly
                  className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                  radius="full"
                  variant="light"
                  onClick={HandleLike}
                >
                  {isLiked ? (
                    <FaHeart color="red" size={25} />
                  ) : (
                    <FaRegHeart size={25} />
                  )}
                </Button>
              </div>
              <div>
                <Button
                  isIconOnly
                  className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                  radius="full"
                  variant="light"
                >
                  <FaRegCommentDots size={25} />
                </Button>
              </div>

              <div>
                <Button
                  isIconOnly
                  className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                  radius="full"
                  variant="light"
                >
                  <FiShare size={25} />
                </Button>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
