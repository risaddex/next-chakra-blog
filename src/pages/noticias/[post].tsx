import { GetServerSideProps } from 'next'
import { Post } from '../../components/Feed/Post'
import { fetchSinglePost } from '../../hooks/usePosts'
import { IPost } from '../../types/types'

function PostPage({ post }: { post: IPost }) {
  return (
    <div>
      <Post post={post} />
    </div>
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
