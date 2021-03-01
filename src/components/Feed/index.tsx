import { Box, Spinner, Stack } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { IPost } from '../../types/types'
import { Post } from './Post'

import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import { usePosts } from '../../hooks/usePosts'

export const Feed = () => {
  const {
    data,
    isLoading,
    isFetching,
    status,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = usePosts(1)

  const loadMoreButtonRef = useRef()

  useIntersectionObserver({
    root: null,
    target: loadMoreButtonRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  })

  return (
    <Stack px="2" spacing="8">
      {status === 'error' && (
        <Box color="red.600">Error ao buscar dados...</Box>
      )}
      {console.log(data)}
      {(status === 'idle' || 'success') &&
        data?.pages.map((page, i) => (
          <React.Fragment key={`_${i}`}>
            {page?.map((post: IPost) => (
              <Post key={`${post.userId}__${post.id}`} post={post} />
            ))}
          </React.Fragment>
        ))}
      <div>
        <button
          ref={loadMoreButtonRef}
          onClick={() => fetchNextPage()}
          disabled={isFetching}
        >
          Carregar Mais
        </button>
      </div>
      {isLoading && <Spinner alignSelf="center" />}
    </Stack>
  )
}
