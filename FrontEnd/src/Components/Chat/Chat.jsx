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
      scrollToBottom()
      setMessage("");
      
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
    <div className="">
    <div class="flex-1 p-3 sm:p-6 justify-between flex flex-col h-[40rem]">
      <div class="flex sm:items-center justify-between pb-3 border-b-2 border-gray-200" key={props?.userName}>
        <div class="relative flex items-center space-x-4">
          <div class="relative">
          <img
                src={user?.user?.url === null ? (user?.user?.url) : ('https://media.tenor.com/HQx-ClEH6lYAAAAd/anime-demon-slayer.gif')}
                alt={user?.user?.username}
                class="w-8 h-8 rounded-full object-cover"
              />
          </div>
          <div class="flex flex-col leading-tight">
            <div class="text-xl mt-1 flex items-center">
              <span class="text-gray-700 mr-3">{props?.userName}</span>
            </div>
          </div>
        </div>
        <div class="flex items-center space-x-2">
        <button type="button" onClick={props?.removeChat}>
              <IoArrowBackOutline className="rotate-0" size={30} />
            </button>
        </div>
      </div>
      <div
        id="messages"
        class="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-1 scrolling-touch"
        ref={chatContainerRef}
      >
{messages.map((msg, index) => (
            <>
              {msg.sender === username ? (
                <div class="chat-message" key={index}>
                <div class="flex items-end justify-end">
                  <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                    <div>
                      <span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white text-sm">
                      {msg.message}
                      </span>
                    </div>
                  </div>
                  <img
                    src={props?.userProfile === null ? (props?.userProfile ) : ('https://66.media.tumblr.com/4f9e85d9bf78ceaaf2f44de3e90e735a/03a6876b96c16cda-b0/s540x810/0f93acc54f06ba7268a4b031cc5d6f90381a08a5.gif')}
                    alt={props?.userName}
                    class="w-8 h-8 object-cover rounded-full order-2"
                  />
                </div>
              </div>
                
              ) : (
               
                  <div class="chat-message" key={index}>
          <div class="flex items-end">
            <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
              <div>
                <span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600 text-sm">
                {msg.message}
                </span>
              </div>
            </div>
            <img
              src={props?.userProfile === null ? (props?.userProfile ) : ('https://media.tenor.com/HQx-ClEH6lYAAAAd/anime-demon-slayer.gif')}
              alt={props?.userName}
              class="w-8 h-8 rounded-full order-1 object-cover"
            />
          </div>
        </div>
                  
                
              )}
            </>
          ))}


        
        
        
      </div>
      <div class="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0 flex">
        <input
          type="text"
          placeholder="Message"
          class="block w-full py-3 px-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
              value={message}
          required
        />

        <button type="submit" onClick={handleSendMessage}>
          <svg
            class="w-5 h-5 text-gray-500 origin-center transform rotate-90"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"

          >
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  );
};

export default Chat;
