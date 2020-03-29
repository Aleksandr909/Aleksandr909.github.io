import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PropTypes from 'prop-types';

export const Button7 = ({ children, styleColor }) => {
  const classes = useStyles({ styleColor });

  return (
    <>
      <div className={`${classes.btn} ${classes.btn1}`}>
        <svg>
          <rect x="0" y="0" fill="none" width="100%" height="100%" />
        </svg>
        {children}
      </div>
      <div className={`${classes.btn} ${classes.btn2}`}>{children}</div>
      <div className={`${classes.btn} ${classes.btn3}`}>{children}</div>
      <div className={`${classes.btn} ${classes.btn4}`}>
        <span>{children}</span>
      </div>
      <div className={`${classes.btn} ${classes.btn5}`}>{children}</div>
    </>
  );
};
Button7.propTypes = {
  children: PropTypes.node,
  styleColor: PropTypes.string,
};

Button7.defaultProps = {
  children: 'Button',
  styleColor: '#000000',
};

const useStyles = makeStyles({
  btn: {
    margin: 20,
    color: '#000',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 1,
    maxWidth: 160,
    height: 56,
    position: 'relative',
    textTransform: 'uppercase',
    width: '100%',
    boxSizing: 'border-box',
  },
  btn1: {
    fontWeight: 100,
    transition: 'all .2s ease',
    '& svg': {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: 56,
    },
    '& rect': {
      transition: 'all .7s ease',
      fill: 'none',
      stroke: ({ styleColor }) => styleColor,
      strokeWidth: 1,
      strokeDasharray: '422, 0',
    },
    '&:hover': {
      background: 'rgba(225, 51, 45, 0)',
      letterSpacing: 1,
      fontWeight: 900,
      '& rect': {
        strokeWidth: 5,
        strokeDasharray: '15, 310',
        strokeDashoffset: 48,
        transition: 'all 1.35s cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  btn2: {
    letterSpacing: 0,
    transition: 'all 280ms ease-in-out',
    '&:hover, &:active': {
      letterSpacing: 5,
    },
    '&:after, &:before': {
      backfaceVisibility: 'hidden',
      border: '1px solid rgba(255, 255, 255, 0)',
      bottom: 0,
      content: '""',
      display: 'block',
      margin: '0 auto',
      position: 'absolute',
      transition: 'all 280ms ease-in-out',
      width: 0,
    },
    '&:hover:before': {
      bottom: 'auto',
      top: 0,
    },
    '&:hover:after, &:hover:before': {
      backfaceVisibility: 'hidden',
      borderColor: ({ styleColor }) => styleColor,
      transition: 'width 350ms ease-in-out',
      width: '70%',
    },
  },
  btn3: {
    border: '1px solid white',
    boxShadow: ({ styleColor }) => `0px 2px 4px ${styleColor}, 2px 4px 6px #eee`,
    fontWeight: 900,
    letterSpacing: 1,
    transition: 'all 150ms linear',
    '&:hover': {
      border: '1px solid rgba(0, 0, 0, 0.05)',
      boxShadow: '1px 1px 2px rgba(255, 255, 255, 0.2)',
      color: '#74e6e0',
      textDecoration: 'none',
      textShadow: '-1px -1px 0 #136a65',
      transition: 'all 250ms linear',
    },
  },
  btn4: {
    border: '1px solid',
    overflow: 'hidden',
    position: 'relative',
    '& span': {
      zIndex: 20,
    },
    '&:after': {
      background: ({ styleColor }) => styleColor,
      content: '""',
      height: 155,
      left: -75,
      opacity: 0.2,
      position: 'absolute',
      top: -50,
      width: 50,
      transition: 'all 550ms cubic-bezier(0.19, 1, 0.22, 1)',
      transform: 'rotate(35deg)',
      zIndex: -10,
    },
    '&:hover:after': {
      left: '120%',
      transition: 'all 550ms cubic-bezier(0.19, 1, 0.22, 1)',
    },
  },
  btn5: {
    border: '0 solid',
    outline: '1px solid',
    outlineColor: ({ styleColor }) => styleColor,
    outlineOffset: 0,
    textShadow: 'none',
    transition: 'all 1250ms cubic-bezier(0.19, 1, 0.22, 1)',
    '&:hover': {
      border: '1px solid',
      boxShadow: ({ styleColor }) => `inset 0 0 20px ${styleColor}60, 0 0 20px ${styleColor}30`,
      outlineOffset: 15,
      outlineColor: '#ffffffff',
      textShadow: '1px 1px 2px #427388',
    },
  },
});
