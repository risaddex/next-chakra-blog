import { Flex, FlexProps } from '@chakra-ui/react';
import React from 'react';
import { Navbar } from './Navbar';

export function Header(props: FlexProps) {
  return (
    <Flex
      as="header"
      // flexDirection="column"
      mt="0"
      mb="0.5"
      w="100vw"
      bg="red.500"
      {...props}
    >
      <Navbar />
      {/* <Divider /> */}
    </Flex>
  );
}
