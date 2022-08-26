import { Box, Flex, Heading } from "@chakra-ui/react"
import { Appliances, Electronics, Furniture, Packages } from "./AllIcons"


const Category = () => {
  return (
    <Flex>
        <Box>
            <Packages fontSize="75px" />
            <Heading as="h1" size="16px">Packages</Heading>
        </Box>
        <Box>
            <Furniture fontSize="75px" />
            <Heading as="h1" size="16px">Furniture</Heading>
        </Box>
        <Box>
            <Appliances fontSize="75px" />
            <Heading as="h1" size="16px">Appliances</Heading>
        </Box>
        <Box>
            <Electronics fontSize="75px" />
            <Heading as="h1" size="16px">Electronics</Heading>
        </Box>
    </Flex>
  )
}

export default Category