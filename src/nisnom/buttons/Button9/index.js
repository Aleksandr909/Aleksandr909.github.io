import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PropTypes from 'prop-types';

export const Button9 = ({ children, styleColor }) => {
  const classes = useStyles({ styleColor });
  return <div className={classes.btn}>{children}</div>;
};
Button9.propTypes = {
  children: PropTypes.node,
  styleColor: PropTypes.string,
};

Button9.defaultProps = {
  children: 'Button',
  styleColor: '#000000',
};

const useStyles = makeStyles({
  btn: {
    padding: '0.75em 2em',
    textAlign: 'center',
    textDecoration: 'none',
    color: ({ styleColor }) => styleColor,
    border: ({ styleColor }) => `2px solid ${styleColor}`,
    fontSize: 24,
    display: 'inline-block',
    borderRadius: '0.3em',
    transition: 'all 0.2s ease-in-out',
    position: 'relative',
    overflow: 'hidden',
    '&:before': {
      content: '""',
      backgroundColor: 'rgba(255,255,255,0.5)',
      height: '100%',
      width: '3em',
      display: 'block',
      position: 'absolute',
      top: 0,
      left: '-4.5em',
      transform: 'skewX(-45deg) translateX(0)',
      transition: 'none',
    },
    '&:hover': {
      backgroundColor: ({ styleColor }) => styleColor,
      color: '#fff',
      borderBottom: ({ styleColor }) => `4px solid darken(${styleColor}, 10%)`,
      '&:before': {
        transform: 'skewX(-45deg) translateX(13.5em)',
        transition: 'all 0.5s ease-in-out',
      },
    },
  },
});
