import { useInfiniteQuery } from 'react-query'

const BLOG_ID = String(process.env.NEXT_PUBLIC_BLOG_ID)
const API_KEY = String(process.env.NEXT_PUBLIC_API_KEY)

const fetchPosts = async (pageParam?: string) => {
  const response = await fetch(
    `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?` +
      new URLSearchParams({
        key: API_KEY,
        fields:
          'items(author/displayName,content,published,title,url,id,images,updated),nextPageToken',
        fetchImages: 'true',
        ...(pageParam && { pageToken: pageParam }),
      })
  )
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      throw new Error('Failed on retrieve data from server')
    })
    .catch((err) => {
      console.error(err)
    })

  console.log(response)
  return response
}

const usePosts = () => {
  return useInfiniteQuery('posts', ({ pageParam }) => fetchPosts(pageParam), {
    getNextPageParam: (firstPage) => firstPage.nextPageToken ?? false,
    getPreviousPageParam: (lastPage) => lastPage.prevPageToken ?? false,
    refetchOnWindowFocus: false,
    onError: (err) => console.error(err),
  })
}

// const fetchSinglePost = async (postId) => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${postId}`
//   )
//     .then((res) => {
//       if (res.ok) {
//         return res.json()
//       }
//       throw new Error('Failed on retrieve data from server')
//     })
//     .catch((err) => {
//       console.error(err)
//     })

//   return response
// }
export { fetchPosts, usePosts }
