import { PlusSquareIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, IconButton, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { IPost } from '../../types/types'

export const Post = ({ post }: { post: IPost }) => (
  <Box as="article" bg="red.200" borderRadius="2xl" p="2">
    <Box>
      <Heading>{post.title}</Heading>
      <Flex justify="space-between" direction={['column', 'row']}>
        <Box>
          {/*//TODO: aparecer apenas quando aberto o post invidualmente */}
          <Text>por Fulano - Local </Text>
          <Text>01/01/2021 09:23 - atualizado à 30 minutos</Text>
        </Box>
        <Box>
          <IconButton aria-label="compartilhar" icon={<PlusSquareIcon />} />
        </Box>
      </Flex>
    </Box>
    <Spacer />
    <hr />
    <br />

    <Text textAlign="justify">{post.body}</Text>
  </Box>
)
