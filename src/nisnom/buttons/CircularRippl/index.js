import React, { useEffect } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

export const CircularRippl = ({ children, styleColor, borderRadius, ...props }) => {
  const classes = useStyles({ styleColor, borderRadius });
  const ANIMATEDCLASSNAME = 'animated';
  useEffect(() => {
    const element = document.getElementById('animBtn');
    let ELEMENTS_SPAN = '';
    let addAnimation = false;
    if (!ELEMENTS_SPAN) ELEMENTS_SPAN = element.querySelector('span');
    element.addEventListener('mouseover', e => {
      ELEMENTS_SPAN.style.left = e.pageX - element.offsetLeft + 'px';
      ELEMENTS_SPAN.style.top = e.pageY - element.offsetTop + 'px';
      if (addAnimation) element.classList.add(ANIMATEDCLASSNAME);
    });
    element.addEventListener('mouseout', e => {
      ELEMENTS_SPAN.style.left = e.pageX - element.offsetLeft + 'px';
      ELEMENTS_SPAN.style.top = e.pageY - element.offsetTop + 'px';
    });
  });

  return (
    <a type="button" className={classes.btn} id="animBtn" {...props}>
      <span></span>
      <Typography>{children}</Typography>
    </a>
  );
};
CircularRippl.propTypes = {
  children: PropTypes.node,
  borderRadius: PropTypes.number,
  styleColor: PropTypes.string,
};

CircularRippl.defaultProps = {
  children: 'Button',
  borderRadius: 6,
  styleColor: '#000000',
};

const useStyles = makeStyles({
  '@keyframes shake': {
    '25%': {
      transform: 'rotate(calc(var(--angle) * -1))',
    },
    '50%': {
      transform: 'rotate(var(--angle))',
    },
    '100%': {
      transform: 'rotate(0deg)',
    },
  },
  btn: {
    '--width': '100%',
    '--time': '0.7s',
    cursor: 'pointer',
    position: 'relative',
    display: 'inline-block',
    height: '1em',
    padding: '20px 30px',
    color: 'white',
    background: ({ styleColor }) => styleColor,
    overflow: 'hidden',
    borderRadius: ({ borderRadius }) => borderRadius,
    transition: 'background 0.7s ease 0.1s',
    '&:hover': {
      background: '#fff',
    },
    '& p': {
      position: 'relative',
      zIndex: 5,
      transition: 'color var(--time)',
      lineHeight: 1,
    },
    '&:hover p': {
      color: '#222',
    },
    '& span': {
      borderRadius: '100%',
      position: 'absolute',
      display: 'block',
      content: '""',
      zIndex: 0,
      width: 0,
      height: 0,
      background: '#fff',
      transform: 'translate(-50%, -50%)',
      transition: 'width var(--time), padding-top var(--time)',
    },
    '&:hover span': {
      width: 'calc(var(--width) * 2.5)',
      paddingTop: 'calc(var(--width) * 2.5)',
    },
  },
  '.animated': {
    '--angle': '6deg',
    animation: 'shake 0.3s',
  },
});
