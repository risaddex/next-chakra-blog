import { GetServerSideProps } from 'next'
import { Post } from '../../components/Feed/Post'
import { fetchSinglePost } from '../../hooks/usePosts'
import { IPost } from '../../types/types'
import { Container } from '../../components/Container'
import { Header } from '../../components/Header/index'
import { Grid, GridItem, Box, SkeletonText, Text } from '@chakra-ui/react'
import { Main } from '../../components/Main'
import { Footer } from '../../components/Footer'

function PostPage({ post }: { post: IPost }) {

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
              <Post post={post} />
            </Box>
          </Main>
        </GridItem>
      </Grid>
      <Footer>
        <Text>Danilo Romano</Text>
      </Footer>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const postId = Number(ctx.resolvedUrl.slice(-1))

  const post = await fetchSinglePost(postId)
  console.log(post)

  return {
    props: {
      post,
    },
  }
}

export default PostPage
