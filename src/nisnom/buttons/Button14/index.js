import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PropTypes from 'prop-types';
import { ArrowRight } from '@material-ui/icons';

export const Button14 = ({ children, styleColor }) => {
  const classes = useStyles({ styleColor });
  return (
    <>
      <div className={`${classes.btn} ${classes.type1}`}>
        <span className="txt">{children}</span>
        <span className="round">
          <ArrowRight />
        </span>
      </div>
      <div className={`${classes.btn} ${classes.type2}`}>
        <span className="txt">{children}</span>
        <span className="round">
          <ArrowRight />
        </span>
      </div>
      <div className={`${classes.btn} ${classes.type3}`}>
        <span className="txt">{children}</span>
        <span className="round">
          <ArrowRight />
        </span>
      </div>
    </>
  );
};
Button14.propTypes = {
  children: PropTypes.node,
  styleColor: PropTypes.string,
};
Button14.defaultProps = {
  children: 'Button',
  styleColor: '#000000',
};

const useStyles = makeStyles({
  btn: {
    margin: 20,
    backgroundColor: ({ styleColor }) => styleColor,
    textDecoration: 'none',
    borderRadius: 30,
    padding: '12px 53px 12px 23px',
    color: '#fff',
    textTransform: 'uppercase',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    position: 'relative',
    transition: 'all .3s ease',
    display: 'inline-block',
    cursor: 'pointer',
    '& span': {
      position: 'relative',
      zIndex: 3,
    },
    '& .round': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff60',
      borderRadius: '50%',
      width: 38,
      height: 38,
      position: 'absolute',
      right: 3,
      top: 3,
      transition: 'all .3s ease-out',
      zIndex: 2,
      '& svg': {
        position: 'absolute',
        transition: 'all .3s ease',
      },
    },
    '& .txt': {
      fontSize: 14,
      lineHeight: 1.45,
    },
  },
  type1: {
    '&:hover': {
      paddingLeft: 48,
      paddingRight: 28,
      '& .round': {
        width: 'calc(100% - 6px)',
        borderRadius: 30,
        '& svg': {
          left: '12%',
        },
      },
    },
  },
  type2: {
    '& svg': {
      left: '25%',
      transition: 'all .3s ease-out',
    },
    '&:hover': {
      '& .round': {
        background: 'none',
        '& svg': {
          left: '50%',
        },
      },
    },
  },
  type3: {
    overflow: 'hidden',
    '&:after': {
      backgroundColor: '#ffffff60',
      content: '""',
      borderRadius: '50%',
      width: 37,
      height: 38,
      position: 'absolute',
      right: 3,
      top: 3,
      transition: 'all .3s ease-out',
    },
    '&:hover': {
      '&:after': {
        right: '100%',
        width: '50%',
      },
      '& svg': {
        marginLeft: 4,
      },
    },
    '& .round': {
      background: 'transparent',
    },
  },
});
