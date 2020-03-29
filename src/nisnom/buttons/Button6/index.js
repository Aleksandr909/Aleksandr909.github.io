import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PropTypes from 'prop-types';

export const Button6 = ({ styleColor, borderRadius }) => {
  const classes = useStyles({ styleColor, borderRadius });

  return (
    <div className={classes.btn}>
      <svg viewBox="0 0 24 24">
        <path d="M12 2c-3.87 0-7 3.13-7 7 0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        <path d="M0 0h24v24h-24z" fill="none" />
      </svg>
    </div>
  );
};
Button6.propTypes = {
  children: PropTypes.node,
  borderRadius: PropTypes.number,
  styleColor: PropTypes.string,
};

Button6.defaultProps = {
  children: 'Button',
  borderRadius: 6,
  styleColor: '#000000',
};

const useStyles = makeStyles({
  btn: {
    width: 120,
    height: 120,
    borderRadius: ({ borderRadius }) => borderRadius,
    boxShadow: ({ styleColor }) => `0 2px 2px ${styleColor}, 0 0 0 #f3f3f3 inset`,
    background: ({ styleColor }) => styleColor,
    margin: '0 20px',
    transition: 'box-shadow .2s ease, transform .5s ease, margin-top .2s ease',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg': {
      height: 48,
      width: 48,
      transform: 'scale(1,1)',
      fill: '#fff',
    },
    '&:hover': {
      transform: 'scale(1.1,1.1)',
      boxShadow: ({ styleColor }) => `0 0 10px ${styleColor}, 1px 1px 150px #f3f3f350 inset`,
      '& svg': {
        transform: 'scale(1.1,1.1)',
        fill: '#fff',
        transition: 'transform .2s ease, fill .2s ease',
      },
    },
    '&:active': {
      marginTop: 5,
      boxShadow: ({ styleColor }) => `0 2px 2px ${styleColor}, 0 0 0 #f3f3f3 inset`,
      '& svg': {
        fill: '#fff',
      },
    },
  },
});
