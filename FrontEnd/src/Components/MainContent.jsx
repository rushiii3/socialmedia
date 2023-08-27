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
  Skeleton,
} from "@nextui-org/react";
import { Fade } from "react-awesome-reveal";
import axios from "axios";
import { FaRegCommentDots, FaRegHeart, FaHeart } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import { VscVerifiedFilled } from "react-icons/vsc";
export const MainContent = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const toggleLoad = () => {
    setIsLoaded(!isLoaded);
  };

  const [PostData, setPostData] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(`http://localhost:4000/api`);
    setPostData(data);
  };
  useEffect(() => {
    getData();
    setTimeout(() => setIsLoaded(!isLoaded), 3000);
  }, []);

  const [isLiked, setisLiked] = useState(false);
  const HandleLike = () => {
    setisLiked(!isLiked);
  };

  return (
    <div className=" mx-auto  p-5">
      {PostData.map((values) => {
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
                    <p className="text-md">{values.user_name}</p>
                    {values.user_verified === true ? (
                      <VscVerifiedFilled
                        size={20}
                        className=" text-sky-500 mx-1"
                      />
                    ) : null}
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
        );
      })}
    </div>
  );
};
