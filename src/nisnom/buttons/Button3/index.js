import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PropTypes from 'prop-types';

export const Button3 = ({ children, styleColor, borderRadius }) => {
  const classes = useStyles({ styleColor, borderRadius });

  return (
    <>
      <div className={classes.buttonItem}>
        <a href="" className={classes.btn1}>
          {children}
        </a>
      </div>
      <div className={classes.buttonItem}>
        <a href="" className={classes.btn2}>
          {children}
        </a>
      </div>
      <div className={classes.buttonItem}>
        <a href="" className={classes.btn3}>
          <span>{children}</span>
        </a>
      </div>
      <div className={classes.buttonItem}>
        <a href="" className={classes.btn4}>
          <span>{children}</span>
        </a>
      </div>
      <div className={classes.buttonItem}>
        <a href="" className={classes.btn5}>
          {children}
        </a>
      </div>
      <div className={classes.buttonItem}>
        <a href="" className={classes.btn6}>
          {children}
        </a>
      </div>
    </>
  );
};
Button3.propTypes = {
  children: PropTypes.node,
  borderRadius: PropTypes.number,
  styleColor: PropTypes.string,
};

Button3.defaultProps = {
  children: 'Button',
  borderRadius: 6,
  styleColor: '#000000',
};

const useStyles = makeStyles({
  buttonItem: {
    paddingBottom: '2em',
    '& a': {
      textDecoration: 'none',
      fontWeight: 500,
      position: 'relative',
      color: '#4A4A4A',
      display: 'inline-block',
    },
  },
  // button 1
  btn1: {
    padding: '1em 3em',
    border: ({ styleColor }) => `3px solid ${styleColor}`,
    borderRadius: ({ borderRadius }) => borderRadius,
    transition: 'all 500ms ease',
    boxShadow: '0px 4px 10px 2px rgba(black, 0.2)',
    '&:before': {
      position: 'absolute',
      content: '""',
      width: '0%',
      height: '100%',
      background: ({ styleColor }) => styleColor,
      top: 0,
      left: '50%',
      zIndex: -1,
      borderRadius: ({ borderRadius }) => borderRadius - 4,
      transition: 'all 500ms ease',
    },
    '&:hover': {
      color: 'white',
      boxShadow: 'none',
      '&:before': {
        width: '100%',
        left: 0,
      },
    },
  },
  btn2: {
    padding: '1em 3em',
    border: ({ styleColor }) => `3px solid ${styleColor}`,
    transition: 'all 0.5s ease',
    boxShadow: '0px 4px 10px 2px rgba(black, 0.2)',
    '&:before': {
      position: 'absolute',
      content: '""',
      width: 0,
      height: '100%',
      background: ({ styleColor }) => styleColor,
      top: 0,
      left: 'auto',
      right: 0,
      zIndex: -1,
      transition: 'all 0.5s ease',
    },
    '&:hover': {
      color: 'white',
      boxShadow: 'none',
      '&:before': {
        width: '100%',
        left: 0,
      },
    },
  },
  btn3: {
    padding: '1em 3em',
    border: ({ styleColor }) => `3px solid ${styleColor}`,
    transition: 'all 0.5s ease',
    boxShadow: '0px 4px 10px 2px rgba(black, 0.2)',
    '& span': {
      position: 'relative',
      padding: '0 0.2em',
      '&:before': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 'auto',
        right: 0,
        height: '50%',
        width: 0,
        background: ({ styleColor }) => styleColor,
        zIndex: -1,
        transition: 'all 0.5s ease',
      },
    },
    '&:hover': {
      color: 'white',
      boxShadow: 'none',
      '& span': {
        '&:before': {
          width: '100%',
          left: 0,
        },
      },
    },
  },
  btn4: {
    padding: '1em 3em',
    border: ({ styleColor }) => `3px solid ${styleColor}`,
    transition: 'all 0.5s ease',
    boxShadow: '0px 4px 10px 2px rgba(black, 0.2)',
    '& span': {
      position: 'relative',
      padding: '0 0.2em',
      '&:before': {
        content: '""',
        position: 'absolute',
        bottom: 'auto',
        top: 0,
        height: 0,
        width: '100%',
        background: ({ styleColor }) => styleColor,
        zIndex: -1,
        transition: 'all 0.5s ease',
      },
    },
    '&:hover': {
      color: 'white',
      boxShadow: 'none',
      '& span': {
        '&:before': {
          height: '100%',
          bottom: 0,
          top: 'auto',
        },
      },
    },
  },
  btn5: {
    padding: '1em 3em',
    border: ({ styleColor }) => `3px solid ${styleColor}`,
    transition: 'all 0.3s ease',
    boxShadow: '0px 4px 10px 2px rgba(black, 0.2)',
    '&:before': {
      content: '""',
      width: 0,
      height: '2px',
      position: 'absolute',
      top: '10%',
      left: '10%',
      background: ({ styleColor }) => styleColor,
      transition: 'all 0.3s ease',
    },
    '&:after': {
      content: '""',
      width: '80%',
      height: 0,
      position: 'absolute',
      top: '10%',
      left: '10%',
      background: ({ styleColor }) => styleColor,
      transition: 'all 0.3s ease',
      zIndex: -1,
    },
    '&:hover': {
      color: 'white',
      boxShadow: 'none',
      '&:before': {
        width: '80%',
      },
      '&:after': {
        height: '80%',
        transitionDelay: '350ms',
      },
    },
  },
  btn6: {
    padding: '1em 3em',
    border: ({ styleColor }) => `3px solid ${styleColor}`,
    transition: 'all 0.3s ease',
    boxShadow: '0px 4px 10px 2px rgba(black, 0.2)',
    '&:before': {
      content: '""',
      height: 0,
      width: '2px',
      position: 'absolute',
      top: '10%',
      left: '10%',
      background: ({ styleColor }) => styleColor,
      transition: 'all 0.3s ease',
    },
    '&:after': {
      content: '""',
      height: '80%',
      width: 0,
      position: 'absolute',
      top: '10%',
      left: '10%',
      background: ({ styleColor }) => styleColor,
      transition: 'all 0.3s ease',
      zIndex: -1,
    },
    '&:hover': {
      color: 'white',
      boxShadow: 'none',
      '&:before': {
        height: '80%',
      },
      '&:after': {
        width: '80%',
        transitionDelay: '350ms',
      },
    },
  },
});
