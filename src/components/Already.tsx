import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Already = (props) => {
  return (
    <Flex justifyContent={'center'} my={4} fontSize={20}>
      <Text >{props.name}</Text>
      <Text color={'#6200EE'}>{props.name2}</Text>
    </Flex>
  )
}

export default Already