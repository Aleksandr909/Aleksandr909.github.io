import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

export const Image3 = ({ children, src, styleColor }) => {
  const classes = useStyles({ styleColor });
  return (
    <div className={classes.container}>
      <img src={src} alt="" />
      <p className="title">{children}</p>
      <div className="overlay"></div>
      <Button className="button">BUTTON</Button>
    </div>
  );
};
Image3.propTypes = {
  src: PropTypes.string,
  children: PropTypes.string,
  styleColor: PropTypes.string,
};
Image3.defaultProps = {
  src: '',
  children: 'Image',
  styleColor: '#000000',
};

const useStyles = makeStyles({
  container: {
    position: 'relative',
    marginTop: 50,
    width: 500,
    height: 300,
    '&:hover .overlay': {
      display: 'block',
      background: ({ styleColor }) => styleColor,
      opacity: 0.3,
    },
    '&:hover .title': {
      top: 90,
    },
    '&:hover .button': {
      opacity: 1,
    },
    '& .overlay': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: ({ styleColor }) => styleColor,
      opacity: 0,
      transition: 'background 0.5s ease',
    },
    '& img': {
      position: 'absolute',
      width: 500,
      height: 300,
      left: 0,
    },
    '& .title': {
      position: 'absolute',
      width: 500,
      left: 0,
      top: 120,
      fontWeight: 700,
      fontSize: 30,
      textAlign: 'center',
      textTransform: 'uppercase',
      color: 'white',
      zIndex: 1,
      transition: 'top .5s ease',
    },
    '& .button': {
      position: 'relative',
      display: 'block',
      margin: '0 auto',
      left: 0,
      top: 180,
      textAlign: 'center',
      opacity: 0,
      transition: 'opacity .35s ease',
      padding: '12px 48px',
      color: 'white',
      border: 'solid 2px white',
      zIndex: 1,
    },
  },
});
