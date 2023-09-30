import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Avatar, Button, Skeleton } from "@nextui-org/react";
import { Card, CardBody, Image } from "@nextui-org/react";
import { VscVerifiedFilled } from "react-icons/vsc";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
} from "@nextui-org/react";
import { FaFacebook } from "react-icons/fa";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import {IoMdShareAlt} from 'react-icons/io'
import {FiEdit} from 'react-icons/fi'
const Profile = () => {
  const {loading,isAuthenticated,user} = useSelector((state)=>state.user);
  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0 rotate-0";
  const [UserData, setUserData] = useState([""]);
  const { id } = useParams();
  const [isLoading, setisLoading] = useState(false);
  const UserAuth = () => {
    if(loading===false){
      if(isAuthenticated){
          if(id===user?.user?._id){
            return true
          }else{
            return false
          }
      }
    }
  }
  console.log(UserAuth());
  const TimeOut = () =>{
    setTimeout(() => {
      setisLoading(true);
    }, 3000);
  }
  const getUserDetail = async () => {
    setisLoading(false);
    await axios
      .get(`http://localhost:4000/api/v2/user/profile/${id}`)
      .then((res) => {
        setUserData(res.data.data);
        TimeOut();
      })
      .catch((err) => console.log(err.response.data.message));
  };
  useEffect(() => {
    getUserDetail();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" w-screen p-3 mb-8">
      <div className="flex flex-col md:flex-row p-2 md:ml-10 ml-0">
        <div>
          <Skeleton
            isLoaded={isLoading}
            className="rounded-full mx-auto md:mx-0 lg:w-40  lg:h-40 md:h-32 md:w-32 h-52 w-52"
          >
            <Avatar
              src={UserData.user_avatar}
              className="lg:w-40 rotate-90 lg:h-40 md:h-32 md:w-32 h-52 w-52 mr-20 mx-auto text-2xl"
            />
          </Skeleton>
        </div>
        <div className="md:ml-20 mt-4">
          <div className="flex items-center justify-center	md:justify-start">
            <Skeleton
              isLoaded={isLoading}
              className="rounded-lg w-full text-center md:text-left my-1"
            >
              <h1 className="md:text-2xl  text-xl font-bold text-center md:text-left">
                {UserData[0]?.user?.username}
              </h1>
            </Skeleton>
            {/* {
            UserData?.user_verified === true ? (
                      <VscVerifiedFilled
                        size={25}
                        className=" text-sky-500 mx-1"
                      />
                    ) : null
                    } */}
          </div>
          <Skeleton
            isLoaded={isLoading}
            className="rounded-lg  mx-auto md:mx-0"
          >
            <p className="text-center md:text-left my-1">
              Total Post : {UserData.length}
            </p>
          </Skeleton>
          {/* <p className="my-2 text-justify">
            I'm more than what you see me on Insta stories.
            <br />
            🎶🎨💃📸✈️
          </p> */}
          <div className="mt-4 text-center md:text-left my-1 flex justify-center">
            {
              UserAuth() ? (<Skeleton isLoaded={isLoading} className="rounded-lg mr-3">
              <Button type="button" isDisabled={!isLoading} endContent={<FiEdit className="rotate-0" size={20}/>}>
                Edit Profile
                
              </Button>
            </Skeleton>) : ''
            }
            
            <Skeleton isLoaded={isLoading} className="rounded-lg">
              <Dropdown
                showArrow
                classNames={{
                  base: "py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
                  arrow: "bg-default-200",
                }}
              >
                <DropdownTrigger>
                  <Button
                    type="button"
                    endContent={<IoMdShareAlt className="rotate-0" size={25}/>}
                    variant="bordered"
                    isDisabled={!isLoading}
                  >
                    Share Profile
                  </Button>
                </DropdownTrigger>

                <DropdownMenu
                  variant="faded"
                  aria-label="Dropdown menu with description"
                >
                  <DropdownSection title="Share">
                    {/* <Link to="https://www.youtube.com/" target="_blank" > */}
                    <DropdownItem
                      description="Share on Facebook"
                      startContent={
                        <FaFacebook
                          size={25}
                          className={`${iconClasses} fill-blue-600`}
                        />
                      }
                      onPress={() => {
                        window.open(
                          `https://www.facebook.com/sharer/sharer.php?u=https://socialmedia-gilt.vercel.app/profile/${id}`,
                          "_blank"
                        );
                      }}
                    >
                      Facebook
                    </DropdownItem>
                    {/* </Link> */}
                    <DropdownItem
                      description="Share on Instagram"
                      startContent={
                        <BsInstagram
                          size={25}
                          className={`${iconClasses} fill-[#c13584]`}
                        />
                      }
                      onPress={() => {
                        window.open(
                          `https://www.facebook.com/sharer/sharer.php?u=https://socialmedia-gilt.vercel.app/profile/${id}`,
                          "_blank"
                        );
                      }}
                    >
                      Instagram
                    </DropdownItem>
                    <DropdownItem
                      description="Share on WhatsApp"
                      startContent={
                        <BsWhatsapp
                          size={25}
                          className={`${iconClasses} fill-green-600`}
                        />
                      }
                      onPress={() => {
                        window.open(
                          `https://wa.me/?text=Hey+view+my+account+the+RushiSync.+You+can+view+my+profile+and+message+me+there.+%0ahttps://socialmedia-gilt.vercel.app/profile/${id}%0A&amp;url=https://socialmedia-gilt.vercel.app/profile/${id}`,
                          "_blank"
                        );
                      }}
                    >
                      WhatsApp
                    </DropdownItem>
                    <DropdownItem
                      description="Share on X"
                      startContent={<FaXTwitter className={iconClasses} />}
                      onPress={() => {
                        window.open(
                          `https://twitter.com/intent/tweet?text=Hey+view+my+account+the+RushiSync.+You+can+view+my+profile+and+message+me+there+https://socialmedia-gilt.vercel.app/profile/${id}%0A&amp;url=https://socialmedia-gilt.vercel.app/profile/${id}`,
                          "_blank"
                        );
                      }}
                    >
                      X
                    </DropdownItem>
                  </DropdownSection>
                </DropdownMenu>
              </Dropdown>
            </Skeleton>
          </div>
        </div>
      </div>
      <hr className="my-3 h-8 border-gray-300" />
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-3">
        {UserData.map((values, key) => {
          return (
            <Card shadow="sm">
              <Skeleton isLoaded={isLoading}>
                <CardBody className="overflow-visible p-0">
                  <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={"s"}
                    className="w-full object-cover h-[540px]"
                    src={values?.imageUrl?.url}
                  />
                </CardBody>
              </Skeleton>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
