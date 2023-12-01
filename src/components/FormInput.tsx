import { Box, Input, Text } from '@chakra-ui/react'
import React from 'react'

const FormInput = (props) => {
  return (
    <Box my={5}>
      <Text>{props.name}</Text>
      <Input boxShadow={'0px 0px 6px #ddd'} placeholder={props.place} p={6} my={2} border={0} />
    </Box>
  )
}

export default FormInput