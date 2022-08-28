import {
    Box,
    Button,
    Divider,
    Heading,
    SimpleGrid,
    Text
  } from "@chakra-ui/react";
  import {
    Cancel,
    EasyReturn,
    Finest,
    Maintenance,
    Relocation,
    Upgrading
  } from "./AllIcons";
  
  export default function Benefit() {
    return (
      <Box maxW="1500px" margin="auto">
        <Box padding="96px 0px">
          <Box margin="0px 0px 30px">
            <Box
              textAlign="left"
              fontSize="22px"
              color="#313131"
              fontWeight="400"
            >
              There's more
            </Box>
            <Box
              textAlign="left"
              fontSize="22px"
              color="#313131"
              fontWeight="400"
            >
              to renting
            </Box>
            <Divider width="50px" />
          </Box>
          <SimpleGrid columns={[2, 2, 3]} spacing="40px">
            <Box textAlign="left">
              <Finest fontSize="75px" />
              <Heading
                as="h3"
                fontSize="18px"
                color="#313131"
                margin="20px 0px 10px"
                fontWeight="600"
              >
                Finest-quality products
              </Heading>
              <Text
                fontSize="14px"
                color="#717171"
                fontWeight="400"
                margin="0px 0px 10px"
              >
                Quality matters to you, and us! That's why we do a strict
                quality-check for every product.
              </Text>
            </Box>
            <Box textAlign="left">
              <Relocation fontSize="75px" />
              <Heading
                as="h3"
                fontSize="18px"
                color="#313131"
                margin="20px 0px 10px"
                fontWeight="600"
              >
                Free relocation
              </Heading>
              <Text
                fontSize="14px"
                color="#717171"
                fontWeight="400"
                margin="0px 0px 10px"
              >
                Changing your house or even your city? We'll relocate your rented
                products for free.
              </Text>
            </Box>
            <Box textAlign="left">
              <Maintenance fontSize="75px" />
              <Heading
                as="h3"
                fontSize="18px"
                color="#313131"
                margin="20px 0px 10px"
                fontWeight="600"
              >
                Free maintenance
              </Heading>
              <Text
                fontSize="14px"
                color="#717171"
                fontWeight="400"
                margin="0px 0px 10px"
              >
                Keeping your rented products in a spick and span condition is on
                us, so you can sit back and relax.
              </Text>
            </Box>
            <Box textAlign="left">
              <Cancel fontSize="75px" />
              <Heading
                as="h3"
                fontSize="18px"
                color="#313131"
                margin="20px 0px 10px"
                fontWeight="600"
              >
                Cancel anytime
              </Heading>
              <Text
                fontSize="14px"
                color="#717171"
                fontWeight="400"
                margin="0px 0px 10px"
              >
                Pay only for the time you use the product and close your
                subscription without any hassle.
              </Text>
            </Box>
            <Box textAlign="left">
              <EasyReturn fontSize="75px" />
              <Heading
                as="h3"
                fontSize="18px"
                color="#313131"
                margin="20px 0px 10px"
                fontWeight="600"
              >
                Easy return on delivery
              </Heading>
              <Text
                fontSize="14px"
                color="#717171"
                fontWeight="400"
                margin="0px 0px 10px"
              >
                If you don't like the product on delivery, you can return it right
                away—no questions asked.
              </Text>
            </Box>
            <Box textAlign="left">
              <Upgrading fontSize="75px" />
              <Heading
                as="h3"
                fontSize="18px"
                color="#313131"
                margin="20px 0px 10px"
                fontWeight="600"
              >
                Keep upgrading
              </Heading>
              <Text
                fontSize="14px"
                color="#717171"
                fontWeight="400"
                margin="0px 0px 10px"
              >
                Bored of the same product? Upgrade to try another, newer design
                and enjoy the change!
              </Text>
            </Box>
          </SimpleGrid>
          <Box textAlign="left">
            <Button
              colorScheme="teal"
              variant="ghost"
              _hover={{ bgColor: "white" }}
            >
              KNOW MORE
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }
  