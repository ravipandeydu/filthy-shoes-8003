import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  FormControl,
  Flex,
  Menu,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuButton,
  useDisclosure,
  Image,
  Input,
  Text,
  Spacer,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";

const SignIn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [userType, setUserType] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  function handleContinue(email) {
    axios
      .post("http://localhost:8080/user", { email })
      .then((res) => setUserType(res.data));
  }

  async function handleLogin(email, password) {
    await axios
      .post("http://localhost:8080/user/login", { email, password })
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        setIsAuth(true);
        onClose();
      });
  }

  async function handleSignUp(name, email, password) {
    await axios
      .post("http://localhost:8080/user/signup", { name, email, password })
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        setIsAuth(true);
        onClose();
      });
  }
  return (
    <Box>
      <Box>
        {!isAuth ? (
          <Button colorScheme="red" onClick={onOpen}>
            LOGIN/SIGNUP
          </Button>
        ) : (
          <Menu>
            <MenuButton as={Button} colorScheme="pink">
              {user?.user.name}
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
      {!userType ? (
        <Modal onClose={onClose} size={"4xl"} isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <Flex>
              <Box width="55%">
                <Image src={"https://i.gifer.com/PSFA.gif"} />
              </Box>
              <Box>
                <ModalHeader>Enter your email to Signup or Login</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter Your Email*"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <Button onClick={() => handleContinue(email)}>
                      Continue
                    </Button>
                  </FormControl>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={() => handleContinue(email)}>
                    Continue
                  </Button>
                </ModalFooter>
              </Box>
            </Flex>
          </ModalContent>
        </Modal>
      ) : userType === "registered" ? (
        <Modal onClose={onClose} size={"4xl"} isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <Flex>
              <Box width="55%">
                <Image src={"https://i.gifer.com/PSFA.gif"} />
              </Box>
              <Box width="45%">
                <ModalHeader>Please Login</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Input mb={4} value={email} disabled />
                  <FormControl>
                    <Input
                      placeholder="Enter The Password*"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormControl>
                  <Flex>
                    <Box color="tomato"></Box>
                    <Spacer />
                    <Box color="tomato">Change Email</Box>
                  </Flex>
                </ModalBody>
                <ModalFooter>
                  <Button
                    onClick={() => {
                      handleLogin(email, password);
                    }}
                  >
                    Login
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
                <ModalHeader>Sign Up</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Input mb={4} value={email} disabled />
                  <FormControl>
                    <Input
                      placeholder="Enter Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <Input
                      placeholder="Enter Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormControl>
                  <Flex>
                    <Box color="tomato"></Box>
                    <Spacer />
                    <Box color="tomato">Change Email</Box>
                  </Flex>
                </ModalBody>
                <ModalFooter>
                  <Button
                    onClick={() => {
                        handleSignUp(name, email, password)
                    }}
                  >
                    Sign Up
                  </Button>
                </ModalFooter>
              </Box>
            </Flex>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default SignIn;
