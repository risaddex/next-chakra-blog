import { Spinner, Stack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { IPost } from '../../types/types';
import { Post } from './Post';

type Props = {
  posts: IPost[];
};

export default function Feed({ posts }: Props) {
  const [postList, setPostList] = useState(posts)
  const [loadedPosts, setLoadedPosts] = useState(posts)
  const [currentPostId, setCurrentPostId] = useState(0);

  useEffect(() => {
    setLoadedPosts(loadPosts())
    
  }, []);
  //! Initial posts loading
  const loadPosts = (): IPost[] => {
    const filteredPosts = postList.filter((post) => post.id <= 10)
    filteredPosts.length === 10 ? setCurrentPostId(currentPostId + 10) : false
    return filteredPosts
  }
  
  
  if (!postList) return <Spinner />;
  return (
    <Stack px="2" spacing="8">
      {loadedPosts.map((post: IPost) => (
        <Post key={post.id} post={post} />
      ))}
    </Stack>
  );
}
