import { Flex, useColorMode, FlexProps } from '@chakra-ui/react'
import React from 'react'

export const Container = (props: FlexProps) => {
  const { colorMode } = useColorMode()

  const bgColor = { light: 'gray.50', dark: 'gray.900' }

  const color = { light: 'black', dark: 'white' }
  return (
    <Flex
      direction="column"
      align="center"
      // height=""
      justifyContent="space-between"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  )
}
