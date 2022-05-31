import React from "react";

import { Text } from "@chakra-ui/react"
import {Div ,Img} from "./Sidebar.style"

import { Button,useDisclosure } from "@chakra-ui/react";
import home from "./assets/home.png";
import ex from "./assets/explore.png";
import set from "./assets/settings.png";
import fav from "./assets/star.png";
import tre from "./assets/trend.png";

const Sidebar = () => {
 
  return (
    <Text bg="rgb(237,242,247)">
    <Div>
        <Text bg="rgb(255,255,255)" h="100%">
        <Text  fontWeight="semibold" textAlign="left" ml={10} fontSize={30} >
        Logo
            </Text>
        <Button borderRadius="12" _focus={{ boxShadow: "none" }}  _hover={{ bg: "rgb(11,197,234)" }}  bg="rgb(255,255,255)" p={7} mb={2} w="90%">
          <Img src={home} width="20px" mr={10} /> Home
        </Button>
        <Button borderRadius="12" _focus={{ boxShadow: "none" }}  _hover={{ bg: "rgb(11,197,234)" }} p={7} mb={2} bg="rgb(255,255,255)"  w="90%" > 
          <Img src={tre} bg="rgb(255,255,255)" width="20px"  />
          Trending
        </Button>

        <Button borderRadius="12" _focus={{ boxShadow: "none" }}  _hover={{ bg: "rgb(11,197,234)" }} bg="rgb(255,255,255)" p={7} mb={2} w="90%">
          <Img src={ex} width="20px"  /> Explore
        </Button>

        <Button borderRadius="12" _focus={{ boxShadow: "none" }}  _hover={{ bg: "rgb(11,197,234)" }} bg="rgb(255,255,255)" p={7} mb={2}  w="90%"> 
          <Img src={fav} width="20px"  />
          Favourites
        </Button>

        <Button borderRadius="12" _focus={{ boxShadow: "none" }}  _hover={{ bg: "rgb(11,197,234)" }} bg="rgb(255,255,255)"  p={7} mb={2}  w="90%" >
          <Img src={set} width="20px" />
          Settings
        </Button>
        </Text>
    </Div>
    </Text>
 
  );
};

export default Sidebar;
