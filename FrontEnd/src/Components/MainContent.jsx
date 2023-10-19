import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post/Post";
import { server } from "../server";
export const MainContent = () => {
  const [isLoading, setisLoading] = useState(false);
  const TimeOut = () => {
    setTimeout(() => {
      setisLoading(true);
    }, 3000);
  };
  const [PostData, setPostData] = useState([""]);
  const getData = async () => {
    setisLoading(false);
    const { data } = await axios.get(`${server}/post/get-post`);
    setPostData(data);
    TimeOut();
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className=" mx-auto  p-5">
      {PostData.map((values, key) => {
        return <Post key={key} values={values} isLoading={isLoading} />;
      })}
    </div>
  );
};
