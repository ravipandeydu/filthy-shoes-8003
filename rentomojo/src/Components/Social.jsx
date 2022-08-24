import React from 'react';
import { Box, Button, Center, Circle, Container, Divider, Flex, Heading, HStack, Image, Spacer, Text, VStack } from '@chakra-ui/react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaDribbble } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

const Social = () => {
  return (
    <Box background={"#fafafa"}>
      <Divider orientation='horizontal' />
    <Center textAlign={"left"}>
      
        
        <Flex gap={"250px"} margin={"0px 15px"} padding={"16px 15px"}>
            <Box>
                <Text color="#717171" margin={"10px 0px"}>© 2022. Edunetwork Pvt. Ltd.</Text>
            </Box>
            <Spacer />
            <HStack>
              <Circle size='40px' color='#717171' border="1px solid">
                <FaFacebookF />
              </Circle>
              <Circle size='40px' color='#717171' border="1px solid">
                <FaTwitter />
              </Circle>
              <Circle size='40px' color='#717171' border="1px solid">
                <FaLinkedinIn />
              </Circle>
              <Circle size='40px' color='#717171' border="1px solid">
                <FaYoutube />
              </Circle>
              <Circle size='40px' color='#717171' border="1px solid">
                <ImInstagram />
              </Circle>
              <Circle size='40px' color='#717171' border="1px solid">
                <FaDribbble />
              </Circle>
          </HStack>
            <Spacer />
            <Box>
                <Button>Go Up</Button>
            </Box>
        </Flex>
    </Center>
    </Box>
  )
}

export default Social