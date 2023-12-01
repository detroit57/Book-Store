import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Card = () => {
  return (
    <Box
      width={400}
      p={5}
      bg={"#fff"}
      borderRadius={20}
      boxShadow={"0px 0px 3px #ddd"}
      cursor={"pointer"}
    >
      <Text fontSize={"23px"} fontWeight={800}>
        Raspberry Pi User Guide
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur. Nulla adipiscing neque varius
        vestibulum magna in. Tortor quisque nisl congue ut tellus sem id.
      </Text>
      <Flex gap={5} marginTop={5}>
        <Text fontWeight={600}>Eben Upton: 2012-year</Text>
        <Text px={4} bg={"#EFE6FD"} color={"#6200EE"} py={1} borderRadius={20}>
          211 pages
        </Text>
      </Flex>
    </Box>
  );
};

export default Card;
