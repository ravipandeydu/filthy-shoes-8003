import React from 'react';
import { Button, Image, Text, Input, InputGroup, InputRightElement, Container, Box } from '@chakra-ui/react';
import {SearchIcon} from "@chakra-ui/icons";
import {AiOutlineShoppingCart, AiOutlineDown} from "react-icons/ai"

const Navbar = () => {
  return (
    <Container maxW='1500px' style={{display: "flex"}}>
        <Box display={"flex"} alignItems={"center"} width={"250px"} gap="15px" >
            <Box>
                <Image width='300px' src={"https://s3-us-west-2.amazonaws.com/cbi-image-service-prd/modified/34e7cf10-932f-495d-aa1f-d76577d50be4.png"} />
            </Box>
            <Box display={"flex"} alignItems={"center"} gap={"2px"}>
                <Text>Delhi</Text>
                <AiOutlineDown />
            </Box>
        </Box>
        <Box display={"flex"} width={"75%px"} alignItems={"center"} gap="15px" justifyContent={"left"}>
            <Box>
                    <InputGroup size='md' width={"882px"} marginLeft={"150px"}>
                <Input
                    pr='4.5rem'
                    placeholder='Search for products'
                />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm'>
                    <SearchIcon />
                    </Button>
                </InputRightElement>
                </InputGroup>
            </Box>
            
            <Box display={"flex"} alignItems={"center"} gap={"5px"}>
                <AiOutlineShoppingCart />
                <Text>Cart</Text>
            </Box>
            
            <Box>
                <Button colorScheme='red'>LOGIN/SIGNUP</Button>
            </Box>
        </Box>
        
        
        
        
        
    

        
    </Container>
  )
}

export default Navbar

//rafce