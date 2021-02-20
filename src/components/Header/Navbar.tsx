import {
  Avatar,
  Flex,
  IconButton,
  Spacer,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import React from 'react';
import { DarkModeSwitch } from '../DarkModeSwitch';
import { CustomBellIcon } from '../Icons';

export const Navbar = () => (
  <Flex as="nav" w="100%" h="30%" bg="transparent" align="center" px="4" py="2">
    <Spacer />

    <Wrap spacing="30px" align="center">
      <WrapItem>
        <DarkModeSwitch />
      </WrapItem>

      <WrapItem>
        <Avatar />
      </WrapItem>

      <WrapItem>
        <IconButton
          colorScheme="red"
          aria-label="Notifications"
          icon={<CustomBellIcon w="8" h="8" />}
        />
      </WrapItem>
    </Wrap>
  </Flex>
);
