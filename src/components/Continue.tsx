import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Continue = (props) => {
  return (
    <Box border={'2px solid #000'} p={2} borderRadius={10} my={2} cursor={'pointer'}>
      <Flex alignItems={'center'}gap={'20px'} justifyContent={'center'}>
        <Image src={props.img} width={props.width} />
        <Text>Continue with {props.name}</Text>
      </Flex>
    </Box>
  )
}

export default Continue