import { Button, Flex, Input } from '@chakra-ui/react'
import { AddCircle } from 'iconsax-react'
import React from 'react'

const AddBook = () => {
  return (
    <Flex gap={5}>
      <Input placeholder='Enter your name' height={12} bg={'#fff'} color={'#000'}/>
      <Button width={300} p={6} bg={'#6200EE'} color={'#fff'} leftIcon={<AddCircle />}>Create a book</Button>
    </Flex>
  )
}

export default AddBook