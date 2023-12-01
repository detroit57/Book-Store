import { Flex, Image, Input } from "@chakra-ui/react";
import React from "react";

const SearchInput = () => {
  return (
    <Flex alignItems={'center'}>
      <Image src="/search.png" width={'10%'} />
      <Input width={300} border={0} placeholder="Search for any training you want " />
    </Flex>
  );
};

export default SearchInput;
