import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PropTypes from 'prop-types';

export const Button15 = ({ children, styleColor }) => {
  const classes = useStyles({ styleColor });
  return (
    <>
      <div className={`${classes.btn} ${classes.btn1}`}>Center -> out</div>
      <div className={`${classes.btn} ${classes.btn2}`}>Left -> Right -> Left</div>
      <div className={`${classes.btn} ${classes.btn3}`}>Left -> Right -> Right</div>
      <div className={`${classes.btn} ${classes.btn4}`}>Top -> Bottom -> Top</div>
      <div className={`${classes.btn} ${classes.btn5}`}>Skew Fill Left -> Right</div>
      <div className={`${classes.btn} ${classes.btn6}`}>Rounded Corners</div>
      <div className={`${classes.btn} ${classes.btn7}`}>Scale</div>
      <div className={`${classes.btn} ${classes.btn8}`}>Border (Inner Shadow)</div>
      <div className={`${classes.btn} ${classes.btn9}`}>Border (Outer Shadow)</div>
    </>
  );
};
Button15.propTypes = {
  children: PropTypes.node,
  styleColor: PropTypes.string,
};
Button15.defaultProps = {
  children: 'Button',
  styleColor: '#000000',
};

const useStyles = makeStyles({
  btn: {
    flex: '1 1 auto',
    margin: 10,
    padding: 20,
    border: ({ styleColor }) => `2px solid ${styleColor}`,
    textAlign: 'center',
    textTransform: 'uppercase',
    position: 'relative',
    overflow: 'hidden',
    transition: '.3s',
    cursor: 'pointer',
    '&:after': {
      position: 'absolute',
      transition: '.3s',
      content: '""',
      width: 0,
      left: '50%',
      bottom: 0,
      height: 3,
      background: ({ styleColor }) => styleColor,
    },
    '&:hover:after': {
      width: '100%',
      left: 0,
    },
  },
  btn2: {
    '&:after': {
      left: 0,
    },
  },
  btn3: {
    '&:after': {
      right: 0,
      left: 'auto',
    },
  },
  btn4: {
    '&:after': {
      left: 0,
      bottom: 'auto',
      top: -3,
      width: '100%',
    },
    '&:hover': {
      '&:after': {
        top: 'calc(100% - 3px)',
      },
    },
  },
  btn5: {
    '&:after': {
      height: '120%',
      left: '-10%',
      transform: 'skewX(15deg)',
      zIndex: -1,
    },
    '&:hover': {
      color: '#5bcaff',
      '&:after': {
        left: '-10%',
        width: '120%',
      },
    },
  },
  btn6: {
    '&:hover': {
      borderRadius: 30,
      '&:after': {
        width: 0,
      },
    },
  },
  btn7: {
    '&:hover': {
      transform: 'scale(1.1)',
      '&:after': {
        width: 0,
      },
    },
  },
  btn8: {
    '&:hover': {
      boxShadow: ({ styleColor }) => `inset 0px 0px 0px 3px ${styleColor}`,
      '&:after': {
        width: 0,
      },
    },
  },
  btn9: {
    '&:hover': {
      boxShadow: ({ styleColor }) => `0px 0px 0px 3px ${styleColor}`,
      '&:after': {
        width: 0,
      },
    },
  },
});
