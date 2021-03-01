import { Box, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { Container } from '../components/Container'
import { CustomCarousel } from '../components/CustomCarousel'
import { Feed } from '../components/Feed'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { fetchPosts } from '../hooks/usePosts'

const Index = () => {
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
          <Feed />
        </Main>
      </HStack>

      <Footer>
        <Text>Danilo Romano </Text>
      </Footer>
    </Container>
  )
}

export async function getStaticProps() {
  const queryClient = new QueryClient()
  await queryClient.prefetchInfiniteQuery('posts', await fetchPosts(1))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Index
