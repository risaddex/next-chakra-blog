import { Spinner, Stack } from '@chakra-ui/react';
import React, {
  useCallback,
  useEffect,
  useState
} from 'react';
import { IPost } from '../../types/types';
import { Post } from './Post';

type Props = {
  posts: IPost[];
};

export default function Feed({ posts }: Props) {
  const [postList, setPostList] = useState(posts);
  const [loadedPosts, setLoadedPosts] = useState(posts);
  const [currentPostId, setCurrentPostId] = useState(0);
  const [isEndOfPage, setIsEndOfPage] = useState(false);

  const handleEndOfPage = useCallback((): void => {
    if (
      document.documentElement.offsetHeight - window.innerHeight ===
      window.pageYOffset
    ) {
      setIsEndOfPage(true)
      console.log('a')
    }
  }, [setIsEndOfPage]);

  useEffect(() => {
    if (!isEndOfPage) {
      window.addEventListener('scroll', handleEndOfPage);
      console.log('event addedd');
    } else {
      window.removeEventListener('scroll', handleEndOfPage);
      setIsEndOfPage(false)
      console.log('event removed');
    }
    //cleanup
    return () => window.removeEventListener('scroll', handleEndOfPage);
  }, [isEndOfPage]);

  //! Initial Posts Loading Hook
  useEffect(() => {
    setLoadedPosts(loadPosts());
  }, []);

  useEffect(() => {
    console.log('i re-rendered ?');
  });
  //! Filter Posts
  const loadPosts = (): IPost[] => {
    const filteredPosts = postList.filter((post) => post.id <= 10);
    filteredPosts.length === 10 ? setCurrentPostId(currentPostId + 10) : false;

    return filteredPosts;
  };

  if (!postList) return <Spinner />;
  return (
    <Stack px="2" spacing="8">
      {loadedPosts.map((post: IPost) => (
        <Post key={post.id} post={post} />
      ))}
    </Stack>
  );
}
