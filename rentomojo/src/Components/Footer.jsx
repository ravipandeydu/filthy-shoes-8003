import React from 'react';
import { Box, Button, Center, Container, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import {TbBrandTelegram} from "react-icons/tb";

const Footer = () => {
  return (
    <Center background={"#fafafa"} textAlign={"left"}>
        
        <Flex gap={"250px"} margin={"0px 15px"} padding={"16px 15px"}>
            <Box>
                <Text fontWeight= "600" size='14px' color="#313131" margin={"0 0 20px"}>RENTOMOJO</Text>
                <Text color="#717171" margin={"10px 0px"}>About Us</Text>
                <Text color="#717171" margin={"10px 0px"}>Culture</Text>
                <Text color="#717171" margin={"10px 0px"}>Investors</Text>
                <Text color="#717171" margin={"10px 0px"}>Careers</Text>
                <Text color="#717171" margin={"10px 0px"}>Contact</Text>
                <Text color="#717171" margin={"10px 0px"}>Our Benefits</Text>
                <Text color="#717171" margin={"10px 0px"}>Sitemap</Text>
            </Box>
            <Box>
                <Text fontWeight= "600" size='14px' color="#313131" margin={"0 0 20px"}>INFORMATION</Text>
                <Text color="#717171" margin={"10px 0px"}>Blog</Text>
                <Text color="#717171" margin={"10px 0px"}>FAQS</Text>
                <Text color="#717171" margin={"10px 0px"}>Documents Required</Text>
            </Box>
            <Box>
                <Text fontWeight= "600" size='14px' color="#313131" margin={"0 0 20px"}>POLICIES</Text>
                <Text color="#717171" margin={"10px 0px"}>Shipping Policy</Text>
                <Text color="#717171" margin={"10px 0px"}>Cancellation & Return</Text>
                <Text color="#717171" margin={"10px 0px"}>Privacy Policy</Text>
                <Text color="#717171" margin={"10px 0px"}>Rental Terms & Conditions</Text>
                <Text color="#717171" margin={"10px 0px"}>Referral Terms & Conditions</Text>
            </Box>
            <Box>
                <Text fontWeight= "600" size='14px' color="#313131" margin={"0 0 20px"}>NEED HELP ?</Text>
                <Box margin={"0px 0px 15px"}><Button>Chat with us (9AM - 6PM)</Button></Box>
                <Flex gap={"10px"} margin={"0px 0px 15px"}>
                    <Center><TbBrandTelegram size={"20px"} /></Center>
                    <Text color="#717171">jo@rentomojo.com</Text>
                </Flex>
                <Text fontWeight= "600" size='14px' color="#313131" margin={"0 0 20px"}>DOWNLOAD APP</Text>
                <Image alt='App Stote' width={"250px"} src={"https://www.freepnglogos.com/uploads/app-store-logo-png/google-play-and-apple-app-store-logos-22.png"} />
            </Box>
        </Flex>
    </Center>
  )
}

export default Footer