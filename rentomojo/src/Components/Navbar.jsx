import React, { useState } from "react";
import {
  Button,
  Image,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  FormControl,
  Flex,
  Spacer,
  Menu,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
  MenuButton
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";
import { AiOutlineShoppingCart, AiOutlineDown } from "react-icons/ai";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [mobile, setMobile] = useState("");
  const [done, setDone] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [otp, setOtp] = useState("");

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

          <Box>
            {!isAuth ? (
              <Button colorScheme="red" onClick={onOpen}>
                LOGIN/SIGNUP
              </Button>
            ) : (
              <Menu>
                <MenuButton as={Button} colorScheme="pink">
                  Ravi
                </MenuButton>
                <MenuList>
                  <MenuGroup title="Profile">
                    <MenuItem>My Account</MenuItem>
                    <MenuItem>Logout</MenuItem>
                  </MenuGroup>
                </MenuList>
              </Menu>
            )}
          </Box>
          {!done ? (
            <Modal onClose={onClose} size={"4xl"} isOpen={isOpen}>
              <ModalOverlay />
              <ModalContent>
                <Flex>
                  <Box width="55%">
                    <Image src={"https://i.gifer.com/PSFA.gif"} />
                  </Box>
                  <Box>
                    <ModalHeader>
                      Enter your number to Signup or Login
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter Your Phone Number*"
                          value={mobile}
                          maxLength={10}
                          onChange={(e) => setMobile(e.target.value)}
                        />
                        <Box>{mobile.length}/10</Box>
                      </FormControl>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        onClick={() => setDone(true)}
                        disabled={mobile.length === 0}
                      >
                        Continue
                      </Button>
                    </ModalFooter>
                  </Box>
                </Flex>
              </ModalContent>
            </Modal>
          ) : (
            <Modal onClose={onClose} size={"4xl"} isOpen={isOpen}>
              <ModalOverlay />
              <ModalContent>
                <Flex>
                  <Box width="55%">
                    <Image src={"https://i.gifer.com/PSFA.gif"} />
                  </Box>
                  <Box width="45%">
                    <ModalHeader>Please enter the OTP</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter The OTP*"
                          value={otp}
                          maxLength={4}
                          onChange={(e) => setOtp(e.target.value)}
                        />
                      </FormControl>
                      <Text>OTP sent to {mobile}</Text>
                      <Flex>
                        <Box color="tomato">Resend Now</Box>
                        <Spacer />
                        <Box color="tomato">Change Number</Box>
                      </Flex>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        onClick={() => {
                          setIsAuth(true);
                          onClose();
                        }}
                      >
                        Submit
                      </Button>
                    </ModalFooter>
                  </Box>
                </Flex>
              </ModalContent>
            </Modal>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
