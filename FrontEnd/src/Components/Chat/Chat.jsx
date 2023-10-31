import React, { useEffect, useRef, useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import axios from 'axios';
import {server} from '../../server';
const Chat = (props) => {
  const { user } = useSelector((state) => state.user);
  const [messages, setMessages] = useState([]);
  // const [username, setUsername] = useState('');
  const [message, setMessage] = useState("");
  const getMessages = async() => {
    const userIDs = {
      "sender_id":user?.user?._id,
      "reviver_id":props.user
    }
    const {data} = await axios.post(`${server}/chat/getchat`,userIDs);
    data.data.map((values,key)=>{
      const messageList = {
        sender: values?.sender,
        reciver: values?.reciver,
        message: values?.message,
        sendtime : values?.timestamp, 
      };
      setMessages((prev) => [...prev, messageList]);
    })
  }
  useEffect(() => {
    // Scroll to the bottom when the component initially loads
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, []);
  const chatContainerRef = useRef(null)

  const scrollToBottom = () => {
    const lastMessage = chatContainerRef.current.lastElementChild;
    if (lastMessage) {
      lastMessage.scrollIntoView({ behavior: "smooth" });
    }
  };




  const recipient = props.user;
  const username = user?.user?._id;
  const timing = new Date().toJSON();
  
  const handleSendMessage = async() => {
    if (recipient && message) {
      props.socket.emit("chat-message", { recipient, message, username, timing });
      const messageList = {
        sender: username,
        reciver: recipient,
        message: message,
        sendtime : timing, 
      };
      const sendmessage = await axios.post(`${server}/chat/send`,messageList);
      // Use the functional update to access the latest state
      setMessages((prev) => [...prev, messageList]);

      setMessage("");
      scrollToBottom()
    }
  };
  useEffect(() => {
    if (props.socket) {
      const handlePrivateMessage = ({ sender, message }) => {
        if (message.username === username) {

        } else {
          const messageList = {
            sender: message.username,
            reciver: message.recipient,
            message: message.message,
          };
          // Use the functional update to access the latest state
          setMessages((prevMessages) => [...prevMessages, messageList]);
          scrollToBottom()
        }
      };

      props.socket.on("private-message", handlePrivateMessage);

      // Remove the event listener when the component unmounts
      return () => {
        props.socket.off("private-message", handlePrivateMessage);
      };
    }
  }, [props.socket, username]);


  useEffect(() => {
    scrollToBottom()
    getMessages()
  }, []);


  return (
    <div class="flex h-screen overflow-hidden relative">
      <div class="flex-1">
        <header class="bg-white p-4 text-gray-700 border flex justify-between">
          <div class="flex ">
            <div class="w-9 h-9 rounded-full flex items-center justify-center mr-2">
              <img
                src={user?.user?.url === null ? (user?.user?.url) : ('https://media.tenor.com/HQx-ClEH6lYAAAAd/anime-demon-slayer.gif')}
                alt={user?.user?.username}
                class="w-8 h-8 rounded-full object-cover"
              />
            </div>
            <h1 class="text-2xl font-semibold">{props?.userName}</h1>
          </div>
          <div>
            <button type="button" onClick={props?.removeChat}>
              <IoArrowBackOutline className="rotate-0" size={30} />
            </button>
          </div>
        </header>

        <div class="h-[75%] overflow-y-auto p-4 pb-20 absolute w-full right-0 bottom-23" ref={chatContainerRef}>
          {messages.map((msg, index) => (
            <>
              {msg.sender === username ? (
                <div class="flex justify-end mb-4" key={index}>
                  <div class="flex max-w-96 bg-gray-300  text-black rounded-lg p-3 gap-3">
                    <p>{msg.message}</p>
                  </div>
                  <div class="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                    <img
                      src={props?.userProfile === null ? (props?.userProfile ) : ('https://66.media.tumblr.com/4f9e85d9bf78ceaaf2f44de3e90e735a/03a6876b96c16cda-b0/s540x810/0f93acc54f06ba7268a4b031cc5d6f90381a08a5.gif')}
                      alt={props?.userName}
                      class="w-8 h-8 rounded-full object-cover"
                    />
                  </div>
                </div>
              ) : (
                <div class="flex mb-4 " key={index}>
                  <div class="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                    <img
                      src={props?.userProfile === null ? (props?.userProfile ) : ('https://media.tenor.com/HQx-ClEH6lYAAAAd/anime-demon-slayer.gif')}
                      alt={props?.userName}
                      class="w-8 h-8 rounded-full object-cover"
                    />
                  </div>
                  <div class="flex max-w-96  bg-indigo-500 rounded-lg p-3 gap-3">
                    <p class="text-white">{msg.message}</p>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>

        <footer class="bg-white border-t border-gray-300 p-4 absolute bottom-16 right-0  w-full">
          <div class="flex items-center">
            <input
              type="text"
              placeholder="Type a message..."
              class="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <button
              class="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2"
              type="submit"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Chat;
