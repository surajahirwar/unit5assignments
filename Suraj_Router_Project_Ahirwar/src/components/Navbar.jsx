import React from "react";
import {Logo,Left,Mid, Header, LeftBox } from "./Navbar.style"
import { Button, Stack } from "@chakra-ui/react";
import { Routes, Route, Link} from "react-router-dom";
import { Image } from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import "./Style.css"

const Navbar = () => {
  return (
    <Header boxShadow='2xl' className="mainheader"> 
     
      <div>
      <Link  to="/"><Image
              borderRadius="full"
              boxSize="50px" marginTop="5px" 
              src="https://cdn-icons-png.flaticon.com/512/1591/1591111.png"
              alt="Segun Adebayo"
            /></Link>
       
      </div>
      <Left>
        <Menu>
          <Link to="/"> <MenuButton   _focus={{ boxShadow: "none" }}  _hover={{ bg: "rgb(11,197,234)" }} bg='white'  as={Button}>Home</MenuButton></Link>
          
        </Menu>
      </Left>
      <Left>
      <Menu>
         <Link to="/men"><MenuButton _focus={{ boxShadow: "none" }}  _hover={{ bg: "rgb(11,197,234)" }} bg='white'  as={Button}>Men</MenuButton></Link> 
          
        </Menu>
        <Menu>
         <Link to="/women"><MenuButton _focus={{ boxShadow: "none" }}  _hover={{ bg: "rgb(11,197,234)" }} bg='white'  as={Button}>Women</MenuButton></Link> 
          
        </Menu>
      </Left>
      <Mid>
       <Link to="/about"> <Button _focus={{ boxShadow: "none" }}  _hover={{ bg: "rgb(11,197,234)" }} variant="ghost">
         About
        </Button></Link>
        <Link to="/contect"> <Button _focus={{ boxShadow: "none" }}  _hover={{ bg: "rgb(11,197,234)" }} variant="ghost">
          FAQ
        </Button>
        </Link>
        <Link to="/contect"> <Button _focus={{ boxShadow: "none" }}  _hover={{ bg: "rgb(11,197,234)" }} variant="ghost">
          Contect
        </Button>
        </Link>
      </Mid>
      <LeftBox>
        <div>
          <Stack direction="row" spacing={4} align="center">
            <Button colorScheme="grey" variant="link">
              Sign In
            </Button>
            <Button
              colorScheme="pink"
              backgroundColor="rgb(237,100,166)"
              variant="solid"
            >
              Sign Up


            </Button>
          </Stack>
        </div>
      </LeftBox>
    
    </Header>
  );
};

export default Navbar;
