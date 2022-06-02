import React from "react";
import {Logo,Left,Mid, Header, LeftBox } from "./Navbar.style"
import { Button, Stack } from "@chakra-ui/react";
import { Routes, Route, Link } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
const Navbar = () => {
  return (
    
    <Header> 
      <div>
      <Link  to="/"><Logo color="black">Logo</Logo></Link>
       
      </div>
      <Left>
        <Menu>
          <Link to="/"> <MenuButton  _focus={{ boxShadow: "none" }}  _hover={{ bg: "rgb(11,197,234)" }} bg='white'  as={Button}>Home</MenuButton></Link>
          
        </Menu>
      </Left>
      <Left>
      <Menu>
         <Link to="/products"><MenuButton _focus={{ boxShadow: "none" }}  _hover={{ bg: "rgb(11,197,234)" }} bg='white'  as={Button}>Product</MenuButton></Link> 
          
        </Menu>
      </Left>
      <Mid>
       <Link to="/about"> <Button _focus={{ boxShadow: "none" }}  _hover={{ bg: "rgb(11,197,234)" }} variant="ghost">
         About
        </Button></Link>
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
