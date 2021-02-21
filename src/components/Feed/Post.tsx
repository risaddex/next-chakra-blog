import { Box } from '@chakra-ui/react';
import React from 'react';
import { IPost } from '../../types/types';

type Props = {
  post: IPost;
};

export const Post: React.FC<Props> = ({ post }) => (
  <Box as="article">
    {post.title}
    {post.body}
  </Box>
);

