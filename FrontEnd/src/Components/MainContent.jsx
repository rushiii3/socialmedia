import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post/Post";
import {server} from '../server'
import CircularScrollIndicator from "../Pages/Circular";
import { useSelector } from "react-redux";
export const MainContent = () => {
  const {user} = useSelector((state) => state.post);
  console.log(user);
  const [PostData, setPostData] = useState([""]);
  const getData = async () => {
    const { data } = await axios.get(`${server}/post/get-post`);
    
    setPostData(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className=" mx-auto  p-5">

    
      {PostData.map((values,key) => {
        return (
            <Post key={key} values={values}/>
        );
      })}
</div>
  )}

