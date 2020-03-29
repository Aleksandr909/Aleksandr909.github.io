import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PropTypes from 'prop-types';

export const Button5 = ({ children, styleColor, borderRadius }) => {
  const classes = useStyles({ styleColor, borderRadius });

  return (
    <>
      <div className={`${classes.swipe} ${classes.btn}`}>{children}</div>
      <div className={`${classes.btn} ${classes.posAware}`}>{children}</div>
      <div className={`${classes.btn} ${classes.diagonalSwipeLeft}`}>{children}</div>
      <div className={`${classes.btn} ${classes.diagonalSwipeRight}`}>{children}</div>

      <div className={`${classes.btn} ${classes.doubleSwipe}`}>{children}</div>

      <div className={`${classes.btn} ${classes.colusion}`}>{children}</div>

      <div className={`${classes.letterSpacing} ${classes.btn}`}>{children}</div>
    </>
  );
};
Button5.propTypes = {
  children: PropTypes.node,
  borderRadius: PropTypes.number,
  styleColor: PropTypes.string,
};

Button5.defaultProps = {
  children: 'Button',
  borderRadius: 6,
  styleColor: '#000000',
};

const useStyles = makeStyles({
  btn: {
    height: 50,
    border: ({ styleColor }) => `1px solid ${styleColor}`,
    overflow: 'hidden',
    color: ({ styleColor }) => styleColor,
    lineHeight: 1,
    float: 'left',
    zIndex: 1,
    margin: 20,
    padding: '0 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: ({ borderRadius }) => borderRadius,
    fontSize: '1.2em',
    position: 'relative',
    transition: 'all 1s ease-out',
    '&:before': {
      boxSizing: 'border-box',
      content: '""',
      transition: '0.5s',
      zIndex: -1,
    },
    '&:after': {
      boxSizing: 'border-box',
      content: '""',
      transition: '0.5s',
    },
    '&:hover': {
      boxShadow: '0 5px 20px rgba(0,0,0,.5)',
      cursor: 'pointer',
      transitionDelay: '0.1s',
      color: '#fff',
      zIndex: 8,
    },
  },
  swipe: {
    '&:before': {
      content: '""',
      position: 'absolute',
      left: '-100%',
      top: 0,
      display: 'block',
      width: '100%',
      height: '100%',
      background: ({ styleColor }) => styleColor,
    },
    '&:hover': {
      '&:before': {
        left: 0,
        zIndex: -5,
        transform: 'scale(1.2)',
        transitionTimingFunction: 'cubic-bezier(0.47, 2.02, 0.31, -0.36)',
        transitionDuration: '0.5s',
      },
    },
  },
  posAware: {
    '&:before': {
      position: 'absolute',
      top: '-20px',
      left: '50%',
      transform: 'translate(-50%, -50%) scale(1)',
      display: 'block',
      width: 40,
      height: 40,
      background: ({ styleColor }) => styleColor,
      borderRadius: 50,
    },
    '&:hover': {
      '&:before': {
        transform: 'scale(8.3)',
      },
    },
  },
  diagonalSwipeLeft: {
    '&:before': {
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'block',
      width: '100%',
      height: '100%',
      transform: 'translateX(-100%)',
      borderRight: `20px solid transparent`,
      borderBottom: ({ styleColor }) => `50px solid ${styleColor}`,
    },
    '&:hover': {
      '&:before': {
        transform: 'translateX(0)',
      },
    },
  },
  diagonalSwipeRight: {
    '&:before': {
      position: 'absolute',
      top: 0,
      right: 0,
      display: 'block',
      width: '100%',
      height: '100%',
      transform: 'translateX(100%)',
      borderLeft: `20px solid transparent`,
      borderBottom: ({ styleColor }) => `50px solid ${styleColor}`,
      transition: '0.5s ease-in-out',
    },
    '&:hover': {
      '&:before': {
        transform: 'translateX(0)',
      },
    },
  },
  doubleSwipe: {
    minWidth: 200,
    '&:before, &:after': {
      position: 'absolute',
      display: 'block',
      width: '100%',
      height: '100%',
      zIndex: '-5 !important',
      transform: 'scale(1)',
    },
    '&:before': {
      top: 0,
      left: -100,
      transform: 'translateX(-100%)',
      borderRight: `20px solid transparent`,
      borderBottom: ({ styleColor }) => `50px solid ${styleColor}`,
    },
    '&:after': {
      top: 0,
      right: -100,
      transform: 'translateX(100%)',
      borderLeft: `20px solid transparent`,
      borderBottom: ({ styleColor }) => `50px solid ${styleColor}`,
    },
    '&:hover': {
      '&:before': { transform: 'translateX(40%)' },
      '&:after': { transform: 'translateX(-40%)' },
    },
  },
  colusion: {
    '&:before, &:after': {
      position: 'absolute',
      display: 'block',
      width: 20,
      height: 20,
      background: ({ styleColor }) => styleColor,
      borderRadius: 50,
      zIndex: -5,
      transform: 'scale(1)',
      transition: '0.5s',
    },
    '&:before': {
      top: 30,
      left: 0,
      transform: 'translateX(-100%)',
    },
    '&:after': {
      top: 30,
      right: 0,
      transform: 'translateX(100%)',
    },
    '&:hover': {
      '&:before': {
        transform: 'translateX(530%) scale(10)',
      },
      '&:after': {
        transform: 'translateX(-530%) scale(10)',
      },
    },
  },
  letterSpacing: {
    border: 'none !important',
    '&:before': {
      display: 'block',
      width: '100%',
      height: 2,
      position: 'absolute',
      top: 0,
      left: 0,
      background: ({ styleColor }) => styleColor,
      transform: 'translateX(100%)',
    },
    '&:after': {
      display: 'block',
      width: '100%',
      height: 2,
      position: 'absolute',
      bottom: 0,
      left: 0,
      background: ({ styleColor }) => styleColor,
      transform: 'translateX(-100%)',
    },
    '&:hover': {
      letterSpacing: 2,
      color: ({ styleColor }) => styleColor,
      '&:before, &:after': {
        transform: 'translateX(0%)',
      },
    },
  },
});
