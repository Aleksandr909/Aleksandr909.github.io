import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PropTypes from 'prop-types';

export const Button16 = ({ children, styleColor }) => {
  const classes = useStyles({ styleColor });
  return (
    <>
      <button className={`${classes.fill} ${classes.btn}`}>Fill In</button>
      <button className={`${classes.close} ${classes.btn}`}>Close</button>
      <button className={`${classes.raise} ${classes.btn}`}>Raise</button>
      <button className={`${classes.up} ${classes.btn}`}>Fill Up</button>
      <button className={`${classes.slide} ${classes.btn}`}>Slide</button>
      <button className={`${classes.offset} ${classes.btn}`}>Offset</button>
    </>
  );
};
Button16.propTypes = {
  children: PropTypes.node,
  styleColor: PropTypes.string,
};
Button16.defaultProps = {
  children: 'Button',
  styleColor: '#000000',
};

const useStyles = makeStyles({
  btn: {
    background: 'none',
    border: '2px solid',
    font: 'inherit',
    lineHeight: 1,
    margin: '0.5em',
    padding: '1em 2em',
    color: ({ styleColor }) => styleColor,
    transition: '0.25s',
    '&:hover, &:focus': {
      borderColor: ({ styleColor }) => styleColor,
      color: '#fff',
    },
  },
  fill: {
    '&:hover, &:focus': {
      boxShadow: ({ styleColor }) => `inset 0 0 0 2em ${styleColor}`,
    },
  },
  close: {
    '&:hover, &:focus': {
      boxShadow: ({ styleColor }) => `
    inset -3.5em 0 0 0 ${styleColor},
    inset 3.5em 0 0 0 ${styleColor}`,
    },
  },
  raise: {
    '&:hover, &:focus': {
      color: ({ styleColor }) => styleColor,
      boxShadow: ({ styleColor }) => `0 0.5em 0.5em -0.4em ${styleColor}`,
      transform: 'translateY(-0.25em)',
    },
  },
  up: {
    '&:hover, &:focus': {
      boxShadow: ({ styleColor }) => `inset 0 -3.25em 0 0 ${styleColor}`,
    },
  },
  slide: {
    '&:hover, &:focus': {
      boxShadow: ({ styleColor }) => `inset 6.5em 0 0 0 ${styleColor}`,
    },
  },
  offset: {
    boxShadow: ({ styleColor }) => `
    0.3em 0.3em 0 0 ${styleColor},
    inset 0.3em 0.3em 0 0 ${styleColor}`,
    '&:hover, &:focus': {
      boxShadow: ({ styleColor }) => `
      0 0 0 0 ${styleColor},
      inset 6em 3.5em 0 0 ${styleColor}`,
    },
  },
});
