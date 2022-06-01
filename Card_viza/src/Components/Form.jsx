import React, { useState } from "react";
import user from "../assets/user.png";
import calender from "../assets/calendar.png";
import cal from "../assets/cal.png";
import lock from "../assets/padlock.png";
import card from "../assets/credit-card.png";
import { FormControl, FormLabel, GridItem, Input, SimpleGrid, VStack,Button, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
const Form = () => {
  const { handelsetdata } = useContext(DataContext);
  
  const handelsubmit=()=>{
  handelsetdata(formdata);
  }
  const [formdata, setFormData] = useState({
    cardnumber: "",
    name: "",
    year: "",
    exp: "",
    cvc: "",
    amount: ""
  });
  const handelChange = (e) => {
    const { name, value } = e.target;
    const newdata = { ...formdata };
    newdata[name] = value;
    setFormData(newdata);
  };

  

  return (
    <VStack w="100%" height="full" p={10} spacing={10} align="flex-start" marginTop='2px'>
      <p>Payment Details</p>
      <SimpleGrid columns={15} columnGap={3} rowGap={2}>
        <GridItem colSpan={15}>
          <FormControl >
            <FormLabel marginBottom="-2" color="grey" fontSize={12}>CARDHOLDER NAME</FormLabel>
            <div style={{ display: "flex" }}>
              <div>
                <img
                  style={{ marginTop: "13px" }}
                  width="20px"
                  src={user}
                ></img>
              </div>
              <div>
                <Input
                  color='black'
                  marginBottom="4"
                  variant="flushed"
                  marginLeft="1"
                  borderBottomColor="rgb(246,66,91)"
                  placeholder="Suraj Ahirwar"
                  onChange={handelChange}
                  name="name"
                />
              </div>
            </div>
          </FormControl>
        </GridItem>
        <GridItem colSpan={15}>
          <FormControl>
            <FormLabel marginBottom="-2" color="grey" fontSize={12}>CARD NUMBER</FormLabel>
            <div style={{ display: "flex" }}>
              <div>
                <img
                  style={{ marginTop: "13px" }}
                  width="20px"
                  src={card}
                  alt=""
                />
              </div>
              <div>
                <Input
                color='black'
                  marginBottom="4"
                  variant="flushed"
                  marginLeft="1"
                  type="number"
                  borderBottomColor="rgb(246,66,91)"
                  placeholder="4256 7890 5678 4532"
                  onChange={handelChange}
                  name="cardnumber"
                />
              </div>
            </div>
          </FormControl>
        </GridItem>
        <GridItem colSpan={6}>
          <FormControl>
            <FormLabel marginBottom="-2" color="black" fontSize={12}>EXPIRY MONTH</FormLabel>
            <div style={{ display: "flex" }}>
              <div>
                <img
                  style={{ marginTop: "13px" }}
                  width="30px"
                  src={cal}
                  alt=""
                />
              </div>
              <div>
                <Input
                  marginBottom="4"
                  color='black'
                  variant="flushed"
                  placeholder="09"
                  marginLeft="1"
                  borderBottomColor="rgb(246,66,91)"
                  onChange={handelChange}
                  name="exp"
                />
              </div>
            </div>
          </FormControl>
        </GridItem>
        <GridItem colSpan={5}>
          <FormControl>
            <FormLabel marginBottom="-2" color="grey" fontSize={12}>EXPIREY YEAR</FormLabel>
            <div style={{ display: "flex" }}>
              <div>
                <img
                  style={{ marginTop: "13px" }}
                  width="30px"
                  src={calender}
                  alt=""
                />
              </div>

              <div>
                <Input
                  marginBottom="4"
                  variant="flushed"
                  marginLeft="1"
                  color='black'
                  placeholder="20"
                  type="number"
                  borderBottomColor="rgb(246,66,91)"
                  onChange={handelChange}
                  name="year"
                />
              </div>
            </div>
          </FormControl>
        </GridItem>
        <GridItem colSpan={4}>
          <FormControl>
            <FormLabel marginBottom="-2" color="grey" fontSize={12}>CVC</FormLabel>
            <div style={{ display: "flex" }}>
              <div>
                <img
                  style={{ marginTop: "13px" }}
                  width="40px"
                  src={lock}
                  alt=""
                />
              </div>
              <div>
                <Input
                  variant="flushed"
                  color='black'
                  placeholder="354"
                  type="number"
                  marginLeft="1"
                  borderBottomColor="rgb(246,66,91)"
                  onChange={handelChange}
                  name="cvc"
                />
              </div>
            </div>
          </FormControl>
        </GridItem>
      </SimpleGrid>
      <div style={{ display: "flex" , "fontWeight":"bolder" }}>
        <Text color="grey" position="absolute" fontSize={14}>Payment amount:</Text>
        <Input
          name="amount"
          variant="flushed"
          borderBottomColor="tomato"
          style={{ outline: "none" }}
          type="text"
          fontSize='2xl'
          marginLeft="40"
          color='red'
          onChange={handelChange}
         
        ></Input>
      </div>
      <Button  onClick={handelsubmit}  colorScheme="rgb(246,66,91)" background="rgb(246,66,91)" p="20px 60px">
        PAY
      </Button>
    </VStack>
  );
};

export default Form;
