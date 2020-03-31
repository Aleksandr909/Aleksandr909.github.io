import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PropTypes from 'prop-types';

export const Image5 = ({ children, src, styleColor }) => {
  const classes = useStyles({ styleColor, src });
  return (
    <div className={classes.box}>
      <div className="hover-effect">
        <a href="#" className="hover-text">
          <h1>{children}</h1>
          <p>Descriptive stuff goes here.</p>
        </a>
      </div>
    </div>
  );
};
Image5.propTypes = {
  src: PropTypes.string,
  children: PropTypes.string,
  styleColor: PropTypes.string,
};
Image5.defaultProps = {
  src: '',
  children: 'Image',
  styleColor: '#000000',
};

const useStyles = makeStyles({
  box: {
    position: 'relative',
    overflow: 'hidden',
    height: 300,
    width: 500,
    background: ({ src }) => `url(${src}) center center no-repeat`,
    backgroundSize: 'cover',
    cursor: 'pointer',
    '&:hover .hover-effect': {
      opacity: 1,
    },
    '&:hover .hover-text': {
      right: 0,
    },
    '& .hover-effect': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(5, 8, 31, 0.62)',
      transition: 'all 0.3s ease-in-out',
      opacity: 0,
    },
    '& .hover-text': {
      position: 'absolute',
      right: '-100%',
      bottom: 0,
      display: 'block',
      maxWidth: '100%',
      padding: '40px 45px',
      color: '#e2e2e2',
      textDecoration: 'none',
      textAlign: 'right',
      lineHeight: '1.5em',
      fontSize: 15,
      fontFamily: 'Proxima Nova',
      fontWeight: 300,
      textTransform: 'uppercase',
      letterSpacing: 5,
      transition: 'all 0.5s ease-in-out',
    },
  },
});
