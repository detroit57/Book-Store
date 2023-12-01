import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const OrCompo = () => {
  return (
    <Flex alignItems={'center'} gap={5}>
      <Box width={'40vw'} height={'2px'} bg={'#000'}></Box>
      <Text>OR</Text>
      <Box width={'40vw'} height={'2px'} bg={'#000'}></Box>
    </Flex>
  )
}

export default OrCompo