import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from 'axios';
import { server } from '../server';
import { Button } from "@nextui-org/react";
import { Player, BigPlayButton } from 'video-react';
const ThreexThree = () => {
  const url = "https://api.consumet.org/anime/gogoanime/watch/spy-x-family-episode-1";
  const [Video, setVideo] = useState("");
  const data = async () => {
      try {
          const { data } = await axios.get(url, { params: { server: "gogocdn" } });
          
          setVideo(data.sources[3].url);
          return data;
      } catch (err) {
          throw new Error(err.message);
      }
  };
  data();
  console.log(Video);
   
 
 

  const {post,loading} = useSelector((state) => state.post);
  const [Cookie, setCookie] = useState("");
  const [Data, setData] = useState([""]);
  const getcookie = async() => {
    try {
      const serverData = await axios.post(`${server}/user/cookie`,{"db":"yes"},{withCredentials:true});
      console.log(serverData.data.token);
      setCookie(serverData.data.token);
    } catch (error) {
      console.log(error.response.data.message)
    }
  }

  
  useEffect(() => {
    if (!loading && post) { // Check if post is defined
      console.log(post);
      setData(post)
    }
  }, [post, loading]);
  const [firstClick, setfirstClick] = useState([]);
  const [ColorArray, setColorArray] = useState([, , , , , , , ,]);
  function delay(millisec) {
   
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("");
      }, millisec);
    });
  }
  const handleGreen = (e) => {
    if (e <= 8) {
      const updatedFirstClick = [...firstClick, e];
      setfirstClick(updatedFirstClick);
      if (ColorArray[e] !== "bg-green-500") {
        ColorArray[e] = "bg-green-500";
      } else {
        console.log("Alreday present");
      }

      if (e === 8) {
        console.log(e);
        async function ColorReverse() {
          for (let i = 0; i <= updatedFirstClick.length; i++) {
            await delay(1000);
            console.log(ColorArray[updatedFirstClick[i]]);
            console.log(updatedFirstClick);
            if (ColorArray[updatedFirstClick[i]] === "bg-green-500") {
              const Array = (ColorArray[updatedFirstClick[i]] =
                "bg-orange-500");
              setColorArray([...ColorArray, Array]);
              console.log(ColorArray);
            }
          }
        }
        ColorReverse();
      }
    }
  };
  const button = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      <div className="grid gap-x-8 gap-y-4 grid-cols-3 mx-auto mt-24 h-96">
        {button.map((value, key) => {
          return (
            <button
              type="button"
              key={value}
              className={`border border-black h-20 w-52 mx-auto ${ColorArray[key]}`}
              onClick={() => {
                handleGreen(key);
              }}
            >
              {value}
            </button>
          );
        })}
      </div>

      <div className="text-center">
{
    Data.map((values,key)=>{
      return (<p key={key}>
        {values.caption}
      </p>)
    })
}
      </div>

      <div>
<Button onClick={getcookie}>
  Click
</Button>


{Video == null ? ("empty"):(

<Player src={Video}>
      <BigPlayButton position="center" />
    </Player>
)}



<p>{Video}</p>
      </div>
    </div>
  );
};

export default ThreexThree;
