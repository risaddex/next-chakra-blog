import { Box, FlexProps } from '@chakra-ui/react'
import React from 'react'
import { Navbar } from './Navbar'

export function Header(props: FlexProps) {
  return (
    <Box width="100%" as="header" mb="0.5" bg="red.500" {...props}>
      <Navbar />
    </Box>
  )
}
