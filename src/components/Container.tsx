import { Flex, useColorMode, FlexProps } from '@chakra-ui/react'
import React from 'react'

export const Container = (props: FlexProps) => {
  const { colorMode } = useColorMode()

  const bgColor = { light: 'gray.50', dark: 'gray.800' }
  const color = { light: 'gray.900', dark: 'white' }

  return (
    <Flex
      direction="column"
      align="center"
      justifyContent="center"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  )
}
