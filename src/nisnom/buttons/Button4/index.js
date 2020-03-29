import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PropTypes from 'prop-types';

export const Button4 = ({ children, styleColor, borderRadius }) => {
  const classes = useStyles({ styleColor, borderRadius });

  return (
    <>
      <div className={`${classes.btn} ${classes.fromTop}`}>{children}</div>
      <div className={`${classes.btn} ${classes.fromLeft}`}>{children}</div>
      <div className={`${classes.btn} ${classes.fromRight}`}>{children}</div>
      <div className={`${classes.btn} ${classes.fromCenter}`}>{children}</div>
      <div className={`${classes.btn} ${classes.fromBottom}`}>{children}</div>
    </>
  );
};
Button4.propTypes = {
  children: PropTypes.node,
  borderRadius: PropTypes.number,
  styleColor: PropTypes.string,
};

Button4.defaultProps = {
  children: 'Button',
  borderRadius: 6,
  styleColor: '#000000',
};

const useStyles = makeStyles({
  btn: {
    position: 'relative',
    padding: '1.4rem 4.2rem',
    paddingRight: '3.1rem',
    fontSize: '1.4rem',
    color: ({ styleColor }) => styleColor,
    letterSpacing: '1.1rem',
    textTransform: 'uppercase',
    transition: 'all 500ms cubic-bezier(0.77, 0, 0.175, 1)',
    cursor: 'pointer',
    userSelect: 'none',
    '&:before': {
      content: '""',
      position: 'absolute',
      transition: 'inherit',
      zIndex: -1,
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      transition: 'inherit',
      zIndex: -1,
    },
    '&:hover': {
      transitionDelay: '0.2s',
      color: '#fff',
      '&:before': {
        transitionDelay: 0,
      },
      '&:after': {
        background: ({ styleColor }) => styleColor,
        transitionDelay: '0.5s',
      },
    },
  },
  fromTop: {
    '&:before': {
      left: 0,
      height: 0,
      width: '100%',
      bottom: 0,
      borderLeft: ({ styleColor }) => `1px solid ${styleColor}`,
      borderRight: ({ styleColor }) => `1px solid ${styleColor}`,
    },
    '&:after': {
      left: 0,
      height: 0,
      width: '100%',
      top: 0,
    },
    '&:hover': {
      '&:before': {
        height: '100%',
      },
      '&:after': {
        height: '100%',
      },
    },
  },

  /* From Left */

  fromLeft: {
    '&:before, &:after': {
      top: 0,
      width: 0,
      height: '100%',
    },
    '&:before': {
      right: 0,
      borderTop: ({ styleColor }) => `1px solid ${styleColor}`,
      borderBottom: ({ styleColor }) => `1px solid ${styleColor}`,
    },
    '&:after': {
      left: 0,
    },
    '&:hover': {
      '&:before': {
        width: '100%',
      },
      '&:after': { width: '100%' },
    },
  },
  // /* From Right */

  fromRight: {
    '&:before, &:after': {
      top: 0,
      width: 0,
      height: '100%',
    },
    '&:before': {
      left: 0,
      borderTop: ({ styleColor }) => `1px solid ${styleColor}`,
      borderBottom: ({ styleColor }) => `1px solid ${styleColor}`,
    },
    '&:after': {
      right: 0,
    },
    '&:hover': {
      '&:before, &:after': {
        width: '100%',
      },
    },
  },
  /* From center */

  fromCenter: {
    '&:before': {
      top: 0,
      left: '50%',
      height: '100%',
      width: 0,
      borderTop: ({ styleColor }) => `1px solid ${styleColor}`,
      borderBottom: ({ styleColor }) => `1px solid ${styleColor}`,
    },
    '&:after': {
      bottom: 0,
      left: 0,
      height: 0,
      width: '100%',
      background: ({ styleColor }) => styleColor,
    },
    '&:hover': {
      '&:before': {
        left: 0,
        width: '100%',
      },
      '&:after': {
        top: 0,
        height: '100%',
      },
    },
  },
  fromBottom: {
    '&:before, &:after': {
      left: 0,
      height: 0,
      width: '100%',
    },
    '&:before': {
      top: 0,
      borderLeft: ({ styleColor }) => `1px solid ${styleColor}`,
      borderRight: ({ styleColor }) => `1px solid ${styleColor}`,
    },
    '&:after': {
      bottom: 0,
      height: 0,
    },
    '&:hover': {
      '&:before, &:after': {
        height: '100%',
      },
    },
  },
});
