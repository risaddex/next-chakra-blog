import { Box, Flex, Heading, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import { IPost } from '../../types/types'
import parseToMarkdown from '../../utils/markdown'
import { parseRelativeTime, parseTime } from '../../utils/timeFormat'
import { ShareIcon } from '../Icons/Share'

export const Post = ({ post }: { post: IPost }) => {
  const publishTime = parseTime(post.published)
  const updateTime = parseRelativeTime(post.updated)

  const text = parseToMarkdown(post.content)

  return (
    /** Relative size units so characters per line aren't > 75 */
    <Box as="article" borderRadius="2xl" p="2">
      <Box >
        <Heading lineHeight="1">{post.title}</Heading>
        <Flex alignItems="baseline"justify="space-between" direction={['row']}>
          <Box>
            <Text>{post.author.displayName}</Text>
            <Text>
              {publishTime} - atualizado {updateTime}
            </Text>
          </Box>
          <Box>
            <IconButton aria-label="compartilhar" icon={<ShareIcon />} />
          </Box>
        </Flex>
      </Box>
      <hr />
      <br />
      {/**Remove a formatação html padrão e deixa apenas o texto */}
      <Box lineHeight={['1.5', '1.75']} maxW="40em" textAlign="justify">
        {text}
      </Box>
    </Box>
  )
}

{
  /* {.replace(/<[^>]+>|&nbsp;/g, '')} */
}
