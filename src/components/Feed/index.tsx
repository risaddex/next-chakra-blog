import { Spinner, Stack } from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import { IPost } from '../../types/types';
import { Post } from './Post';

type Props = {
  posts: IPost[];
};

export default function Feed({ posts }: Props) {
  const [postList, setPostList] = useState(posts);
  const [loadedPosts, setLoadedPosts] = useState<IPost[]>([]);
  const [currentPostId, setCurrentPostId] = useState(0);
  const [isEndOfPage, setIsEndOfPage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleEndOfPage = useCallback((event: Event): void => {
    // 80% of page Y offset triggers a new fetch/ Load
    if (
      window.pageYOffset + window.innerHeight >=
      document.documentElement.offsetHeight * 0.99

      //TODO : add another checker for CurrentLoading Content
    ) {
      setIsEndOfPage(true);
      console.log('End of Page');
    }
  }, [setIsEndOfPage]);

  //Adds scroll event and Remove on page end
  useEffect(() => {
    if (!isEndOfPage) {
      window.addEventListener('scroll', handleEndOfPage);
      console.log('event addedd');
    } else {
      window.removeEventListener('scroll', handleEndOfPage);
      setIsEndOfPage(false);
      //TODO FETCH MORE CONTENT
      console.log('event removed');
    }
    //cleanup
    return () => window.removeEventListener('scroll', handleEndOfPage);
  }, [isEndOfPage]);

  // Initial Posts Loading Hook
  useEffect(() => {
    setLoadedPosts(loadPosts());
  }, []);

  //Filter Posts
  const loadPosts = (): IPost[] => {
    const filteredPosts = postList.filter((post) => post.id <= 10);
    filteredPosts.length === 10 ? setCurrentPostId(currentPostId + 10) : false;
    return filteredPosts;
  };

  if (isLoading) return <Spinner alignSelf="center" />;
  return (
    <Stack px="2" spacing="8">
      {loadedPosts.map((post: IPost) => (
        <Post key={post.id} post={post} />
      ))}
    </Stack>
  );
}
