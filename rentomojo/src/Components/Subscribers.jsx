import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Circle,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Spacer,
  Text
} from "@chakra-ui/react";
import { useState } from "react";
import { Quotes } from "./AllIcons";
import Slide2 from "./Slide2";

const data = [
  {
    id: 1,
    title: "Kushal Tiwari",
    image:
      "https://www.rentomojo.com/public/images/testimonials/kushal-tiwari.jpg",
    message:
      "Marriage comes with a lot of unavoidable expenses in India and spending a big chunk of your savings on furniture and white goods could be a big challenge. RentoMojo not just took away all our worries but in fact went to the extent of spoiling us. Where I could have owned just some bare essentials after making a huge hole in my pocket or paid unnecessary EMIs, I could smartly own a lot of stuff which would have come much later on my list. Heartfelt thanks to  the whole Rentomojo team for making our renting experience completely hassle-free. It has been two great years and I am sure there are many more to come."
  },
  {
    id: 2,
    title: "Navin Kumar",
    image:
      "https://www.rentomojo.com/public/images/testimonials/navin-kumar.jpg",
    message:
      "When I moved to Bangalore from Chennai, I went to multiple websites to get a bed until I found out about Rentomojo. I rented a bed and mattress, just to try it out. They delivered it within a day and set it up at my place without any hassle. Now I sleep so peacefully that I always end up being late for work :D"
  },
  {
    id: 3,
    title: "Anjali Sharma",
    image:
      "https://www.rentomojo.com/public/images/testimonials/anjali-sharma.jpg",
    message:
      "I got to know about RentoMojo through a friend and looked up for AC on their website and finally rented one. The delivery guys installed the AC in 2 days. And with a such a low deposit and rent, I didn't have to spend a whole lot for my comfort. Thank you RentoMojo, for being so easy breezy on my pocket."
  },
  {
    id: 4,
    title: "Shreyas Ravetkar",
    image:
      "https://www.rentomojo.com/public/images/testimonials/shreyas-ravetkar.jpg",
    message:
      "Rentomojo was unbelievably helpful. Never thought that setting up a new place would be just few clicks away. The customer support staff was on their toes to help me. Anytime I need something for my house, Rentomojo has it. :)"
  },
  {
    id: 5,
    title: "Nikita Sharma",
    image:
      "https://www.rentomojo.com/public/images/testimonials/nikita-sharma.jpg",
    message:
      "The thought of renting the furniture had never occurred to me. When I saw Rentomojo's affordable range, I was super excited to try and it was really amazing. From service to product quality, everything was superb. I don’t have to carry the same furniture to every house I move to and can change the look of my home whenever I want 😬"
  },
  {
    id: 6,
    title: "Manish Srivastava",
    image:
      "https://www.rentomojo.com/public/images/testimonials/manish-srivastava.jpg",
    message:
      "I was suddenly asked to move to Chennai from Bengaluru in couple of days. Everything was garbled for me and huge tension of getting apartment, buying furnitures, selling while going back to Bangalore. Thanks to RentoMojo for excellent budgeted plans. With few mouse clicks and nominal security deposit u are done ☺. No tension for delivery, Rentomojo is a furniture wish wizard. Also takes care of relocation made my life easy. Happy to be a customer for Rentomojo. It made my house a happy home!"
  }
];

export default function Subscriber() {
  const [page, setPage] = useState(0);
  return (
    <Box maxW="1500px" margin="auto">
      <Box padding="100px 0px">
        <Flex gap="20px">
          <Box maxW="500px" padding="70px 90px">
            <Box margin="0px 0px 30px">
              <Box
                textAlign="left"
                fontSize="22px"
                color="#313131"
                fontWeight="400"
              >
                Over 1.5 lac
              </Box>
              <Box
                textAlign="left"
                fontSize="22px"
                color="#313131"
                fontWeight="400"
              >
                happy subscribers
              </Box>
              <Divider width="50px" />
              <Box
                fontSize="18px"
                color="#717171"
                fontWeight="400"
                textAlign="left"
              >
                <Text width="70%">
                  Here's what they have to say about their RentoMojo experience.
                </Text>
              </Box>
            </Box>
            <Box textAlign="left">
              <Button
                variant="ghost"
                disabled={page === 0}
                _hover={{ bg: "white" }}
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
                disabled={page === data.length - 1}
                page={page}
                onClick={() => setPage(page + 1)}
              >
                <Circle size="50px" color="#313131" border="1px solid">
                  <ChevronRightIcon fontSize="30px" />
                </Circle>
              </Button>
            </Box>
          </Box>
          <Box maxWidth="880px">
            <Quotes fontSize="250px" position="absolute" />
            <Box padding="50px 0px">
              <Slide2
                title={data[page].title}
                message={data[page].message}
                image={data[page].image}
              />
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
