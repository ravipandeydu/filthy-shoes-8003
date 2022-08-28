import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, Circle, Divider, Flex, Spacer } from "@chakra-ui/react";
import { useState } from "react";
import Slide from "./Slide";

const data = [
  {
    id: 1,
    title: "Atticus Wooden Single",
    image: "https://p.rmjo.in/productSquare/hc4dc706-500x500.jpg",
    price: 339
  },
  {
    id: 2,
    title: "Morris Office Chair",
    image: "https://p.rmjo.in/productSquare/esf6ag3q-500x500.jpg",
    price: 199
  },
  {
    id: 3,
    title: "Microwave Solo 20L",
    image: "https://p.rmjo.in/productSquare/n97vj5on-500x500.jpg",
    price: 299
  },
  {
    id: 4,
    title: "Single Door Fridge",
    image: "https://p.rmjo.in/productSquare/t9nfjx7q-500x500.jpg",
    price: 809
  },
  {
    id: 5,
    title: "Rowling Bookshelf Medium",
    image: "https://p.rmjo.in/productSquare/dwp7yb0x-500x500.jpg",
    price: 109
  },
  {
    id: 6,
    title: "Miller Office Chair",
    image: "https://p.rmjo.in/productSquare/mnuazvk3-500x500.jpg",
    price: 149
  },
  {
    id: 7,
    title: "Stuart Study Table",
    image: "https://p.rmjo.in/productSquare/em6h6xgy-500x500.jpg",
    price: 149
  },
  {
    id: 8,
    title: "Door Wardrobe",
    image: "https://p.rmjo.in/productSquare/fgb0p38q-500x500.jpg",
    price: 409
  },
  {
    id: 9,
    title: "Rowling BookShelf Small",
    image: "https://p.rmjo.in/productSquare/2yrmpjxd-500x500.jpg",
    price: 109
  },
  {
    id: 10,
    title: "Gordon 4-Seater Dining",
    image: "https://p.rmjo.in/productSquare/3viuyvz5-500x500.jpg",
    price: 789
  },
  {
    id: 11,
    title: "Poise Wooden King Bed",
    image: "https://p.rmjo.in/productSquare/lpm7f0x2-500x500.jpg",
    price: 669
  },
  {
    id: 12,
    title: "Aurora Wooden Queen Bed",
    image: "https://p.rmjo.in/productSquare/ygmpue5m-500x500.jpg",
    price: 539
  },
  {
    id: 13,
    title: "Mini Fridge",
    image: "https://p.rmjo.in/productSquare/n0dnrdzs-500x500.jpg",
    price: 449
  },
  {
    id: 14,
    title: "Semi Automatic Washing Machine",
    image: "https://p.rmjo.in/productSquare/49yxucoe-500x500.jpg",
    price: 479
  },
  {
    id: 15,
    title: "LED TV - 40",
    image: "https://p.rmjo.in/productSquare/v308sv6p-500x500.jpg",
    price: 1269
  },
  {
    id: 16,
    title: "OnePlus 7 Pro",
    image: "https://p.rmjo.in/productSquare/mxzy0xf9-500x500.jpg",
    price: 1479
  },
  {
    id: 17,
    title: "Inverter Air Conditioner",
    image: "https://p.rmjo.in/productSquare/5eff000p-500x500.jpg",
    price: 1939
  },
  {
    id: 18,
    title: "Double Door Fridge",
    image: "https://p.rmjo.in/productSquare/3c0jgjfo-500x500.jpg",
    price: 1049
  },
  {
    id: 19,
    title: "Auto Inclination Treadmill",
    image: "https://p.rmjo.in/productSquare/jsxcydcf-500x500.jpg",
    price: 2119
  },
  {
    id: 20,
    title: "Samsung Galaxy Note 10",
    image: "https://p.rmjo.in/productSquare/fhonufah-500x500.jpg",
    price: 1979
  },
  {
    id: 21,
    title: "Single Door Fridge",
    image: "https://p.rmjo.in/productSquare/w7951ctv-500x500.jpg",
    price: 719
  },
  {
    id: 22,
    title: "Top Load Washing Machine",
    image: "https://p.rmjo.in/productSquare/twx4hoa2-500x500.jpg",
    price: 769
  },
  {
    id: 23,
    title: "Air Conditioner 1 Ton",
    image: "https://p.rmjo.in/productSquare/l6xann5r-500x500.jpg",
    price: 1859
  },
  {
    id: 24,
    title: "OnePlus 7T Pro",
    image: "https://p.rmjo.in/productSquare/hzh6xems-500x500.jpg",
    price: 1639
  }
];

export default function Listicle() {
  const [page, setPage] = useState(0);
  return (
    <Box background={"#f5f7fa"}>
    <Box maxW="1500px" margin="auto">
      <Box padding="100px 0px 50px 0px">
        <Flex margin="0px 0px 35px">
          <Box>
            <Box textAlign="left" fontSize="22px" color="#313131">
              You'll love to
            </Box>
            <Box textAlign="left" fontSize="22px" color="#313131">
              take these home
            </Box>
            <Divider width="50px" />
          </Box>
          <Spacer />
          <Box>
            <Button
              variant="ghost"
              disabled={page === 0}
              page={page}
              onClick={() => setPage(page - 1)}
            >
              <Circle size="50px" color="#313131" border="1px solid">
                <ChevronLeftIcon fontSize="30px" />
              </Circle>
            </Button>
            <Button
              variant="ghost"
              _hover={{ bg: "white" }}
              disabled={page === data.length - 4}
              page={page}
              onClick={() => setPage(page + 1)}
            >
              <Circle size="50px" color="#313131" border="1px solid">
                <ChevronRightIcon fontSize="30px" />
              </Circle>
            </Button>
          </Box>
        </Flex>
        <Flex margin="auto" gap="30px">
          <Slide
            title={data[page].title}
            price={data[page].price}
            image={data[page].image}
          />
          <Slide
            title={data[page + 1].title}
            price={data[page + 1].price}
            image={data[page + 1].image}
          />
          <Slide
            title={data[page + 2].title}
            price={data[page + 2].price}
            image={data[page + 2].image}
          />
          <Slide
            title={data[page + 3].title}
            price={data[page + 3].price}
            image={data[page + 3].image}
          />
        </Flex>
      </Box>
    </Box>
    </Box>
  );
}
