import { Flex, FlexProps } from '@chakra-ui/react'

export const Footer = (props: FlexProps) => (
  <Flex 
    as="footer" 
    w="100%" 
    h="10vh"
    py="1rem"
    justifyContent="center" 
    alignItems="center"
    bg="red.300"
    {...props}
  />
)
