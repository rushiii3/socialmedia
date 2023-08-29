import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Avatar } from "@nextui-org/react";
import {Card, CardBody, Image} from "@nextui-org/react";
const Profile = () => {
  const [UserData, setUserData] = useState();
  const { id } = useParams();

  const getUserDetail = async () => {
    await axios
      .get(`https://socialmedia-1eyo.vercel.app/api/v2/user/${id}`)
      .then((res) => setUserData(res.data[0]))
      .catch((err) => console.log(err.response.data.message));
  };

  useEffect(() => {
    getUserDetail();
  }, []);

  return (
    <div className=" w-screen p-3 mb-8">
      <div className="flex flex-col md:flex-row p-2 md:ml-10 ml-0">
        <div>
          <Avatar
            src={UserData?.user_avatar}
            className="lg:w-40  lg:h-40 md:h-32 md:w-32 h-52 w-52 mr-20 mx-auto text-2xl"
          />
        </div>
        <div className="md:ml-20 mt-4">
          <h1 className="md:text-2xl  text-xl font-bold text-center md:text-left">
            {UserData?.user_name}
          </h1>
          <p className="text-center md:text-left my-1">Total Post : 10</p>
          <p className="my-2 text-justify">
            I'm more than what you see me on Insta stories.
            <br />
            🎶🎨💃📸✈️
          </p>
        </div>
      </div>
      <hr className="my-3 h-8 border-gray-300" />
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-3">

      <Card shadow="sm">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={"s"}
              className="w-full object-cover h-[540px]"
              src="https://github.com/rushiii3/3d-Web/blob/main/IMG_9440.jpeg?raw=true"
            />
          </CardBody>
        </Card>

        <Card shadow="sm">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={"s"}
              className="w-full object-cover h-[540px]"
              src="https://github.com/rushiii3/3d-Web/blob/main/IMG_9440.jpeg?raw=true"
            />
          </CardBody>
        </Card>

        <Card shadow="sm">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={"s"}
              className="w-full object-cover h-[540px]"
              src="https://github.com/rushiii3/3d-Web/blob/main/IMG_9440.jpeg?raw=true"
            />
          </CardBody>
        </Card>


        <Card shadow="sm">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={"s"}
              className="w-full object-cover h-[540px]"
              src="https://github.com/rushiii3/3d-Web/blob/main/IMG_9440.jpeg?raw=true"
            />
          </CardBody>
        </Card>


        <Card shadow="sm">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={"s"}
              className="w-full object-cover h-[540px]"
              src="https://github.com/rushiii3/3d-Web/blob/main/IMG_9440.jpeg?raw=true"
            />
          </CardBody>
        </Card>


        <Card shadow="sm">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={"s"}
              className="w-full object-cover h-[540px]"
              src="https://github.com/rushiii3/3d-Web/blob/main/IMG_9440.jpeg?raw=true"
            />
          </CardBody>
        </Card>


        <Card shadow="sm">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={"s"}
              className="w-full object-cover h-[540px]"
              src="https://github.com/rushiii3/3d-Web/blob/main/IMG_9440.jpeg?raw=true"
            />
          </CardBody>
        </Card>



      </div>
    </div>
  );
};

export default Profile;
