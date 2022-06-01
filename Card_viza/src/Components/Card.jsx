import React from "react";
import logo from '../assets/visa.png'
import sim from '../assets/chip.png'
import { Box, Container, VStack,
} from "@chakra-ui/react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Card = () => {
const {data}=useContext(DataContext)
  return (
    <VStack width="full" height="full" p={10} spacing={10} align="flex-start" >
     <Container  width='100%' height='1000' position='relative' >
         <Box borderRadius='10' background='silver' h='250px' w='100%' position='absolute' left='35' top='59' > </Box>
         <Box borderRadius='10' background='rgb(246,66,91)'  h='250px' w='100%' position='absolute' left='0.5' top='10'  >
           <div >

              <img width='50px' style={{"marginLeft":'320px', "color":"whitesmoke"}}  src={logo}  alt='logo' />
         <img width='40px' style={{"marginLeft":"20px"}} src={sim} alt='chip'/>
           </div>
           {data.cardnumber ? <h3 style={{"margin":"20px", 'color':"white", "fontSize":"30px" }}>{data.cardnumber}</h3> : <h3 style={{"fontSize":"30px" ,"margin":"20px", 'color':"white"}} >4256 7890 5678 4532</h3> }
       
           <div style={{"display":"flex", "color":"white", "gap": "5%"}}>
             <div style={{"marginLeft":"5%","flex":"1"}} >
               <p><b>CARDHOLDER</b></p>
              {data.name ? <p>{data.name}</p> : <p>Suraj Ahirwar</p>}
             </div>
             <div style={{"flex":"1"}}>
               <p><b>EXPIRES</b></p>
              {data.exp && data.year? <p>{data.emonth}/{data.year}</p> : <p>09/20</p> } 
             </div>
             <div style={{"flex":"1"}}>
               <p><b>CVC</b></p>
             {data.cvc?   <p>{data.cvc}</p> : <p>354</p>}
             </div>
           </div>
         </Box>
     </Container>
    </VStack>
  );
};

export default Card;
