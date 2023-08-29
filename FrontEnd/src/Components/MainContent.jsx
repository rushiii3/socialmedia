import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post/Post";
export const MainContent = () => {

  const [PostData, setPostData] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(`https://socialmedia-1eyo.vercel.app/api/v2/user`);
    setPostData(data);
  };
  useEffect(() => {
    getData();
    // setTimeout(() => setIsLoaded(!isLoaded), 3000);
  }, []);

  return (
    <div className=" mx-auto  p-5">
      {PostData.map((values,key) => {
        return (
          
            <Post key={key} values={values}/>
        );
      })}
    </div>
  );
};
