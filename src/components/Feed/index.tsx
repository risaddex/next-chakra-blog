import { SkeletonText, Box } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import { Post } from '../../utils/types';

interface BlogProps {
  posts: Post[]
}

export default function Feed({ posts }:BlogProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Box>
      {posts.map((post) => (
        <Box as="article" key={`${post.postId}`}>
          {post}
        </Box>
      ))}
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://6031a22f081a010017547228.mockapi.io/api/posts/:blogs');
  const posts = await res.json();

  return posts;
};