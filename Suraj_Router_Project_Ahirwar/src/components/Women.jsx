
import React, {useState, useEffect} from "react";
import axios from "axios"
import { Box,Badge ,Image ,Icon } from '@chakra-ui/react'
import { Grid, Spacer } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom';
import { Button, ButtonGroup } from '@chakra-ui/react'
import {Fotter} from "./Fotter"
import './Style.css'


export const Women = () =>{

    const [product, setProduct] = useState([])
    
    useEffect(()=>{
        
        axios.get("http://localhost:8080/women").then((response)=>{
            console.log(response.data)
            setProduct(response.data) 
        });
        
    },[])
    const property = {
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: 'Modern home in city center in the heart of historic Los Angeles',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,
    }
    
    const navigate=useNavigate()
    const senddata = (id) => {
            if(id){
                console.log(id);
                navigate(`/women/${id}`)
            }
            
    } 
   

    return (
        <div>
        <div className="mendivinner">
            {product.map((e)=>(
        
        
      <Box key={e.id}  onClick={()=> senddata(e.id)} maxW='xs' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image margin="auto"   boxSize='cover' objectFit='cover' src={e.Image} alt="not here" />
  
        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='2' colorScheme='teal'>
              New
            </Badge>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
              {property.beds} beds &bull; {property.baths} baths
            </Box>
          </Box>
  
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {e.title}
          </Box>
  
          <Box>
            {e.price}
            <Box as='span' color='gray.600' fontSize='sm'>
              $/ wk
            </Box>
          </Box>
  
          <Box display='flex' mt='2' alignItems='center'>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <Icon
                name="star"
                key={i}
                color={i < property.rating ? "teal.500" : "gray.300"}
              />
              ))}
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
              {property.reviewCount} reviews
              <Button colorScheme='teal' ml={2} size='sm'>View details</Button>
            </Box>
          </Box>
        </Box>
      </Box>
          
          ))}
          </div>
          {/* <Fotter /> */}
          </div>
    )
}