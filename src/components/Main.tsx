import { StackProps, VStack } from '@chakra-ui/react';
import React from 'react';

export const Main = (props: StackProps) => (
  <VStack
    as="main"
    spacing="1.5rem"
    height="100%"
    width="100%"
    maxWidth="48rem"
    {...props}
  />
);
