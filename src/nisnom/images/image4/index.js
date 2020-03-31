import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PropTypes from 'prop-types';

export const Image4 = ({ children, src, styleColor }) => {
  const classes = useStyles({ styleColor, src });
  return (
    <div className={classes.container}>
      <a href="#">
        <div className="overlay" />
        <span>{children}</span>
      </a>
    </div>
  );
};
Image4.propTypes = {
  src: PropTypes.string,
  children: PropTypes.string,
  styleColor: PropTypes.string,
};
Image4.defaultProps = {
  src: '',
  children: 'Image',
  styleColor: '#000000',
};

const useStyles = makeStyles({
  container: {
    backgroundImage: ({ src }) => `url(${src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    position: 'relative',
    margin: 'auto',
    width: 250,
    height: 250,
    borderRadius: '50%',
    cursor: 'pointer',
    overflow: 'hidden',
    '& a': {
      color: 'inherit',
      textDecoration: 'none',
    },
    '& h2': {
      color: '#c55',
      padding: '50px 0',
      textAlign: 'center',
      textTransform: 'uppercase',
      fontSize: '1.8rem',
    },
    '&:hover .overlay': {
      opacity: 0.4,
      width: '100%',
      height: '100%',
    },
    '&:hover span': {
      opacity: 1,
      transform: 'scale(1)',
      transition: 'transform .5s ease, opacity 1.3s ease',
    },
    '& .overlay': {
      background: ({ styleColor }) => styleColor,
      opacity: 0,
      position: 'absolute',
      margin: 'auto',
      width: 0,
      height: 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      borderRadius: '50%',
      transition: '.4s ease',
    },
    '& span': {
      color: '#fff',
      textAlign: 'center',
      position: 'absolute',
      margin: 'auto',
      width: 200,
      height: 30,
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      opacity: 0,
      transform: 'scale(0)',
      transition: 'transform .5s ease, opacity .7s ease',
    },
  },
});
