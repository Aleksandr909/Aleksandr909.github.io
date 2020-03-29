import React, { useEffect } from 'react';
import Slider from 'react-slick';
import RecallsSliderImage from './RecallsSliderImage';
import {
  RECALL1,
  RECALL2,
  RECALL3,
  RECALL4,
  RECALL5,
  RECALL6,
  RECALL7,
  RECALL8,
  RECALL9,
  RECALL10,
  RECALL11,
  RECALL12,
  RECALL13,
  RECALL14,
  RECALL15,
  RECALL16,
  RECALL17,
  RECALL18,
  RECALL19,
  RECALL20,
  RECALL21,
  RECALL22,
  RECALL23,
  RECALL24,
  RECALL25,
} from '../constants/images';
import withWidth from '@material-ui/core/withWidth';
const RecallsSlider = ({ width, padding, setPadding }) => {
  const clients = [
    RECALL1,
    RECALL2,
    RECALL3,
    RECALL4,
    RECALL5,
    RECALL6,
    RECALL7,
    RECALL8,
    RECALL9,
    RECALL10,
    RECALL11,
    RECALL12,
    RECALL13,
    RECALL14,
    RECALL15,
    RECALL16,
    RECALL17,
    RECALL18,
    RECALL19,
    RECALL20,
    RECALL21,
    RECALL22,
    RECALL23,
    RECALL24,
    RECALL25,
  ];
  let containerWidth = '100%';
  let slidesPerRow = 1;
  switch (width) {
    case 'xs':
      containerWidth = '100%';
      break;
    case 'sm':
      slidesPerRow = 2;
      containerWidth = 600;
      break;
    case 'md':
      slidesPerRow = 3;
      containerWidth = 960;
      break;
    case 'lg':
      slidesPerRow = 3;
      containerWidth = 1280;
      break;
    case 'xl':
      slidesPerRow = 3;
      containerWidth = 1280;
      break;
    default:
      break;
  }
  useEffect(() => {
    if (containerWidth === '100%') containerWidth = window.innerWidth;
    setPadding((window.innerWidth - containerWidth + 40) / 2);
  });

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: false,
    centerPadding: `${padding}px`,
    slidesToShow: 1,
    variableWidth: true,
    speed: 500,
    rows: 1,
    slidesPerRow: 3,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesPerRow: 3,
        },
      },
      {
        breakpoint: 959,
        settings: {
          slidesPerRow: 2,
        },
      },
      {
        breakpoint: 599,
        settings: {
          slidesPerRow: 1,
          variableWidth: false,
        },
      },
    ],
  };

  const clientsLength = clients.length;
  const sliderLength = clientsLength - (clientsLength % slidesPerRow);
  return (
    <div style={{ width: '100%' }}>
      <Slider {...settings}>
        {[...Array(sliderLength)].map((elem, index) => (
          <div key={`slider_img_${index}`}>
            <RecallsSliderImage index={index} imgSrc={clients[index]} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default withWidth()(RecallsSlider);
