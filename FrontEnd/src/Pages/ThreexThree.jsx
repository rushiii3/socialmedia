import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
const ThreexThree = () => {
  const {post,loading} = useSelector((state) => state.post);
  const [Data, setData] = useState([""]);

  useEffect(() => {
    if (!loading && post) { // Check if post is defined
      console.log(post);
      setData(post)
    }
  }, [post, loading]);

  console.log(Data);
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
    </div>
  );
};

export default ThreexThree;
