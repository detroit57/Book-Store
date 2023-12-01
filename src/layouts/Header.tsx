import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import SearchInput from "../components/SearchInput";

const Header = () => {
  return (
    <Flex justifyContent={'space-between'}>
      <Flex gap={'80px'}>
        <Image src="/logo.png" />
        <SearchInput />
      </Flex>
      <Flex alignItems={'center'} gap={5}>
          <Image width={'30px'} cursor={'pointer'} src="/not.png" />
          <Image width={'30px'} cursor={'pointer'} src="/user-image.png" />
      </Flex>
    </Flex>
  );
};

export default Header;
