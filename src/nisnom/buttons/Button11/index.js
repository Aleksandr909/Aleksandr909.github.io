import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PropTypes from 'prop-types';

export const Button11 = ({ children, styleColor }) => {
  const classes = useStyles({ styleColor });
  return (
    <div className={classes.btn}>
      <span>{children}</span>
    </div>
  );
};
Button11.propTypes = {
  children: PropTypes.node,
  styleColor: PropTypes.string,
};
Button11.defaultProps = {
  children: 'Button',
  styleColor: '#000000',
};

const useStyles = makeStyles({
  btn: {
    position: 'relative',
    display: 'inline-block',
    padding: '0.3em',
    margin: '1em',
    border: ({ styleColor }) => `solid 1px ${styleColor}`,
    textTransform: 'uppercase',
    cursor: 'pointer',
    boxSizing: 'border-box',
    '&::before, &::after, & span, & span::before, & span::after': {
      boxSizing: 'border-box',
      transition: 'all ease .5s',
    },
    '&:hover': {
      boxShadow: ({ styleColor }) => `0 0 5em .5em ${styleColor}70`,
      '&::after, & span::after': {
        transform: 'scaleY(0)',
      },
      '&::before, & span::before': {
        transform: 'scaleX(0)',
      },
      '& span': {
        backgroundColor: ({ styleColor }) => styleColor,
        width: 'auto',
        color: '#fff',
        '&::after, &::before': {
          opacity: 0,
        },
      },
    },
    '& span': {
      display: 'inline-block',
      width: '100%',
      padding: '0.6em 2em',
    },
    '&::before, &::after, & span::before, & span::after': {
      content: '""',
      position: 'absolute',
      border: 1,
    },
    '&::before, & span::before': {
      borderTop: ({ styleColor }) => `1px solid ${styleColor}`,
      borderBottom: ({ styleColor }) => `1px solid ${styleColor}`,
    },
    '&::before, & span::after': {
      left: 0,
      top: -6,
      width: '100%',
      height: 'calc(100% + 12px)',
    },
    '&::after, & span::after': {
      borderLeft: ({ styleColor }) => `1px solid ${styleColor}`,
      borderRight: ({ styleColor }) => `1px solid ${styleColor}`,
    },
    '&::after, & span::before': {
      top: 0,
      left: -6,
      height: '100%',
      width: 'calc(100% + 12px)',
    },
  },
});
