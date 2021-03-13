import {
  Box,
  Grid,
  GridItem,
  Skeleton,
  SkeletonText,
  Text,
} from '@chakra-ui/react'
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
    <Container overflowX="auto" justifyContent={['center']}>
      <Header />

      <Grid
        h="100%"
        w="100%"
        maxWidth="container.xl"
        templateColumns="repeat(4, 1fr)"
        gap="0"
      >
        <GridItem colSpan={[0, 1]}>
          <Box d={['none', 'flex']}>qaaa</Box>
        </GridItem>
        <GridItem colSpan={[4, 3]}>
          <Main bg="blue.500" px="1" pb="2" height="100%" minH="100vh">
            <Box p="5">
              <SkeletonText noOfLines={10} />
            </Box>
            {/* <CustomCarousel /> */}
            <Feed />
          </Main>
        </GridItem>
      </Grid>
      {/* <HStack
        h="100%"
        w="100%"
        // spacing="25px"
        justifyContent="space-between"
        align="center"
      ></HStack> */}

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
