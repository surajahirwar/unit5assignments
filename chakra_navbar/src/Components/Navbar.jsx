import React from "react";
import {Logo,Left,Mid, Header, LeftBox } from "./Navbar.style"
import { Button, Stack } from "@chakra-ui/react";

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
        <Logo color="black">Logo</Logo>
      </div>
      <Left>
        <Menu>
          <MenuButton _hover="none" bg='white'  as={Button}>Inspiration</MenuButton>
          <MenuList style={{
              "box-shadow": "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              "padding":"20px"
            }}>
            <MenuItem >Explore Design Work<br />
                      Tranding Design To inspire you 
            </MenuItem>
            <MenuItem>New & NoteWorthy <br/>
                        Up-and-coming Design
            </MenuItem>
          </MenuList>
        </Menu>
      </Left>
      <Left>
      <Menu>
          <MenuButton _hover="none" bg='white'  as={Button}>Inspiration</MenuButton>
          <MenuList style={{
              "box-shadow": "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              "padding":"20px"
            }}>
            <MenuItem>Job board<br />
                      Find your dream design job
            </MenuItem>
            <MenuItem>Freelance Project <br/>
                        An exclusive list of contract work
            </MenuItem>
          </MenuList>
        </Menu>
      </Left>
      <Mid>
        <Button _hover="none" variant="ghost">
          Learn Design
        </Button>
        <Button _hover="none" variant="ghost">
          Hire Designers
        </Button>
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
