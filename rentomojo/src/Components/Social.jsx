import React from "react";
import { useRef } from "react";
import {
  Box,
  Button,
  Center,
  Circle,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Spacer,
  Text,
  VStack
} from "@chakra-ui/react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaDribbble
} from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

const Social = () => {
  return (
    <Box background={"#fafafa"}>
      <Box maxW="1500px" margin="auto">
        <Divider orientation="horizontal" />
        <SimpleGrid columns={3} padding="50px 0px">
          <Box>
            <Text color="#717171" margin={"10px 0px"}>
              © 2022. Edunetwork Pvt. Ltd.
            </Text>
          </Box>
          <HStack>
            <Circle size="40px" color="#717171" border="1px solid">
              <FaFacebookF />
            </Circle>
            <Circle size="40px" color="#717171" border="1px solid">
              <FaTwitter />
            </Circle>
            <Circle size="40px" color="#717171" border="1px solid">
              <FaLinkedinIn />
            </Circle>
            <Circle size="40px" color="#717171" border="1px solid">
              <FaYoutube />
            </Circle>
            <Circle size="40px" color="#717171" border="1px solid">
              <ImInstagram />
            </Circle>
            <Circle size="40px" color="#717171" border="1px solid">
              <FaDribbble />
            </Circle>
          </HStack>
          <Box>
            <Button>Go Up</Button>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Social;
