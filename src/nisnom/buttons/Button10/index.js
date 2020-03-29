import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PropTypes from 'prop-types';

export const Button10 = ({ children, styleColor }) => {
  const classes = useStyles({ styleColor });
  return <button className={classes.btn}>{children}</button>;
};
Button10.propTypes = {
  children: PropTypes.node,
  styleColor: PropTypes.string,
};
Button10.defaultProps = {
  children: 'Button',
  styleColor: '#000000',
};

const useStyles = makeStyles({
  btn: {
    background: ({ styleColor }) => styleColor,
    color: '#fff',
    border: 'none',
    position: 'relative',
    height: '60px',
    fontSize: '1.6em',
    padding: '0 2em',
    cursor: 'pointer',
    transition: '800ms ease all',
    outline: 'none',
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      height: 2,
      width: 0,
      background: ({ styleColor }) => styleColor,
      transition: '400ms ease all',
    },
    '&:after': {
      right: 'inherit',
      top: 'inherit',
      left: 0,
      bottom: 0,
    },
    '&:hover': {
      background: '#fff',
      color: ({ styleColor }) => styleColor,
      '&:before, &:after': {
        width: '100%',
        transition: '800ms ease all',
      },
    },
  },
});
