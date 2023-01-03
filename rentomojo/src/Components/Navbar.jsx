import React from "react";
import {
  Button,
  Image,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Box,
  Spacer,
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";
import { AiOutlineShoppingCart, AiOutlineDown } from "react-icons/ai";
import SignIn from "./SignIn";

const Navbar = () => {

  return (
    <Box maxW="1500px" margin="auto">
      <Box style={{ display: "flex" }}>
        <Box display={"flex"} alignItems={"center"} width={"250px"} gap="15px">
          <Box>
            <Image
              width="300px"
              src={
                "https://s3-us-west-2.amazonaws.com/cbi-image-service-prd/modified/34e7cf10-932f-495d-aa1f-d76577d50be4.png"
              }
            />
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={"2px"}>
            <Text>Delhi</Text>
            <AiOutlineDown />
          </Box>
        </Box>
        <Spacer />
        <Box
          display={"flex"}
          width={"75%"}
          alignItems={"center"}
          gap="15px"
          justifyContent={"left"}
          padding="0px 20px"
        >
          <Box size="lg" width={"83%"}>
            <InputGroup>
              <Input pr="4.5rem" placeholder="Search for products" />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm">
                  <SearchIcon />
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>

          <Box display={"flex"} alignItems={"center"} gap={"5px"}>
            <AiOutlineShoppingCart />
            <Text>Cart</Text>
          </Box>
          <Box><SignIn /></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
