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
    <div className=" mx-auto  p-5">

      <div className="my-5">
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
          <Skeleton isLoaded={isLoaded} className="rounded-full">
            <Avatar src={"https://play-lh.googleusercontent.com/HHJb4ew7S16SHjqNjp1nEkVKn8L2j1rXPjVmF4fqf-mGjZYYIjhHYKjUJSLbB7SRx1HS"} size="sm" />
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
          <Skeleton isLoaded={isLoaded} className="rounded-full">
            <Avatar src={"https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTK7Os2YW_6OfJJGh9rvPUSbNYqUwQXZce6mMIrqMasLen8sg4BDbHwN-UMOAV6Q_lXdvqdhbY-NqCTcGA"} size="sm" />
            </Skeleton>
            <Skeleton isLoaded={isLoaded} className="w-44 rounded-lg">
            <div className="flex items-center">
              <p className="text-md">Shah Rukh Khan</p>
              {/* <VscVerifiedFilled size={20} className=" text-sky-500 ml-1" /> */}
            </div>
            </Skeleton>
          </CardHeader>
          <Divider />
          <CardBody className="p-0">
          <Skeleton isLoaded={isLoaded}>
            <Image
              isZoomed
              alt="NextUI Fruit Image with Zoom"
              src="https://assets.gqindia.com/photos/6422a710ef2ea25840c2c39d/1:1/w_1079,h_1079,c_limit/SRK-buys-Rolls-Royce-Cullinan-Black-Badge_02.jpg"
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
            <Avatar src={"https://img.staticmb.com/mbcontent/images/uploads/2022/10/shraddha-kapoor-house_1665492649047.jpg"} size="sm" />
            </Skeleton>
            <Skeleton isLoaded={isLoaded} className="w-44 rounded-lg">
            <div className="flex items-center">
              <p className="text-md">Shraddha Kapoor </p>
              {/* <VscVerifiedFilled size={20} className=" text-sky-500 ml-1" /> */}
            </div>
            </Skeleton>
          </CardHeader>
          <Divider />
          <CardBody className="p-0">
          <Skeleton isLoaded={isLoaded}>
            <Image
              isZoomed
              alt="NextUI Fruit Image with Zoom"
              src="https://assets.vogue.in/photos/60ca4a4596d470590e0c7cc6/master/pass/Shraddha%20Kapoor%20on%20self-care,%20skincare%20and%20the%20beauty%20product%20she'd%20love%20to%20create%20.jpg"
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
            <Avatar src={"https://github.com/rushiii3/3d-Web/blob/main/279907819_152938000560679_2402490576133044689_n.jpeg?raw=true"} size="sm" />
            </Skeleton>
            <Skeleton isLoaded={isLoaded} className="w-44 rounded-lg">
            <div className="flex items-center">
              <p className="text-md">Aryan Bagwe </p>
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
              src="https://github.com/rushiii3/3d-Web/blob/main/326136219_751815036276540_8479462550059267995_n.jpeg?raw=true"
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
            <Avatar src={"https://github.com/rushiii3/3d-Web/blob/main/323546594_131819519518387_9066922192399205285_n.jpg?raw=true"} size="sm" />
            </Skeleton>
            <Skeleton isLoaded={isLoaded} className="w-44 rounded-lg">
            <div className="flex items-center">
              <p className="text-md">Pratik Kumbhar </p>
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
              src="https://github.com/rushiii3/3d-Web/blob/main/322146387_1194503278146253_4811995216149507425_n.jpg?raw=true"
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
            <Avatar src={"https://m.economictimes.com/thumb/msid-91347248,width-1200,height-900,resizemode-4,imgsize-48012/karthik-aaryan.jpg"} size="sm" />
            </Skeleton>
            <Skeleton isLoaded={isLoaded} className="w-44 rounded-lg">
            <div className="flex items-center">
              <p className="text-md">Kartik Aaryan</p>
              {/* <VscVerifiedFilled size={20} className=" text-sky-500 ml-1" /> */}
            </div>
            </Skeleton>
          </CardHeader>
          <Divider />
          <CardBody className="p-0">
          <Skeleton isLoaded={isLoaded}>
            <Image
              isZoomed
              alt="NextUI Fruit Image with Zoom"
              src="https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/10/2021_10$largeimg_310424373.jpg"
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
            <Avatar src={"https://imgeng.jagran.com/webstories/56716/5-embellished-sarees-from-nora-fatehi---s-closet-for-every-bride-1691043067.jpeg"} size="sm" />
            </Skeleton>
            <Skeleton isLoaded={isLoaded} className="w-44 rounded-lg">
            <div className="flex items-center">
              <p className="text-md">Nora Fatehi</p>
              {/* <VscVerifiedFilled size={20} className=" text-sky-500 ml-1" /> */}
            </div>
            </Skeleton>
          </CardHeader>
          <Divider />
          <CardBody className="p-0">
          <Skeleton isLoaded={isLoaded}>
            <Image
              isZoomed
              alt="NextUI Fruit Image with Zoom"
              src="https://static.toiimg.com/thumb/imgsize-23456,msid-102144554,width-600,resizemode-4/102144554.jpg"
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
            <Avatar src={"https://m.economictimes.com/thumb/msid-93354400,width-1200,height-900,resizemode-4,imgsize-70672/salman-khan.jpg"} size="sm" />
            </Skeleton>
            <Skeleton isLoaded={isLoaded} className="w-44 rounded-lg">
            <div className="flex items-center">
              <p className="text-md">Salman Khan</p>
              {/* <VscVerifiedFilled size={20} className=" text-sky-500 ml-1" /> */}
            </div>
            </Skeleton>
          </CardHeader>
          <Divider />
          <CardBody className="p-0">
          <Skeleton isLoaded={isLoaded}>
            <Image
              isZoomed
              alt="NextUI Fruit Image with Zoom"
              src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202305/salman_khan_iifa_2022-three_four.jpg?VersionId=nj5sX6LGTJ_jyWFo6olRTQhfizqdp7rL"
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
            <Avatar src={"https://images.news18.com/ibnlive/uploads/2022/01/jacqueline-fernandez-3.jpg"} size="sm" />
            </Skeleton>
            <Skeleton isLoaded={isLoaded} className="w-44 rounded-lg">
            <div className="flex items-center">
              <p className="text-md">Jacqueline Fernandez</p>
              {/* <VscVerifiedFilled size={20} className=" text-sky-500 ml-1" /> */}
            </div>
            </Skeleton>
          </CardHeader>
          <Divider />
          <CardBody className="p-0">
          <Skeleton isLoaded={isLoaded}>
            <Image
              isZoomed
              alt="NextUI Fruit Image with Zoom"
              src="https://w0.peakpx.com/wallpaper/237/652/HD-wallpaper-jacqueline-fernandez-actress-bollywood-model.jpg"
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
            <Avatar src={"https://static.toiimg.com/thumb/msid-89218532,width-1280,resizemode-4/89218532.jpg"} size="sm" />
            </Skeleton>
            <Skeleton isLoaded={isLoaded} className="w-44 rounded-lg">
            <div className="flex items-center">
              <p className="text-md">Kiara Advani</p>
              {/* <VscVerifiedFilled size={20} className=" text-sky-500 ml-1" /> */}
            </div>
            </Skeleton>
          </CardHeader>
          <Divider />
          <CardBody className="p-0">
          <Skeleton isLoaded={isLoaded}>
            <Image
              isZoomed
              alt="NextUI Fruit Image with Zoom"
              src="https://media.vogue.in/wp-content/uploads/2023/07/Snapinsta.app_356244421_809181767230950_6170616400638169750_n_1080.jpg"
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
            <Avatar src={"https://newscanvass.com/wp-content/uploads/2023/06/Sidharth-Malhotra-3.jpg"} size="sm" />
            </Skeleton>
            <Skeleton isLoaded={isLoaded} className="w-44 rounded-lg">
            <div className="flex items-center">
              <p className="text-md">Sidharth Malhotra</p>
              {/* <VscVerifiedFilled size={20} className=" text-sky-500 ml-1" /> */}
            </div>
            </Skeleton>
          </CardHeader>
          <Divider />
          <CardBody className="p-0">
          <Skeleton isLoaded={isLoaded}>
            <Image
              isZoomed
              alt="NextUI Fruit Image with Zoom"
              src="https://assets.vogue.in/photos/5ed089ab193ac7578d6da7fb/2:3/w_2560%2Cc_limit/Sidharth%2520Malhotra%2520home.jpg"
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
      
    </div>
  );
};
