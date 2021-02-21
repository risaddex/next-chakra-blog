import { Spinner, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { IPost } from '../../types/types';
import { Post } from './Post';

type Props = {
  posts: IPost[];
};

export default function Feed({ posts }: Props) {
  const [postList, setPostList] = useState(posts);
  const STARTER_SIZE = 10;

  if (!postList) return <Spinner />;

  return (
    <Stack px="2" spacing="8">
      {postList.map((post: IPost) => (
        <Post key={post.id} post={post} />
      ))}
    </Stack>
  );
}
