import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Continue from "../components/Continue";
import OrCompo from "../components/OrCompo";
import FormInput from "../components/FormInput";
import AppButton from "../components/AppButton";
import Already from "../components/Already";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Flex justifyContent={"center"} marginTop={7}>
      <Box
        bg={"#fff"}
        width={"500px"}
        borderRadius={10}
        boxShadow={"0px 0px 2px #ddd"}
        py={5}
        px={10}
      >
        <Heading textAlign={"center"} my={5} mb={8}>
          Sign In
        </Heading>
        <Continue name="Google" img="Google.png" />
        <Continue name="Facebook" width={"40px"} img="social-logos.svg" />
        <OrCompo />
        <FormInput place="Enter name" name="Your name" />
        <FormInput place="Enter email" name="Your email" />
        <FormInput place="Enter username" name="Your username" />
        <AppButton name="Sign In" width="100%" />
        <Link to={"/signup"}>
          <Already name="Already signed up? " name2="Go to signin" />
        </Link>
      </Box>
    </Flex>
  );
};

export default Home;
