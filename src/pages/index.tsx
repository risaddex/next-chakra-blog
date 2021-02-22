import { Box, HStack, Text, extendTheme, GlobalStyle } from '@chakra-ui/react';
import { InferGetStaticPropsType } from 'next';
import React from 'react';
import { Container } from '../components/Container';
import { CustomCarousel } from '../components/CustomCarousel';
import Feed from '../components/Feed';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { IPost } from '../types/types';

const API_URL: string = 'https://jsonplaceholder.typicode.com/posts';

const Index = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <Container height="100%" overflowX="auto">
      <Header />

      <HStack
        h="100%"
        w="100%"
        // spacing="25px"
        justifyContent="space-between"
        align="center"
      >
        <Box>aa</Box>

        <Main bg="blue.500" px="1" pb="2" height="100%" minH="100vh">
          <CustomCarousel />
          <Feed posts={posts} />
        </Main>
      </HStack>

      <Footer>
        <Text>Danilo Romano </Text>
      </Footer>
    </Container>
  );
};

export async function getStaticProps() {
  const res = await fetch(API_URL);
  const posts: IPost[] = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default Index;
