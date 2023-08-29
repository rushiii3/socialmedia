import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Divider,
    Image,
    Button,
    Avatar,
    Skeleton,
    Link
  } from "@nextui-org/react";
  import React, {  useState, useEffect } from "react";
  import { Fade } from "react-awesome-reveal";
  import { FaRegCommentDots, FaRegHeart, FaHeart } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import { VscVerifiedFilled } from "react-icons/vsc";

const Post = ({values}) => {
   
const [isLoaded, setIsLoaded] = useState(false);
const [isLiked, setisLiked] = useState(false);
useEffect(() => {
    setTimeout(() => setIsLoaded(!isLoaded), 3000);
  }, []);
  const HandleLike = () => {
    setisLiked(!isLiked);
  };

  return (
    <div className="my-5" key={values.user_id}>
        <Fade cascade damping={0.6}>
            <Card className="max-w-[400px]">
              <CardHeader className="flex gap-3">
                <Skeleton isLoaded={isLoaded} className="rounded-full">
                  <Avatar src={values.user_avatar} size="sm" />
                </Skeleton>
                <Skeleton isLoaded={isLoaded} className="w-44 rounded-lg">
                  <div className="flex items-center">
                    <Link className="w-full cursor-pointer text-black" href={`/profile/${values.user_id}`}>
                    <p className="text-md">{values.user_name}</p>
                    {values.user_verified === true ? (
                      <VscVerifiedFilled
                        size={20}
                        className=" text-sky-500 mx-1"
                      />
                    ) : null}
                    </Link>
                  </div>
                </Skeleton>
              </CardHeader>
              <Divider />
              <CardBody className="p-0">
                <Skeleton isLoaded={isLoaded}>
                  <Image
                    isZoomed
                    alt="NextUI Fruit Image with Zoom"
                    src={values.user_profile}
                    className="w-full h-full"
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
                <div className="flex items-center flex-row">
                  <div className="flex flex-row ">
                    <p className="text-md font-semibold break-keep">
                      {values.user_name}{" "}
                    </p>
                    {values.user_verified === true ? (
                      <VscVerifiedFilled
                        size={20}
                        className=" text-sky-500 mx-1"
                      />
                    ) : null}
                  </div>
                  <p className=" text-justify p-1 line-clamp-1 hover:line-clamp-6">
                    {values.user_caption}
                  </p>
                </div>
              </CardFooter>
            </Card>
            </Fade>
    </div>
    
  )
}

export default Post