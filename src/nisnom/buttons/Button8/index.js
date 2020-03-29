import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PropTypes from 'prop-types';

export const Button8 = ({ children, styleColor }) => {
  const classes = useStyles({ styleColor });
  return <button className={classes.btn}>{children}</button>;
};
Button8.propTypes = {
  children: PropTypes.node,
  styleColor: PropTypes.string,
};

Button8.defaultProps = {
  children: 'Button',
  styleColor: '#000000',
};

const useStyles = makeStyles({
  btn: {
    display: 'inline-block',
    background: 'none',
    border: 'none',
    padding: '1em 2em',
    fontSize: '1.5em',
    fontWeight: 600,
    fontFamily: 'inherit',
    textTransform: 'uppercase',
    textDecoration: 'none',
    color: '#f3f3f3',
    transition: 'color .2s',
    boxShadow: 'inset 0 0 0 4px #f3f3f3, 0 0 1px 1px #00000080',
    textShadow: '0 0 2px #00000080',
    position: 'relative',
    overflow: 'hidden',
    transform: 'translateZ(0)',
    cursor: 'pointer !important',
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      border: '4px solid transparent',
      willChange: 'transform',
      transition: 'transform .3s ease',
      pointerEvents: 'none',
      transform: 'translateZ(0)',
    },
    '&:before': {
      transform: 'skew(-81deg,0)',
      borderColor: ({ styleColor }) => `${styleColor} transparent`,
    },
    '&:after': {
      borderColor: ({ styleColor }) => `transparent ${styleColor}`,
      transform: 'skew(0,40deg)',
      transition: 'transform .4s',
    },
    '&:hover': {
      color: ({ styleColor }) => styleColor,
      '&:before, &:after': { transform: 'skew(0,0)' },
    },
  },
});
