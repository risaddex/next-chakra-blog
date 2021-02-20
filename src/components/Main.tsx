import { Stack, StackProps } from '@chakra-ui/react';
import React from 'react';

export const Main = (props: StackProps) => (
  <Stack
    as="main"
    spacing="1.5rem"
    height="100%"
    width="100%"
    maxWidth="48rem"
    // mt="-45vh"
    pt="8rem"
    px="1rem"
    {...props}
  />
);
