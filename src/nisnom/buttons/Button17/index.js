import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PropTypes from 'prop-types';

export const Button17 = ({ children, styleColor }) => {
  const classes = useStyles({ styleColor });
  return (
    <>
      <button className={`${classes.btn1} ${classes.btn}`}>Fill In</button>
      <button className={`${classes.btn2} ${classes.btn}`}>Close</button>
      <button className={`${classes.btn3} ${classes.btn}`}>
        <span>Read More</span>
      </button>
      <button className={`${classes.btn4} ${classes.btn}`}>
        <span>Read More</span>
      </button>
      <button className={`${classes.btn5} ${classes.btn}`}>
        <span>Read More</span>
      </button>
      <button className={`${classes.btn6} ${classes.btn}`}>
        <span>Read More</span>
      </button>
      <button className={`${classes.btn7} ${classes.btn}`}>Fill In</button>
      <button className={`${classes.btn8} ${classes.btn}`}>Close</button>
      <button className={`${classes.btn9} ${classes.btn}`}>Raise</button>
      <button className={`${classes.btn10} ${classes.btn}`}>Fill Up</button>
      <button className={`${classes.btn11} ${classes.btn}`}>Slide</button>
      <button className={`${classes.btn12} ${classes.btn}`}>Offset</button>
      <button className={`${classes.btn13} ${classes.btn}`}>Fill Up</button>
      <button className={`${classes.btn14} ${classes.btn}`}>Slide</button>
      <button className={`${classes.btn15} ${classes.btn}`}>Offset</button>
    </>
  );
};
Button17.propTypes = {
  children: PropTypes.node,
  styleColor: PropTypes.string,
};
Button17.defaultProps = {
  children: 'Button',
  styleColor: '#000000',
};

const useStyles = makeStyles({
  btn: {
    margin: 20,
    padding: '10px 25px',
    fontFamily: `"Roboto", sans-serif`,
    fontWeight: 500,
    background: 'transparent',
    outline: 'none !important',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    position: 'relative',
  },
  btn1: {
    border: ({ styleColor }) => `2px solid ${styleColor}`,
    '&:hover': {
      background: ({ styleColor }) => styleColor,
      color: '#fff',
    },
    '&:hover, &:active': {
      top: 2,
    },
  },
  btn2: {
    border: 'none',
    borderBottom: ({ styleColor }) => `2px solid ${styleColor}`,
    borderLeft: ({ styleColor }) => `2px solid ${styleColor}`,
    '&:before, &:after': {
      position: 'absolute',
      content: '""',
      right: 0,
      top: 0,
      background: ({ styleColor }) => styleColor,
      transition: 'all 0.3s ease',
    },
    '&:before': {
      height: 0,
      width: 2,
    },
    '&:after': {
      width: 0,
      height: 2,
    },
    '&:hover:before': {
      height: '100%',
    },
    '&:hover:after': {
      width: '100%',
    },
  },
  btn3: {
    width: 130,
    height: 40,
    lineHeight: '40px',
    padding: 0,
    border: 'none',
    '& span': {
      position: 'relative',
      display: 'block',
      width: '100%',
      height: '100%',
      '&:before, &:after': {
        position: 'absolute',
        content: '""',
        left: 0,
        bottom: 0,
        background: ({ styleColor }) => styleColor,
        transition: 'all 0.3s ease',
      },
      '&:before': {
        width: 2,
        height: 0,
      },
      '&:after': {
        width: 0,
        height: 2,
      },
      '&:hover:before': {
        height: '100%',
      },
      '&:hover:after': {
        width: '100%',
      },
    },
    '&:before, &:after': {
      position: 'absolute',
      content: '""',
      right: 0,
      top: 0,
      background: ({ styleColor }) => styleColor,
      transition: 'all 0.3s ease',
    },
    '&:before': {
      height: 0,
      width: 2,
    },
    '&:after': {
      width: 0,
      height: 2,
    },
    '&:hover:before': {
      height: '100%',
    },
    '&:hover:after': {
      width: '100%',
    },
  },
  btn4: {
    width: 130,
    height: 40,
    lineHeight: '40px',
    padding: 0,
    border: 'none',
    '& span': {
      position: 'relative',
      display: 'block',
      width: '100%',
      height: '100%',
      '&:before, &:after': {
        position: 'absolute',
        content: '""',
        left: 0,
        bottom: 0,
        background: ({ styleColor }) => styleColor,
        transition: 'all 0.3s ease',
      },
      '&:before': {
        width: 2,
        height: '50%',
      },
      '&:after': {
        width: '20%',
        height: 2,
      },
      '&:hover:before': {
        height: '100%',
      },
      '&:hover:after': {
        width: '100%',
      },
    },
    '&:before, &:after': {
      position: 'absolute',
      content: '""',
      right: 0,
      top: 0,
      background: ({ styleColor }) => styleColor,
      transition: 'all 0.3s ease',
    },
    '&:before': {
      height: '50%',
      width: 2,
    },
    '&:after': {
      width: '20%',
      height: 2,
    },
    '&:hover:before': {
      height: '100%',
    },
    '&:hover:after': {
      width: '100%',
    },
  },
  btn5: {
    width: 130,
    height: 40,
    lineHeight: '40px',
    padding: 0,
    border: 'none',
    '& span': {
      position: 'relative',
      display: 'block',
      width: '100%',
      height: '100%',
      '&:before, &:after': {
        position: 'absolute',
        content: '""',
        left: 0,
        top: 0,
        background: ({ styleColor }) => styleColor,
        transition: 'all 0.3s ease',
      },
      '&:before': {
        width: 2,
        height: '50%',
      },
      '&:after': {
        width: '20%',
        height: 2,
      },
      '&:hover:before': {
        height: '100%',
      },
      '&:hover:after': {
        width: '100%',
      },
    },
    '&:before, &:after': {
      position: 'absolute',
      content: '""',
      right: 0,
      bottom: 0,
      background: ({ styleColor }) => styleColor,
      transition: 'all 0.3s ease',
    },
    '&:before': {
      height: '50%',
      width: 2,
    },
    '&:after': {
      width: '20%',
      height: 2,
    },
    '&:hover:before': {
      height: '100%',
    },
    '&:hover:after': {
      width: '100%',
    },
  },
  btn6: {
    width: 130,
    height: 40,
    lineHeight: '40px',
    padding: 0,
    border: 'none',
    '& span': {
      position: 'relative',
      display: 'block',
      width: '100%',
      height: '100%',
      '&:before, &:after': {
        position: 'absolute',
        content: '""',
        background: ({ styleColor }) => styleColor,
      },
      '&:before': {
        left: 0,
        top: 0,
        width: 0,
        height: 2,
        transition: 'all 0.1s 0.1s ease',
      },
      '&:after': {
        left: 0,
        bottom: 0,
        width: '100%',
        height: 2,
      },
      '&:hover:before': {
        width: '100%',
      },
    },
    '&:before, &:after': {
      position: 'absolute',
      content: '""',
      height: 0,
      width: 2,
      background: ({ styleColor }) => styleColor,
    },
    '&:before': {
      right: 0,
      top: 0,
      transition: 'all 0.1s ease',
    },
    '&:after': {
      left: 0,
      bottom: 0,
      transition: 'all 0.1s 0.2s ease',
    },
    '&:hover:before': {
      transition: 'all 0.1s 0.2s ease',
      height: '100%',
    },
    '&:hover:after': {
      transition: 'all 0.1s ease',
      height: '100%',
    },
  },
  btn7: {
    border: ({ styleColor }) => `2px solid ${styleColor}`,
    transition: 'all 0.3s ease',
    background: '#f2f2f2',
    '&:before': {
      position: 'absolute',
      content: '""',
      zIndex: -1,
      width: '25%',
      top: '50%',
      left: '-15%',
      height: 2,
      background: ({ styleColor }) => styleColor,
      transition: 'all 0.3s ease',
    },
    '&:hover': {
      background: ({ styleColor }) => styleColor,
      color: '#fff',
      borderColor: ({ styleColor }) => styleColor,
      paddingLeft: 30,
      paddingRight: 20,
    },
    '&:hover:before': {
      left: '-10%',
    },
  },
  btn8: {
    paddingLeft: 30,
    paddingRight: 20,
    background: '#f2f2f2',
    border: ({ styleColor }) => `2px solid ${styleColor}`,
    transition: 'all 0.3s ease',
    '&:before': {
      position: 'absolute',
      content: '""',
      zIndex: -1,
      width: '25%',
      top: '50%',
      left: '-10%',
      height: 2,
      background: ({ styleColor }) => styleColor,
      transition: 'all 0.3s ease',
    },
    '&:hover': {
      background: ({ styleColor }) => styleColor,
      color: '#fff',
      borderColor: 'transparent',
      paddingLeft: 25,
      paddingRight: 25,
    },
    '&:hover:before': {
      left: '-15%',
    },
  },
  btn9: {
    background: '#f2f2f2',
    border: ({ styleColor }) => `2px solid ${styleColor}`,
    transition: 'all 0.3s ease',
    '&:before, &:after': {
      position: 'absolute',
      content: '""',
      zIndex: -1,
      width: '25%',
      top: '50%',
      height: 2,
      background: ({ styleColor }) => styleColor,
      transition: 'all 0.3s ease',
    },
    '&:before': {
      left: '-10%',
    },
    '&:after': {
      right: '-10%',
    },
    '&:hover': {
      background: ({ styleColor }) => styleColor,
      color: '#fff',
    },
    '&:hover:before': {
      left: '-15%',
    },
    '&:hover:after': {
      right: '-15%',
    },
  },
  btn10: {
    background: '#f2f2f2',
    border: ({ styleColor }) => `2px solid ${styleColor}`,
    transition: 'all 0.3s ease',
    '&:before, &:after': {
      position: 'absolute',
      content: '""',
      zIndex: -1,
      width: '25%',
      top: '50%',
      height: 2,
      background: ({ styleColor }) => styleColor,
      transition: 'all 0.3s ease',
    },
    '&:before': {
      left: '-15%',
    },
    '&:after': {
      right: '-15%',
    },
    '&:hover': {
      background: ({ styleColor }) => styleColor,
      color: '#fff',
    },
    '&:hover:before': {
      left: '-10%',
    },
    '&:hover:after': {
      right: '-10%',
    },
  },
  btn11: {
    background: '#f2f2f2',
    border: ({ styleColor }) => `2px solid ${styleColor}`,
    transition: 'all 0.3s ease',
    '&:before, &:after': {
      position: 'absolute',
      content: '""',
      zIndex: -1,
      width: '25%',
      top: '50%',
      height: 2,
      background: ({ styleColor }) => styleColor,
      transition: 'all 0.3s ease',
    },
    '&:before': {
      left: '-10%',
    },
    '&:after': {
      right: '-10%',
    },
    '&:hover': {
      background: ({ styleColor }) => styleColor,
      color: '#fff',
    },
    '&:hover:before': {
      left: 0,
    },
    '&:hover:after': {
      right: 0,
    },
  },
  btn12: {
    border: ({ styleColor }) => `2px solid ${styleColor}`,
    zIndex: 1,
    '&:after': {
      position: 'absolute',
      content: '""',
      width: '100%',
      height: 0,
      bottom: 0,
      left: 0,
      zIndex: -1,
      background: ({ styleColor }) => styleColor,
      transition: 'all 0.3s ease',
    },
    '&:hover': {
      color: '#fff',
    },
    '&:hover:after': {
      top: 0,
      height: '100%',
    },
    '&:active': {
      top: 2,
    },
  },
  btn13: {
    border: ({ styleColor }) => `2px solid ${styleColor}`,
    zIndex: 1,
    '&:after': {
      position: 'absolute',
      content: '""',
      width: '100%',
      height: 0,
      top: 0,
      left: 0,
      zIndex: -1,
      background: ({ styleColor }) => styleColor,
      transition: 'all 0.3s ease',
    },
    '&:hover': {
      color: '#fff',
    },
    '&:hover:after': {
      top: 'auto',
      bottom: 0,
      height: '100%',
    },
    '&:active': {
      top: 2,
    },
  },
  btn14: {
    border: ({ styleColor }) => `2px solid ${styleColor}`,
    zIndex: 1,
    '&:after': {
      position: 'absolute',
      content: '""',
      width: 0,
      height: '100%',
      top: 0,
      right: 0,
      zIndex: -1,
      background: ({ styleColor }) => styleColor,
      transition: 'all 0.3s ease',
    },
    '&:hover': {
      color: '#fff',
    },
    '&:hover:after': {
      left: 0,
      width: '100%',
    },
    '&:active': {
      top: 2,
    },
  },
  btn15: {
    border: ({ styleColor }) => `2px solid ${styleColor}`,
    zIndex: 1,
    '&:after': {
      position: 'absolute',
      content: '""',
      width: 0,
      height: '100%',
      top: 0,
      left: 0,
      direction: 'rtl',
      zIndex: -1,
      background: ({ styleColor }) => styleColor,
      transition: 'all 0.3s ease',
    },
    '&:hover': {
      color: '#fff',
    },
    '&:hover:after': {
      left: 'auto',
      right: 0,
      width: '100%',
    },
    '&:active': {
      top: 2,
    },
  },
});
