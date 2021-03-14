import { Box, Spinner, Stack } from '@chakra-ui/react'
import React, { useRef } from 'react'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import { usePosts } from '../../hooks/usePosts'
import { IPost } from '../../types/types'
import { Post } from './Post'
import { useInfiniteQuery } from 'react-query';

export const Feed = () => {
  const {
    data,
    isLoading,
    isFetching,
    status,
    hasNextPage,
    fetchNextPage,
    error,
    
  } = usePosts()

  /**For typechecking shenanigans */
  const loadMoreButtonRef = useRef() as React.MutableRefObject<HTMLButtonElement>


  useIntersectionObserver({
    root: null,
    target: loadMoreButtonRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  })

  
    console.log(data, hasNextPage)
  
  return (
    <Stack px="2" spacing="8" w="100%">
      {status === 'error' && <Box color="red.600">Error: {error.message}</Box>}

      {(status === 'idle' || 'success') &&
        data?.pages.map((page, i) => (
          <React.Fragment key={`_${i}`}>
            {page?.items.map((post: IPost) => (
              <Post key={`${post.id}`} post={post} />
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
