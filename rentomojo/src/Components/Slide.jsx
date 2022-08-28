import { Badge, Box, Button, Flex, Image, Spacer } from "@chakra-ui/react";

function Slide({ title, price, image }) {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      cursor="pointer"
      backgroundColor="white"
    >
      <Image src={image} alt={title} />

      <Box p="6">
        <Box
          mt="1"
          fontWeight="600"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
          textAlign="left"
          fontSize="18px"
          color="#313131"
          margin="20px 0px"
        >
          {title}
        </Box>
        <Flex>
          <Box>
            <Box textAlign="left" fontSize="12px" color="#bababa">
              Rent
            </Box>
            <Box color="#313131" fontSize="14px">
              ₹ {price}
              <Box as="span" color="gray.600" fontSize="14px">
                /mo
              </Box>
            </Box>
          </Box>

          <Spacer />
          <Box display="flex" mt="2" alignItems="center">
            <Button
              colorScheme="red"
              variant="outline"
              fontSize="14px"
              _hover={{ bg: "red", color: "white" }}
            >
              See More
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Slide;
