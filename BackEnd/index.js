require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const MongoURl = process.env.MONGO_URL;
const port = process.env.PORT || 4000;
const productRoute = require("./routes/ProductRoutes");
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use("/api/v2", productRoute);

app.get("/api", (req, res) => {
  res.json([
    {
      user_id: 1,
      user_name: "Rushi Shinde",
      user_avatar:
        "https://play-lh.googleusercontent.com/HHJb4ew7S16SHjqNjp1nEkVKn8L2j1rXPjVmF4fqf-mGjZYYIjhHYKjUJSLbB7SRx1HS",
      user_profile:
        "https://github.com/rushiii3/3d-Web/blob/main/IMG_9440.jpeg?raw=true",
      user_verified: true,
      user_caption: "If you feel good, you’ll look good.",
    },
    {
      user_id: 2,
      user_name: "Sameeksha Kadam",
      user_avatar:
        "https://github.com/rushiii3/3d-Web/blob/main/IMG_8359.jpg?raw=true",
      user_profile:
        "https://github.com/rushiii3/3d-Web/blob/main/IMG_7333.JPG?raw=true",
      user_verified: true,
      user_caption: "Sparkling lil more today.",
    },
    {
      user_id: 3,
      user_name: "Shah Rukh Khan",
      user_avatar:
        "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTK7Os2YW_6OfJJGh9rvPUSbNYqUwQXZce6mMIrqMasLen8sg4BDbHwN-UMOAV6Q_lXdvqdhbY-NqCTcGA",
      user_profile:
        "https://assets.gqindia.com/photos/6422a710ef2ea25840c2c39d/1:1/w_1079,h_1079,c_limit/SRK-buys-Rolls-Royce-Cullinan-Black-Badge_02.jpg",
      user_verified: false,
      user_caption:
        "Waqt ke aage kisi ki nahi chalti, isliye waqt par hi chod dijiye…",
    },
    {
      user_id: 4,
      user_name: "Shraddha Kapoor",
      user_avatar:
        "https://img.staticmb.com/mbcontent/images/uploads/2022/10/shraddha-kapoor-house_1665492649047.jpg",
      user_profile:
        "https://assets.vogue.in/photos/60ca4a4596d470590e0c7cc6/master/pass/Shraddha%20Kapoor%20on%20self-care,%20skincare%20and%20the%20beauty%20product%20she'd%20love%20to%20create%20.jpg",
      user_verified: false,
      user_caption:
        "Everyone wants magic! We just need to remember that it’s within us 🙃💫💗",
    },
    {
      user_id: 5,
      user_name: "Aryan Bagwe",
      user_avatar:
        "https://raw.githubusercontent.com/rushiii3/3d-Web/main/279907819_152938000560679_2402490576133044689_n.jpeg",
      user_profile:
        "https://raw.githubusercontent.com/rushiii3/3d-Web/main/326136219_751815036276540_8479462550059267995_n.jpeg",
      user_verified: true,
      user_caption: "Who said I cant get beaches ?? ⛱",
    },
    {
      user_id: 6,
      user_name: "Pratik Kumbhar",
      user_avatar:
        "https://raw.githubusercontent.com/rushiii3/3d-Web/main/323546594_131819519518387_9066922192399205285_n.jpg",
      user_profile:
        "https://raw.githubusercontent.com/rushiii3/3d-Web/main/322146387_1194503278146253_4811995216149507425_n.jpg",
      user_verified: true,
      user_caption: "Golden hour fashion🌅",
    },
    {
      user_id: 7,
      user_name: "Kartik Aaryan",
      user_avatar:
        "https://economictimes.indiatimes.com/thumb/msid-91347248,width-1200,height-900,resizemode-4,imgsize-48012/karthik-aaryan.jpg?from=mdr",
      user_profile:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/10/2021_10$largeimg_310424373.jpg",
      user_verified: false,
      user_caption:
        "Calling me cute is nice Calling me hot is great But calling me yours is all i want",
    },
    {
      user_id: 8,
      user_name: "Nora Fatehi",
      user_avatar:
        "https://imgeng.jagran.com/webstories/56716/5-embellished-sarees-from-nora-fatehi---s-closet-for-every-bride-1691043067.jpeg",
      user_profile:
        "https://static.toiimg.com/thumb/imgsize-23456,msid-102144554,width-600,resizemode-4/102144554.jpg",
      user_verified: false,
      user_caption: "You thought i was feelin u? Nah 🍭🍭",
    },
    {
      user_id: 9,
      user_name: "Salman Khan",
      user_avatar:
        "https://economictimes.indiatimes.com/thumb/msid-93354400,width-1200,height-900,resizemode-4,imgsize-70672/salman-khan.jpg?from=mdr",
      user_profile:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202305/salman_khan_iifa_2022-three_four.jpg?VersionId=nj5sX6LGTJ_jyWFo6olRTQhfizqdp7rL",
      user_verified: false,
      user_caption:
        "Nobody knows what tomorrow holds…. Not true in this case as it’s Filmfare Awards tomorrow.. बस अच्छे से हो जाये, दुआ करो क्यूंकि दूआओं में हैं बड़ा दम, वन्दे मातरम्।",
    },
    {
      user_id: 10,
      user_name: "Jacqueline Fernandez",
      user_avatar:
        "https://images.news18.com/ibnlive/uploads/2022/01/jacqueline-fernandez-3.jpg",
      user_profile:
        "https://w0.peakpx.com/wallpaper/237/652/HD-wallpaper-jacqueline-fernandez-actress-bollywood-model.jpg",
      user_verified: false,
      user_caption: "Hakuna Matata 😃💛",
    },
    {
      user_id: 11,
      user_name: "Kiara Advani",
      user_avatar:
        "https://static.toiimg.com/thumb/msid-89218532,width-1280,resizemode-4/89218532.jpg",
      user_profile:
        "https://media.vogue.in/wp-content/uploads/2023/07/Snapinsta.app_356244421_809181767230950_6170616400638169750_n_1080.jpg",
      user_verified: false,
      user_caption: "Current mood: Shining brightly🌝",
    },
    {
      user_id: 12,
      user_name: "Sidharth Malhotra",
      user_avatar:
        "https://newscanvass.com/wp-content/uploads/2023/06/Sidharth-Malhotra-3.jpg",
      user_profile:
        "https://assets.vogue.in/photos/5ed089ab193ac7578d6da7fb/2:3/w_2560%2Cc_limit/Sidharth%2520Malhotra%2520home.jpg",
      user_verified: false,
      user_caption: "Seize the day, be your own Hero ❤️💪",
    },
    {
      user_id: 13,
      user_name: "Vandana Padhi",
      user_avatar:
        "https://raw.githubusercontent.com/rushiii3/3d-Web/main/322493247_1627497147701752_8441297061507991597_n.jpeg",
      user_profile:
        "https://raw.githubusercontent.com/rushiii3/3d-Web/main/314735701_847856479977445_4134909197560907528_n.jpeg",
      user_verified: true,
      user_caption: "🖤",
    },
  ]);
});

mongoose
  .connect(MongoURl)
  .then(() => {
    console.log("Connected!");
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
  
  module.exports = app;