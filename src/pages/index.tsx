import { Box, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { Container } from '../components/Container';
import { CustomCarousel } from '../components/CustomCarousel';
import Feed from '../components/Feed';
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
      <Box>aa</Box>

      <Main bg="blue.500">
        <CustomCarousel />
        <Feed />  
      </Main>
    </HStack>

    <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer>
  </Container>
);

export default Index;
