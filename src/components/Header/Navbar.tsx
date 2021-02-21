import {
  Avatar,
  Flex,
  IconButton,
  Image,
  Spacer,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

import React from 'react';
import { DarkModeSwitch } from '../DarkModeSwitch';
import { CustomBellIcon } from '../Icons';

export const Navbar = () => (
  <Flex
    as="nav"
    bg="transparent"
    align="center"
    px="4"
    py="2"
    maxHeight="70px"
  >
    <Image mx="1" boxSize="50px" src="logo.svg" />

    <Spacer />

    <Wrap spacing="30px" align="center" mr="10px">
      <WrapItem>
        <DarkModeSwitch />
      </WrapItem>

      <WrapItem>
        <Avatar w="8" h="8" />
      </WrapItem>

      <WrapItem>
        <IconButton
          colorScheme="red"
          aria-label="Notificações"
          icon={<CustomBellIcon w="8" h="8" />}
        />
      </WrapItem>
    </Wrap>
  </Flex>
);
