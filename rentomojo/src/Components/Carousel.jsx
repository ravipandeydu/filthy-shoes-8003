import { Box, Button } from "@chakra-ui/react";
import Carousel from "react-bootstrap/Carousel";
import { Virus } from "./AllIcons";

function RmCarousel() {
  return (
    <Box maxW="1500px" margin="auto">
      <Box>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://s.rmjo.in/AirOKWeb%20(1).png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://s.rmjo.in/WP-Web.png"
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </Box>
      <Box bgColor="#d4e0e9" padding="10px" borderBottomRadius="28px">
        {" "}
        <Virus fontSize="30px" /> Safety precautions during COVID-19. We’re
        taking additional steps and precautionary measures to protect our
        community from COVID-19. <Button variant="link">Know more</Button>
      </Box>
    </Box>
  );
}

export default RmCarousel;
