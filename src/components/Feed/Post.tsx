import { Box, Heading, Spacer, Text } from '@chakra-ui/react'
import React, { FC } from 'react'
import { IPost } from '../../types/types'

type Props = {
  post: IPost
}

export const Post: FC<Props> = ({ post }) => (
  <Box as="article" bg="red.200" borderRadius="2xl" px="2">
    <Heading>{post.title}</Heading>
    <Spacer />
    <br />
    <Text textAlign="justify">{post.body}</Text>
  </Box>
)
