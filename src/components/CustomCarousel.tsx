import Carousel from 'nuka-carousel';
import React from 'react';

export const CustomCarousel = () => (
  <Carousel
    defaultControlsConfig={{
      nextButtonText: 'Próximo',
      prevButtonText: 'Anterior',
      nextButtonStyle: {
        display: 'none'
      },
      prevButtonStyle: {
        display: 'none'
      },
    }}
    height="35vh"
    framePadding="0 0 0.5rem 0"
    autoplay
    wrapAround
    speed={1000}
    withoutControls={true}
  >
    <img src="http://placekitten.com/400/300" alt="a kitten" />
    <img src="http://placekitten.com/450/300" alt="a kitten" />
    <img src="http://placekitten.com/500/300" alt="a kitten" />
  </Carousel>
);
