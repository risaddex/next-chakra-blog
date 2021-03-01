import { useInfiniteQuery } from 'react-query'

const fetchPosts = async (nextId = 1) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${nextId}/posts`
  )
  const result = await response.json()

  return result
}

const usePosts = (id) => {
  return useInfiniteQuery(
    'posts',
    ({ pageParam = 1 }) => fetchPosts(pageParam),
    {
      getNextPageParam: (firstPage) => firstPage[0].userId + 1 ?? false,
    }
  )
}

export { fetchPosts, usePosts }
