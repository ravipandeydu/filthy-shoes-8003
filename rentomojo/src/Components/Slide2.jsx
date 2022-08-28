import {
    Avatar,
    Badge,
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Spacer
  } from "@chakra-ui/react";
  
  function Slide2({ title, message, image }) {
    return (
      <Box
        background="#f5f7fa"
        margin="0px 40px 0px 0px"
        padding="80px 70px 30px"
        maxWidth="800px"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        textAlign="left"
      >
        <Flex margin="0px 0px 10px" gap="20px" alignItems="center">
          <Avatar size="82px" src={image} alt={title} />{" "}
          <Heading as="h4" fontSize="18px" color="#313131" fontWeight="600">
            {title}
          </Heading>
        </Flex>
        <Box padding="0px 15px">
          <Box
            margin="24px 0px 10px"
            fontSize="16px"
            color="#717171"
            fontWeight="400"
            minHeight="270px"
          >
            {message}
          </Box>
        </Box>
      </Box>
    );
  }
  
  export default Slide2;
  