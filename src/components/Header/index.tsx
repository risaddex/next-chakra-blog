import { Flex, FlexProps } from '@chakra-ui/react';
import { Navbar } from './Navbar';


export function Header(props: FlexProps) {
  return (
    <Flex 
      as="header" 
      mt="0" 
      h="30vh" 
      w="100vw"
      bg="red.500"
      {...props}
    >
      <Navbar/>
    </Flex>
  );
}

