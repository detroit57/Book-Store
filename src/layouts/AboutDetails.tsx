import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import AddBook from "../components/AddBook";

const AboutDetails = () => {
  return (
    <Flex mt={10} color={"#fff"} justifyContent={'space-between'}>
      <Box>
        <Heading>You've got 7 Books</Heading>
        <Text>Yout task today</Text>
      </Box>
      <AddBook />
    </Flex>
  );
};

export default AboutDetails;
