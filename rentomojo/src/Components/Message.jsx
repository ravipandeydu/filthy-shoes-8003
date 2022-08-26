import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function Message() {
  return (
    <Box background={"#fafafa"}>
    <Box margin="auto" padding="16px 15px" width="1500px">
      <Heading as="h1" fontSize="14px" textAlign="left">
        Choose RentoMojo In Delhi And Enjoy Massive Savings
      </Heading>
      <Text fontSize="12px" textAlign="left" margin="0px 0px 12px">
        RentoMojo is a top-rated Indian rental brand, with an established
        presence across several major cities, including the capital: Delhi! When
        you purchase furniture, appliances, and electronics from a store, you
        spend a great deal of money. You can rent the same furniture, appliance,
        or electronics item from us for a fraction of the retail price.
      </Text>
      <Text fontSize="12px" textAlign="left" margin="0px 0px 12px">
        Our inventory includes products made by the best, most reputable brands
        in the market. Every product undergoes strict quality control checks and
        is in mint condition. You can rent from us for short term or long term.
        We have something for every need and budget.
      </Text>
      <Text fontSize="12px" textAlign="left" margin="0px 0px 12px">
        When you sign up for any plan, you receive many benefits from us such as
        free relocation, free maintenance, and damage waiver. You can rent from
        us online in a matter of minutes. As soon as we receive your order, we
        will deliver it to your location in Delhi. We offer fast, free delivery
        all over the capital, including localities such as Nehru Place, Greater
        Kailash, Hauz Khas, Tilak Nagar, Moti Bagh, and RK Puram.
      </Text>
    </Box>
    </Box>
  );
}
