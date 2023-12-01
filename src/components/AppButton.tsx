import { Button } from '@chakra-ui/react'
import React from 'react'

const AppButton = (props) => {
  return (
    <Button leftIcon={props.icon} width={props.width}p={7} bg={'#6200EE'} color={'#fff'}>{props.name}</Button>
  )
}

export default AppButton