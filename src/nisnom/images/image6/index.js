import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PropTypes from 'prop-types';

export const Image6 = ({ children, src, styleColor }) => {
  const classes = useStyles({ styleColor, src });
  return (
    <div className={classes.contentItem}>
      <div className="overlay" />
      <div className="corner-overlay-content">Info</div>
      <div className="overlay-content">
        <h2>{children}</h2>
        <p>
          Logo for a screen printing company. They wanted a detachable/recognizable brand that didnt
          need the name of the company.
        </p>
      </div>
    </div>
  );
};
Image6.propTypes = {
  src: PropTypes.string,
  children: PropTypes.string,
  styleColor: PropTypes.string,
};
Image6.defaultProps = {
  src: '',
  children: 'Image',
  styleColor: '#000000',
};

const useStyles = makeStyles({
  contentItem: {
    backgroundImage: ({ src }) => `url(${src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backfaceVisibility: 'hidden',
    height: 300,
    margin: '20px auto',
    overflow: 'hidden',
    position: 'relative',
    width: 400,
    '& .overlay': {
      borderBottom: ({ styleColor }) => `100px solid ${styleColor}`,
      borderLeft: '100px solid transparent',
      bottom: 0,
      height: 0,
      opacity: 0.95,
      position: 'absolute',
      right: 0,
      textIndent: -9999,
      transition: 'all .5s ease-out',
      width: 0,
    },
    '&:hover .overlay': {
      borderBottom: ({ styleColor }) => `800px solid ${styleColor}`, //size must be double container
      borderLeft: '800px solid transparent', //size must be double container
      transition: 'all .5s ease-out',
    },
    '& .corner-overlay-content': {
      bottom: 15,
      color: '#333',
      position: 'absolute',
      right: 15,
      transition: 'all .5s ease-out',
    },
    '&:hover .corner-overlay-content': {
      opacity: 0,
      transition: 'all .5s ease-out',
    },
    '& .overlay-content': {
      bottom: 0,
      color: '#333',
      left: 0,
      opacity: 0,
      padding: 30,
      position: 'absolute',
      right: 0,
      top: 0,
      transition: 'all .3s ease-out',
      '& h2': {
        borderBottom: '1px solid #333',
        padding: '0 0 12px',
      },
    },
    '&:hover .overlay-content': {
      opacity: 1,
      transition: 'all .3s ease-out',
      transitionDelay: '.3s',
    },
  },
});
