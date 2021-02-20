import { HStack, Text, Box } from '@chakra-ui/react';
import React from 'react';
import { CustomCarousel } from '../components/Carousel';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Main } from '../components/Main';

const Index = () => (
  <Container height="100vh">
    <Header />

    <HStack
      h="100%"
      w="100%"
      spacing="25px"
      justifyContent="space-between"
      align="center"
    >
      <Box as="aside">sidebar content</Box>

      <Main bg="blue.500" pr="1">
        <CustomCarousel />
      </Main>
    </HStack>

    <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer>
  </Container>
);

export default Index;
