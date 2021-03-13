import { Flex, FlexProps } from '@chakra-ui/react'
import React from 'react'

export const Footer = (props: FlexProps) => (
  <Flex
    as="footer"
    w="100%"
    h="10vh"
    minH="50px"
    py="1rem"
    justifyContent="center"
    alignItems="center"
    bg="red.300"
    {...props}
  />
)
