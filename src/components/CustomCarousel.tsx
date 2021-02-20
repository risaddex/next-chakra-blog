/* eslint-disable jsx-a11y/alt-text */
import Carousel from 'nuka-carousel';
import React from 'react';

export const CustomCarousel = () => (
  <Carousel
    defaultControlsConfig={{
      nextButtonText: 'Próximo',
      prevButtonText: 'Anterior',
      pagingDotsStyle: {
        fill: 'red'
      }
    }}
    height="35vh"
    // disableEdgeSwiping
    framePadding="0 0 0.5rem 0"
  >
    <img src="http://placekitten.com/400/300" alt="a kitten" />
    <img src="http://placekitten.com/400/300" alt="a kitten" />
    <img src="http://placekitten.com/400/300" alt="a kitten" />
  </Carousel>
);
