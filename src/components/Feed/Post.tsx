import { PlusSquareIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, IconButton, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { IPost } from '../../types/types'
import { parseRelativeTime, parseTime } from '../../utils/timeFormat'

export const Post = ({ post }: { post: IPost }) => {
  
  const publishTime = parseTime(post.published)
  const updateTime = parseRelativeTime(post.updated)

  return (
    <Box as="article" bg="red.200" borderRadius="2xl" p="2">
      <Box>
        <Heading>{post.title}</Heading>
        <Flex justify="space-between" direction={['column', 'row']}>
          <Box>
            {/*//TODO: aparecer apenas quando aberto o post invidualmente */}
            <Text>{post.author.displayName} - Local </Text>
            <Text>
              {publishTime} - atualizado {updateTime}
            </Text>
          </Box>
          <Box>
            <IconButton aria-label="compartilhar" icon={<PlusSquareIcon />} />
          </Box>
        </Flex>
      </Box>
      <Spacer />
      <hr />
      <br />
      {/**Remove a formatação html padrão e deixa apenas o texto */}
      <Text textAlign="justify">
        {post.content.replace(/<[^>]+>|&nbsp;/g, '')}
      </Text>
    </Box>
  )}

//TODO: converter para Markdown (?) 
//TODO: adicionar opção de local de postagem em publicações
