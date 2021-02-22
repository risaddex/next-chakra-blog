import { StackProps, Stack } from '@chakra-ui/react';
import React from 'react';

export const Main = (props: StackProps) => (
  <Stack
    as="main"
    height="100%"
    spacing="1.5rem"
    alignContent="space-between"
    width="100%"
    maxWidth="48rem"
    {...props}
  />
);
