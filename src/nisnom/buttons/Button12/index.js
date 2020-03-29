import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PropTypes from 'prop-types';

export const Button12 = ({ children, styleColor }) => {
  const classes = useStyles({ styleColor });
  return (
    <div className={classes.btn}>
      <svg width="277" height="62">
        <defs>
          <linearGradient id="grad1">
            <stop offset="0%" stopColor="#FF8282" />
            <stop offset="100%" stopColor="#E178ED" />
          </linearGradient>
        </defs>
        <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
      </svg>
      <span>{children}</span>
    </div>
  );
};
Button12.propTypes = {
  children: PropTypes.node,
  styleColor: PropTypes.string,
};
Button12.defaultProps = {
  children: 'Button',
  styleColor: '#000000',
};

const useStyles = makeStyles({
  btn: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 277,
    height: 62,
    fontSize: '1em',
    fontWeight: 'bold',
    lineHeight: 1,
    textAlign: 'center',
    textTransform: 'uppercase',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    textDecoration: 'none',
    fontFamily: `'Roboto', sans-serif`,
    letterSpacing: '0.045em',
    '& svg': {
      position: 'absolute',
      top: 0,
      left: 0,
      '& rect': {
        strokeWidth: 4,
        strokeDasharray: '353, 0',
        strokeDashoffset: 0,
        transition: 'all 600ms ease',
      },
    },
    '& span': {
      color: ({ styleColor }) => styleColor,
    },
    '&:hover svg rect': {
      strokeWidth: 4,
      strokeDasharray: '196, 543',
      strokeDashoffset: 437,
    },
  },
});
