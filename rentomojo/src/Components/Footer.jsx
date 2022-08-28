import React from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  VStack
} from "@chakra-ui/react";
import { TbBrandTelegram } from "react-icons/tb";

const Footer = () => {
  return (
    <Box background={"#fafafa"}>
      <Box maxW="1500px" margin="auto">
        <SimpleGrid columns={4} margin={"0px 15px"} padding={"16px 15px"}>
          <Box>
            <Text
              fontWeight="600"
              size="14px"
              color="#313131"
              margin={"0 0 20px"}
              textAlign="left"
            >
              RENTOMOJO
            </Text>
            <Text color="#717171" margin={"10px 0px"} textAlign={"left"}>
              About Us
            </Text>
            <Text color="#717171" margin={"10px 0px"} textAlign={"left"}>
              Culture
            </Text>
            <Text color="#717171" margin={"10px 0px"} textAlign={"left"}>
              Investors
            </Text>
            <Text color="#717171" margin={"10px 0px"} textAlign={"left"}>
              Careers
            </Text>
            <Text color="#717171" margin={"10px 0px"} textAlign={"left"}>
              Contact
            </Text>
            <Text color="#717171" margin={"10px 0px"} textAlign={"left"}>
              Our Benefits
            </Text>
            <Text color="#717171" margin={"10px 0px"} textAlign={"left"}>
              Sitemap
            </Text>
          </Box>
          <Box>
            <Text
              fontWeight="600"
              size="14px"
              color="#313131"
              margin={"0 0 20px"}
              textAlign={"left"}
            >
              INFORMATION
            </Text>
            <Text color="#717171" margin={"10px 0px"} textAlign={"left"}>
              Blog
            </Text>
            <Text color="#717171" margin={"10px 0px"} textAlign={"left"}>
              FAQS
            </Text>
            <Text color="#717171" margin={"10px 0px"} textAlign={"left"}>
              Documents Required
            </Text>
          </Box>
          <Box>
            <Text
              fontWeight="600"
              size="14px"
              color="#313131"
              margin={"0 0 20px"}
              textAlign={"left"}
            >
              POLICIES
            </Text>
            <Text color="#717171" margin={"10px 0px"} textAlign={"left"}>
              Shipping Policy
            </Text>
            <Text color="#717171" margin={"10px 0px"} textAlign={"left"}>
              Cancellation & Return
            </Text>
            <Text color="#717171" margin={"10px 0px"} textAlign={"left"}>
              Privacy Policy
            </Text>
            <Text color="#717171" margin={"10px 0px"} textAlign={"left"}>
              Rental Terms & Conditions
            </Text>
            <Text color="#717171" margin={"10px 0px"} textAlign={"left"}>
              Referral Terms & Conditions
            </Text>
          </Box>
          <Box>
            <Text
              fontWeight="600"
              size="14px"
              color="#313131"
              margin={"0 0 20px"}
              textAlign={"left"}
            >
              NEED HELP ?
            </Text>
            <Box margin={"0px 0px 15px"} textAlign={"left"}>
              <Button>Chat with us (9AM - 6PM)</Button>
            </Box>
            <Flex gap={"10px"} margin={"0px 0px 15px"}>
              <Center>
                <TbBrandTelegram size={"20px"} />
              </Center>
              <Text color="#717171">jo@rentomojo.com</Text>
            </Flex>
            <Text
              fontWeight="600"
              size="14px"
              color="#313131"
              margin={"0 0 20px"}
              textAlign={"left"}
            >
              DOWNLOAD APP
            </Text>
            <Image
              alt="App Stote"
              width={"250px"}
              src={
                "https://www.freepnglogos.com/uploads/app-store-logo-png/google-play-and-apple-app-store-logos-22.png"
              }
            />
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Footer;
