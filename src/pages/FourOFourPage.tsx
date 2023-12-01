import { Box, Button, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const FourOFourPage = () => {
  return (
    <Flex justifyContent={"center"} marginTop={20}>
      <Box>
        <Image src="/404.png" />
        <Flex p={5} justifyContent={"center"} gap={5}>
          <Link to={"/"}>
            <Button bg="#6200EE" color={"#fff"} p={6}>
              Go Home Page
            </Button>
          </Link>
          <Button
            p={"22px"}
            bg={"transparent"}
            border={"2px solid #6200EE"}
            color={"#6200EE"}
            onClick={(e) => {
              location.reload();
            }}
          >
            Reload Page
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default FourOFourPage;
