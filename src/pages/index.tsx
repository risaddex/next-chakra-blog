import { Text } from '@chakra-ui/react';
import React from 'react';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Main } from '../components/Main';

const Index = () => (
  <Container height="100vh">
    <Header />

    <Container>
      <Main h="100%">aaaa</Main>
    </Container>

    <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer>
  </Container>
);

export default Index;
