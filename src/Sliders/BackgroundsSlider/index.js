import React from 'react';
import Slider from 'react-slick';
import { Container, Grid, makeStyles } from '@material-ui/core';
import TypographyCustom from './TypographyCustom';
import { COLOR_BLACK, COLOR_WHITE, COLOR_ROSE } from '../constants/colors';
import { HEADER_BACKGROUND, HEADER_BACKGROUND2, HEADER_BACKGROUND3 } from '../constants/images';

const BackgroundSlider = () => {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    appendDots: dots => (
      <div>
        <ul className={classes.list}> {dots} </ul>
      </div>
    ),
  };
  return (
    <div className={classes.slider}>
      <Slider {...settings}>
        <div>
          <div
            className={classes.background}
            style={{ backgroundImage: `url(${HEADER_BACKGROUND})` }}
          >
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                height: 200,
                background: 'linear-gradient(0, rgba(1, 0, 30, 1) 5%, rgba(1, 0, 30, 0) 100%)',
              }}
            />
            <Container fixed>
              <Grid container spacing={4} direction="column">
                <Grid item xs={12} md={7} className={classes.headerText}>
                  <TypographyCustom type="h1" color={COLOR_WHITE} mb={96}>
                    невероятное соревнование и приключение в мире 2300 года
                  </TypographyCustom>
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
        <div>
          <div
            className={classes.background}
            style={{ backgroundImage: `url(${HEADER_BACKGROUND2})` }}
          >
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                height: 200,
                background: 'linear-gradient(0, rgba(1, 0, 30, 1) 0%, rgba(1, 0, 30, 0) 105.78%)',
              }}
            />
            <Container fixed>
              <Grid container spacing={4} direction="column">
                <Grid item xs={12} md={7} className={classes.headerText}>
                  <TypographyCustom type="h1" color={COLOR_WHITE} mb={96}>
                    остались только ты и твоя команда, последняя надежда мира
                  </TypographyCustom>
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
        <div>
          <div
            className={classes.background}
            style={{ backgroundImage: `url(${HEADER_BACKGROUND3})` }}
          >
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                height: 200,
                background: 'linear-gradient(0, rgba(1, 0, 30, 1) 0%, rgba(1, 0, 30, 0) 105.78%)',
              }}
            />
            <Container fixed>
              <Grid container spacing={4} direction="column">
                <Grid item xs={12} md={7} className={classes.headerText}>
                  <TypographyCustom type="h1" color={COLOR_WHITE} mb={96}>
                    {/* Погрузитесь в великое сражение и одолейте всех врагов */}
                    Одевайте экипировку, выбирайте оружие и захватывайте новые горизонты
                  </TypographyCustom>
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
      </Slider>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  slider: {
    '& .slick-dots': {
      bottom: 32,
    },
    '& .slick-slide': {
      transition: 'all 1s ease-out',
      '& > div > div': {
        outline: 'none',
      },
    },
  },
  background: {
    position: 'relative',
    backgroundColor: COLOR_BLACK,

    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: 860,
    minHeight: 600,
    [theme.breakpoints.down('sm')]: {
      maxHeight: '60vh',
    },
    [theme.breakpoints.up('sm')]: {
      maxHeight: '70vh',
    },
  },
  headerText: {
    bottom: 0,
    position: 'absolute',
    zIndex: 2,
  },
  list: {
    margin: 0,
    padding: '0 50px',
    textAlign: 'right',
    '& li': {
      height: 16,
      width: 16,
      borderRadius: 16,
      border: `1px solid ${COLOR_ROSE}`,
      '& button::before': { display: 'none' },
    },
    '& .slick-active': { background: COLOR_ROSE },
  },
}));

export default BackgroundSlider;
