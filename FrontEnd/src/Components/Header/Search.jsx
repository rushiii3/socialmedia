import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import axios from "axios";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Link,
  Button,
  useDisclosure,
  Avatar,
} from "@nextui-org/react";
import { MdNoAccounts } from "react-icons/md";
import { VscVerifiedFilled } from "react-icons/vsc";
import {server} from '../../server';
export const Search = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [PostData, setPostData] = useState([]);
  const [Search, setSearch] = useState("");
  const [Counter, setCounter] = useState(false);
  const handleSearch = async(e) => {
    console.log(Search);
    setSearch(e.target.value);
    const { data } = await axios.get(
        `${server}/user`
      );
      if (Search.length >= 1) {
        const filterData = data.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(Search.toLowerCase())
        })
        setPostData(filterData)
        console.log(Search);
      }else{
        setCounter(true)
        setPostData("")
        console.log(Search);
      }
  };
  
  return (
    <>
      <Button onPress={onOpen} className="bg-white">
        <BiSearchAlt size={30} />
      </Button>
      <Modal
        scrollBehavior="inside"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        hideCloseButton="false"
        placement="center"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Search User
                <Input
                  type="text"
                  placeholder=""
                  startContent={<BiSearchAlt />}
                  onChange={(e) => {
                    handleSearch(e);
                  }}
                  value={Search}
                />
              </ModalHeader>
              <ModalBody>
                <ul class="space-y-3">
                  {PostData.length < 1  ?  
                    
                        Counter == false ? (
                            <div className="flex justify-center">
                        <h1 className="text-center font-bold">Find your friends here</h1>
                        <MdNoAccounts size={25} className="ml-3" />
                      </div>
                      ):(
                        <div className="flex justify-center">
                      <h1 className="text-center font-bold">No user found</h1>
                      <MdNoAccounts size={25} className="ml-3" />
                    </div>
                      )
                    
                    

                   : (
                    PostData.map((values, key) => {
                      return (
                        <li key={key}>
                          <Link
                            href={`/profile/${values?.user_id}`}
                            class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                          >
                            <Avatar src={values?.user_avatar} />
                            <span class=" ml-3 whitespace-nowrap">
                              {values.user_name}
                            </span>
                            <span class="whitespace-nowrap">
                              {values?.user_verified === true ? (
                                <VscVerifiedFilled
                                  size={20}
                                  className=" text-sky-500 mx-1"
                                />
                              ) : null}
                            </span>
                          </Link>
                        </li>
                      );
                    })
                  )}
                </ul>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Done
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
