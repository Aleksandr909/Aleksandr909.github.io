import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

export const RoundedButton = ({ children, styleColor, variant, ...props }) => {
  const classes = useStyles({ styleColor });
  return (
    <Button
      className={`${classes.stepButton} ${
        variant === 'contained' ? classes.nextButton : classes.prevButton
      }`}
      {...props}
    >
      {children}
    </Button>
  );
};
RoundedButton.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
  styleColor: PropTypes.string,
};

RoundedButton.defaultProps = {
  children: 'Button',
  variant: 'contained',
  styleColor: '#000000',
};

const useStyles = makeStyles({
  stepButton: {
    borderRadius: 50,
    boxSizing: 'border-box',
    boxShadow: ({ styleColor }) => `0px 2px 4px ${styleColor}`,
    height: 42,
    padding: '0 16px',
  },
  prevButton: {
    border: ({ styleColor }) => `1px solid ${styleColor}`,
    color: ({ styleColor }) => styleColor,
    '&:hover': {
      boxShadow: ({ styleColor }) => `0px 4px 8px ${styleColor}`,
    },
    '&.Mui-disabled': {
      border: ({ styleColor }) => `1px solid ${styleColor}`,
      opacity: 0.8,
      boxShadow: 'none',
    },
  },
  nextButton: {
    background: ({ styleColor }) => styleColor,
    '&:hover': {
      background: ({ styleColor }) => styleColor,
      boxShadow: ({ styleColor }) => `0px 4px 8px ${styleColor}`,
    },
    '&.Mui-disabled': {
      background: ({ styleColor }) => `${styleColor}`,
      opacity: 0.8,
      boxShadow: 'none',
    },
  },
});
