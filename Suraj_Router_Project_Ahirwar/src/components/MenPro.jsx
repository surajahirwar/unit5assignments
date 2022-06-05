

import React, {useState, useEffect} from "react";
import axios from "axios"
import { Box,Badge ,Image ,Icon, Text,Button } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'


export const MenPro = () =>{
    const [ Product,setProduct] = useState([]);
    const {id} = useParams()
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

useEffect(()=>{
    axios.get(`http://localhost:8080/men/${id}`).then((Response)=>{
        
            console.log(Response.data);
            setProduct(Response.data)
            
    })
},[])

return (
        
      <Box maxW='lg'  ml={400} mt={10} mr={47} borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image mt={10} margin="auto" boxSize='300px' objectFit='cover' src={Product.Image} alt="nahi hai" />
  
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
            {Product.title}
          </Box>
         <Text fontFamily="sans-serif" color="gray"  fontSize="14px">{Product.details} </Text>
          <Box>
            {Product.price}$
            <Box as='span' color='gray.600' fontSize='sm'>
              / wk
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
                {Product.off}
              <Button colorScheme='teal' ml={20} size='sm'>Add to cart</Button>

                
            </Box>
          </Box>
        </Box>
        
      </Box>
 
);
};