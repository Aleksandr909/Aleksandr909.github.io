import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PropTypes from 'prop-types';

export const Button13 = ({ children, styleColor }) => {
  const classes = useStyles({ styleColor });
  return (
    <div className={classes.btn}>
      <p>{children}</p>
      <div>
        <p>OK</p>
      </div>
    </div>
  );
};
Button13.propTypes = {
  children: PropTypes.node,
  styleColor: PropTypes.string,
};
Button13.defaultProps = {
  children: 'Button',
  styleColor: '#000000',
};

const useStyles = makeStyles({
  btn: {
    background: ({ styleColor }) => styleColor,
    margin: '20px auto',
    width: 200,
    height: 50,
    overflow: 'hidden',
    textAlign: 'center',
    transition: '.2s',
    cursor: 'pointer',
    borderRadius: 3,
    boxShadow: '0px 1px 2px rgba(0,0,0,.2)',
    '& > p': {
      color: 'white',
      transition: '.3s',
    },
    '& > div': {
      position: 'relative',
      width: 200,
      height: 100,
      marginTop: -100,
      paddingTop: 2,
      background: 'green',
      left: -250,
      transition: '.3s',
      '& > p': {
        marginTop: 63,
        marginRight: -130,
        color: '#FFF',
      },
    },
    '&:hover': {
      '& > p': {
        marginLeft: 65,
      },
      '& > div': {
        left: -130,
      },
    },
    '&:active': {
      boxShadow: '0px 5px 6px rgba(0,0,0,0.3)',
    },
  },
});
