import React from 'react';
import Slider from 'react-slick';
import { makeStyles } from '@material-ui/core';

// Подключать как можно выше
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MultipleRowsSlider = ({ dotsColor }) => {
  const classes = useStyles({ dotsColor });
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow: 5,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    // eslint-disable-next-line react/display-name
    appendDots: dots => (
      <div>
        <ul className={classes.list}> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 8000,
        settings: {
          slidesToShow: 6,
          rows: 2,
        },
      },
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 6,
          rows: 2,
        },
      },
      {
        breakpoint: 1960,
        settings: {
          slidesToShow: 5,
          rows: 2,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          rows: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          rows: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          rows: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className={classes.slider}>
      <Slider {...settings}>
        {[...Array(16)].map((elem, index) => (
          <div key={`slider_img_${index}`}>
            <span>{index}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  list: {
    margin: 0,
    padding: '0 50px',
    [theme.breakpoints.down('sm')]: { padding: '0 24px' },
    '& li': {
      height: 8,
      width: 8,
      borderRadius: 16,
      border: ({ dotsColor }) => `1px solid ${dotsColor}`,
      '& > button': {
        marginLeft: -6,
        marginTop: -6,
        '&::before': {
          display: 'none',
        },
      },
    },
    '& .slick-active': { background: ({ dotsColor }) => dotsColor },
  },
  slider: {
    '& .slick-list': {
      padding: '50px !important',
      marginBottom: 50,
    },
    '& .slick-prev': {
      height: '100%',
      background:
        'linear-gradient(90deg, #01001E 12.42%, rgba(1, 0, 30, 0.5) 63.72%, rgba(1, 0, 30, 0) 100%)',
      width: 200,
      [theme.breakpoints.down('lg')]: {
        width: 100,
      },
      [theme.breakpoints.down('sm')]: {
        width: 50,
      },
      left: 0,
      zIndex: 2,
    },
    '& .slick-next': {
      height: '100%',
      background:
        'linear-gradient(-90deg, #01001E 12.42%, rgba(1, 0, 30, 0.5) 63.72%, rgba(1, 0, 30, 0) 100%)',
      width: 200,
      [theme.breakpoints.down('lg')]: {
        width: 100,
      },
      [theme.breakpoints.down('sm')]: {
        width: 50,
      },
      right: 0,
      zIndex: 2,
    },
  },
}));

export default MultipleRowsSlider;
