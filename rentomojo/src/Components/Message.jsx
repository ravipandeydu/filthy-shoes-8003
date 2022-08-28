import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Heading,
  ListItem,
  Text,
  UnorderedList
} from "@chakra-ui/react";
import { useState } from "react";

export default function Message() {
  const [readMore, setReadMore] = useState(false);

  function handleReadMore() {
    setReadMore(!readMore);
  }
  return (
    <Box background={"#fafafa"}>
      <Box maxW="1500px" margin="auto">
        <Box padding="50px 0px 20px">
          <Box margin="auto" padding="16px 15px" maxW="1500px">
            <Heading
              as="h1"
              fontSize="14px"
              textAlign="left"
              margin="25px 0px 0px"
              fontWeight="700"
              color="#717171"
            >
              Choose RentoMojo In Delhi And Enjoy Massive Savings
            </Heading>
            <Text
              fontSize="12px"
              textAlign="left"
              margin="0px 0px 12px"
              color="#717171"
              fontWeight="200"
            >
              RentoMojo is a top-rated Indian rental brand, with an established
              presence across several major cities, including the capital:
              Delhi! When you purchase furniture, appliances, and electronics
              from a store, you spend a great deal of money. You can rent the
              same furniture, appliance, or electronics item from us for a
              fraction of the retail price.
            </Text>
            <Text
              fontSize="12px"
              textAlign="left"
              margin="0px 0px 12px"
              color="#717171"
              fontWeight="200"
            >
              Our inventory includes products made by the best, most reputable
              brands in the market. Every product undergoes strict quality
              control checks and is in mint condition. You can rent from us for
              short term or long term. We have something for every need and
              budget.
            </Text>
            <Text
              fontSize="12px"
              textAlign="left"
              margin="0px 0px 12px"
              color="#717171"
              fontWeight="200"
            >
              When you sign up for any plan, you receive many benefits from us
              such as free relocation, free maintenance, and damage waiver. You
              can rent from us online in a matter of minutes. As soon as we
              receive your order, we will deliver it to your location in Delhi.
              We offer fast, free delivery all over the capital, including
              localities such as Nehru Place, Greater Kailash, Hauz Khas, Tilak
              Nagar, Moti Bagh, and RK Puram.
            </Text>
            <Box textAlign="left">
              {!readMore ? (
                <Box>
                  <Text
                    onClick={handleReadMore}
                    fontSize="12px"
                    textAlign="left"
                    margin="0px 0px 12px"
                    color="#717171"
                    fontWeight="200"
                    _hover={{ cursor: "pointer" }}
                  >
                    Read More <ChevronRightIcon fontSize="16px" />
                  </Text>
                </Box>
              ) : (
                <Box>
                  <Box>
                    <Heading
                      as="h1"
                      fontSize="14px"
                      textAlign="left"
                      margin="25px 0px 0px"
                      fontWeight="700"
                      color="#717171"
                    >
                      Rent Premium Furniture, Appliances, And Electronics In
                      Delhi
                    </Heading>
                    <Text
                      fontSize="12px"
                      textAlign="left"
                      margin="0px 0px 12px"
                      color="#717171"
                      fontWeight="200"
                    >
                      We offer trendy furniture, essential appliances, and the
                      latest gadgets on rent for your home.
                    </Text>
                    <UnorderedList>
                      <ListItem>
                        <Text
                          fontSize="12px"
                          textAlign="left"
                          margin="0px 0px 12px"
                          color="#717171"
                          fontWeight="200"
                        >
                          <b>
                            <u>Furniture on rent:</u>
                          </b>{" "}
                          We provide a full range of home furniture, made by top
                          brands. You’ll find furniture for your bedroom, living
                          room, kitchen, dining room, balcony or garden,
                          nursery, and study.
                        </Text>
                      </ListItem>
                      <ListItem>
                        <Text
                          fontSize="12px"
                          textAlign="left"
                          margin="0px 0px 12px"
                          color="#717171"
                          fontWeight="200"
                        >
                          <b>
                            <u>Appliances on rent:</u>
                          </b>{" "}
                          Do you need a fridge, a TV, or a microwave? Our
                          inventory includes all the appliances you could ever
                          need.
                        </Text>
                      </ListItem>
                      <ListItem>
                        <Text
                          fontSize="12px"
                          textAlign="left"
                          margin="0px 0px 12px"
                          color="#717171"
                          fontWeight="200"
                        >
                          <b>
                            <u>Electronics on rent:</u>
                          </b>{" "}
                          If you love gadgets, you’ll love what we have to
                          offer! RentoMojo allows you to rent the latest gadgets
                          in the market, including smartphones, laptops,
                          tablets, and smart home devices.
                        </Text>
                      </ListItem>
                      <ListItem>
                        <Text
                          fontSize="12px"
                          textAlign="left"
                          margin="0px 0px 12px"
                          color="#717171"
                          fontWeight="200"
                        >
                          <b>
                            <u>Furniture & appliance packages on rent:</u>
                          </b>{" "}
                          If you need to furnish an entire room or apartment,
                          then opt for our furniture & appliance packages for
                          big discounts!
                        </Text>
                      </ListItem>
                    </UnorderedList>

                    <Heading
                      as="h1"
                      fontSize="14px"
                      textAlign="left"
                      margin="25px 0px 0px"
                      fontWeight="700"
                      color="#717171"
                    >
                      We Provide Exciting Benefits To Our Customers In Delhi
                    </Heading>
                    <Text
                      fontSize="12px"
                      textAlign="left"
                      margin="0px 0px 12px"
                      color="#717171"
                      fontWeight="200"
                    >
                      RentoMojo does more than just save you money. We offer
                      many added benefits to make your rental experience
                      enjoyable.
                    </Text>
                    <UnorderedList>
                      <ListItem>
                        <Text
                          fontSize="12px"
                          textAlign="left"
                          margin="0px 0px 12px"
                          color="#717171"
                          fontWeight="200"
                        >
                          <b>Product swap:</b> Our product swap feature gives
                          you the option of swapping out your rental item for a
                          new, different design every 12 months!
                        </Text>
                      </ListItem>
                      <ListItem>
                        <Text
                          fontSize="12px"
                          textAlign="left"
                          margin="0px 0px 12px"
                          color="#717171"
                          fontWeight="200"
                        >
                          <b>Free maintenance:</b> Thanks to our free
                          maintenance service, your rental item will remain in
                          top condition for as long as you rent it from us.
                        </Text>
                      </ListItem>
                      <ListItem>
                        <Text
                          fontSize="12px"
                          textAlign="left"
                          margin="0px 0px 12px"
                          color="#717171"
                          fontWeight="200"
                        >
                          <b>Damage waiver:</b> You won’t have to worry about
                          minor accidental damages.
                        </Text>
                      </ListItem>
                      <ListItem>
                        <Text
                          fontSize="12px"
                          textAlign="left"
                          margin="0px 0px 12px"
                          color="#717171"
                          fontWeight="200"
                        >
                          <b>Delivery and installation:</b> We will deliver your
                          item anywhere in Delhi, and also install it for you.
                        </Text>
                      </ListItem>
                      <ListItem>
                        <Text
                          fontSize="12px"
                          textAlign="left"
                          margin="0px 0px 12px"
                          color="#717171"
                          fontWeight="200"
                        >
                          <b>Penalty-free Returns:</b> Changed your mind at the
                          time of delivery? You can return any item you just
                          rented and we’ll provide you with a full deposit
                          refund.
                        </Text>
                      </ListItem>
                    </UnorderedList>

                    <Heading
                      as="h1"
                      fontSize="14px"
                      textAlign="left"
                      margin="25px 0px 0px"
                      fontWeight="700"
                      color="#717171"
                    >
                      Why RentoMojo Is Better Than Any Retailer
                    </Heading>
                    <Text
                      fontSize="12px"
                      textAlign="left"
                      margin="0px 0px 12px"
                      color="#717171"
                      fontWeight="200"
                    >
                      Why should you pick RentoMojo in Delhi? It’s simple! We
                      offer a better deal than any retailer can.
                    </Text>
                    <UnorderedList>
                      <ListItem>
                        <Text
                          fontSize="12px"
                          textAlign="left"
                          margin="0px 0px 12px"
                          color="#717171"
                          fontWeight="200"
                        >
                          <b>Big savings:</b> Our monthly rental fees are
                          significantly less than the EMI you pay when you buy
                          furniture, appliances, or electronics from a store.
                          You can save a lot of money if you rent for a long
                          term.
                        </Text>
                      </ListItem>
                      <ListItem>
                        <Text
                          fontSize="12px"
                          textAlign="left"
                          margin="0px 0px 12px"
                          color="#717171"
                          fontWeight="200"
                        >
                          <b>Flexible plans:</b> You can rent from us as long as
                          it is convenient for you. Our plans all have
                          customisable rental terms.
                        </Text>
                      </ListItem>
                      <ListItem>
                        <Text
                          fontSize="12px"
                          textAlign="left"
                          margin="0px 0px 12px"
                          color="#717171"
                          fontWeight="200"
                        >
                          <b>Quality first:</b> For RentoMojo, quality is a
                          priority. We provide you with products that are as
                          good as new.
                        </Text>
                      </ListItem>
                      <ListItem>
                        <Text
                          fontSize="12px"
                          textAlign="left"
                          margin="0px 0px 12px"
                          color="#717171"
                          fontWeight="200"
                        >
                          <b>Close early:</b> Want to opt-out of your rental
                          agreement with us? You can! You will only have to pay
                          until the current usage date.
                        </Text>
                      </ListItem>
                      <ListItem>
                        <Text
                          fontSize="12px"
                          textAlign="left"
                          margin="0px 0px 12px"
                          color="#717171"
                          fontWeight="200"
                        >
                          <b>Reliable service:</b> Renting from us in Delhi is
                          very simple. You can place an order from your
                          smartphone or laptop in a matter of minutes. You can
                          expect speedy, doorstep delivery.
                        </Text>
                      </ListItem>
                    </UnorderedList>
                  </Box>
                  <Text
                    onClick={handleReadMore}
                    fontSize="12px"
                    textAlign="left"
                    margin="0px 0px 12px"
                    color="#717171"
                    fontWeight="200"
                    _hover={{ cursor: "pointer" }}
                  >
                    Read Less <ChevronRightIcon fontSize="16px" />
                  </Text>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
