import {
    Box,
    Center,
    Flex,
    Heading,
    SimpleGrid,
    Spacer
  } from "@chakra-ui/react";
  import {
    Appliances,
    Electronics,
    Fitness,
    Furniture,
    Packages,
    Wfh
  } from "./AllIcons";
  
  const Category = () => {
    return (
      <Box maxW="1500px" margin="auto">
        <SimpleGrid
          columns={[4, 4, 6]}
          spacing="20px"
          margin="auto"
          padding="20px 15px"
        >
          <Box
            maxW="260px"
            border="1px solid #e2eaf0"
            borderRadius="10px"
            padding="5px 10px 15px"
            lineHeight="1.5"
            _hover={{
              boxShadow: "dark-lg",
              p: "4",
              rounded: "md",
              bg: "white",
              cursor: "pointer"
            }}
          >
            <Packages fontSize="75px" />
            <Heading as="h3" fontSize="14px" color="#313131" fontWeight="500">
              Packages
            </Heading>
          </Box>
          <Box
            maxW="260px"
            border="1px solid #e2eaf0"
            borderRadius="10px"
            padding="5px 10px 15px"
            lineHeight="1.5"
            _hover={{
              boxShadow: "dark-lg",
              p: "4",
              rounded: "md",
              bg: "white",
              cursor: "pointer"
            }}
          >
            <Furniture fontSize="75px" />
            <Heading as="h3" fontSize="14px" color="#313131" fontWeight="500">
              Furniture
            </Heading>
          </Box>
  
          <Box
            maxW="260px"
            border="1px solid #e2eaf0"
            borderRadius="10px"
            padding="5px 10px 15px"
            lineHeight="1.5"
            _hover={{
              boxShadow: "dark-lg",
              p: "4",
              rounded: "md",
              bg: "white",
              cursor: "pointer"
            }}
          >
            <Appliances fontSize="75px" />
            <Heading as="h3" fontSize="14px" color="#313131" fontWeight="500">
              Appliances
            </Heading>
          </Box>
  
          <Box
            maxW="260px"
            border="1px solid #e2eaf0"
            borderRadius="10px"
            padding="5px 10px 15px"
            lineHeight="1.5"
            _hover={{
              boxShadow: "dark-lg",
              p: "4",
              rounded: "md",
              bg: "white",
              cursor: "pointer"
            }}
          >
            <Electronics fontSize="75px" />
            <Heading as="h3" fontSize="14px" color="#313131" fontWeight="500">
              Electronics
            </Heading>
          </Box>
  
          <Box
            maxW="260px"
            border="1px solid #e2eaf0"
            borderRadius="10px"
            padding="5px 10px 15px"
            lineHeight="1.5"
            _hover={{
              boxShadow: "dark-lg",
              p: "4",
              rounded: "md",
              bg: "white",
              cursor: "pointer"
            }}
          >
            <Fitness fontSize="75px" />
            <Heading as="h3" fontSize="14px" color="#313131" fontWeight="500">
              Fitness
            </Heading>
          </Box>
  
          <Box
            maxW="260px"
            border="1px solid #e2eaf0"
            borderRadius="10px"
            padding="5px 10px 15px"
            lineHeight="1.5"
            _hover={{
              boxShadow: "dark-lg",
              p: "4",
              rounded: "md",
              bg: "white",
              cursor: "pointer"
            }}
          >
            <Wfh fontSize="75px" />
            <Heading as="h3" fontSize="14px" color="#313131" fontWeight="500">
              Electronics
            </Heading>
          </Box>
        </SimpleGrid>
      </Box>
    );
  };
  
  export default Category;
  