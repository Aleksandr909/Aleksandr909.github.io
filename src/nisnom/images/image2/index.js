import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PropTypes from 'prop-types';

export const Image2 = ({ src, styleColor }) => {
  const classes = useStyles({ styleColor, src });
  return (
    <>
      <div className={classes.image_01}>
        <div className="image_01_hover">
          <p1>THE</p1>
        </div>
        <div className="image_01_hover02">
          <p1>
            <strong>LEAF</strong>
          </p1>
        </div>
        <div className="image_01_hover03" />
      </div>
      <div className={classes.image_02}>
        <div className="image_02_hover" />
        <div className="image_02_hover02" />
        <div className="image_02_hover03" />
        <div id="hearticon" />
        <div id="usericon" />
        <div id="shareicon" />
        <div id="share">
          <strong>T</strong>WITTER<strong> F</strong>ACEBOOK
        </div>
        <div id="infoicon" />
        <div id="info">
          THE<strong>WOOD</strong>
        </div>
      </div>
    </>
  );
};
Image2.propTypes = {
  src: PropTypes.string,
  styleColor: PropTypes.string,
};
Image2.defaultProps = {
  src: '',
  styleColor: '#000000',
};

const useStyles = makeStyles({
  image_01: {
    backgroundImage: ({ src }) => `url(${src})`,
    backgroundSize: 470,
    width: 450,
    height: 310,
    margin: 'auto',
    textAlign: 'center',
    transition: 'all 0.4s',
    position: 'relative',
    top: 40,
    '&:hover': {
      opacity: 1,
      backgroundSize: 530,
      '& .image_01_hover03': {
        opacity: 0.2,
      },
      '& .image_01_hover': {
        opacity: 1,
        top: 120,
        left: -40,
      },
      '& .image_01_hover02': {
        top: 66,
        left: 40,
        opacity: 1,
      },
    },
    '& .image_01_hover': {
      width: 77,
      height: 50,
      backgroundColor: 'transparent',
      borderLeft: '2px solid #fff',
      borderTop: '2px solid #fff',
      borderBottom: '2px solid #fff',
      borderRight: 0,
      position: 'relative',
      top: 120,
      left: -170,
      margin: 'auto',
      opacity: 0,
      transition: 'all 0.4s',
      color: '#fff',
      fontFamily: `'Raleway', sans-serif`,
      fontSize: 35,
      fontWeight: 200,
      textAlign: 'center',
    },
    '& .image_01_hover02': {
      width: 110,
      height: 50,
      backgroundColor: 'transparent',
      borderLeft: 0,
      borderTop: '2px solid #fff',
      borderBottom: '2px solid #fff',
      borderRight: '2px solid #fff',
      position: 'relative',
      top: 66,
      left: 160,
      margin: 'auto',
      opacity: 0,
      transition: 'all 0.4s',
      color: '#fff',
      fontFamily: `'Raleway', sans-serif`,
      fontSize: 35,
      fontWeight: 200,
      textAlign: 'center',
    },
    '& .image_01_hover03': {
      backgroundColor: ({ styleColor }) => styleColor,
      width: 450,
      height: 310,
      margin: 'auto',
      textAlign: 'center',
      transition: 'all 0.4s',
      position: 'relative',
      top: -108,
      opacity: 0,
    },
  },
  image_02: {
    backgroundImage: ({ src }) => `url(${src})`,
    backgroundSize: 470,
    backgroundPosition: 'center',
    width: 450,
    height: 310,
    margin: 'auto',
    textAlign: 'center',
    transition: 'all 0.4s',
    position: 'relative',
    top: 110,
    '&:hover': {
      opacity: 1,
      backgroundSize: 680,
      '& .image_02_hover03': {
        opacity: 0.4,
      },
      '& .image_02_hover': {
        opacity: 1,
        left: 0,
      },
      '& #hearticon': {
        opacity: 1,
        left: 410,
      },
      '& #usericon': {
        opacity: 1,
        left: 410,
      },
      '& #shareicon': {
        opacity: 1,
        left: 410,
      },
      '& #infoicon': {
        opacity: 1,
        left: 410,
      },
    },
    '& .image_02_hover03': {
      backgroundColor: ({ styleColor }) => styleColor,
      width: 400,
      height: 310,
      textAlign: 'center',
      transition: 'all 0.4s',
      position: 'relative',
      top: -310,
      opacity: 0,
    },
    '& .image_02_hover': {
      backgroundColor: 'transparent',
      width: 400,
      height: 310,
      borderRight: '50px solid #fff',
      opacity: 0,
      position: 'relative',
      left: 30,
      transition: 'all 0.4s',
    },
    '& #hearticon': {
      background: `url("https://cdn4.iconfinder.com/data/icons/e-commerce-icon-set/48/Like-48.png")`,
      width: 30,
      height: 30,
      backgroundSize: 'cover',
      position: 'relative',
      top: -370,
      left: 440,
      opacity: 0,
      transition: 'all 0.4s',
    },
    '& #usericon': {
      background: `url("https://cdn4.iconfinder.com/data/icons/e-commerce-icon-set/48/Username-48.png")`,
      width: 30,
      height: 30,
      backgroundSize: 'cover',
      position: 'relative',
      top: -450,
      left: 440,
      opacity: 0,
      transition: 'all 0.4s',
    },
    '& #shareicon': {
      background: `url("https://cdn4.iconfinder.com/data/icons/e-commerce-icon-set/48/Share-48.png")`,
      width: 30,
      height: 30,
      backgroundSize: 'cover',
      position: 'relative',
      top: -530,
      left: 440,
      opacity: 0,
      transition: 'all 0.4s',
    },
    '& #shareicon:hover': {
      background: `url("https://cdn4.iconfinder.com/data/icons/e-commerce-icon-set/48/Share_2-48.png")`,
      backgroundSize: 'cover',
    },
    '& #shareicon:hover+ #share': {
      opacity: 1,
    },
    '& #share': {
      backgroundColor: ({ styleColor }) => styleColor,
      width: 220,
      height: 22,
      position: 'relative',
      top: -565,
      left: 150,
      borderRadius: 20,
      color: '#fff',
      fontFamily: `'Raleway', sans-serif`,
      fontSize: 20,
      fontWeight: 200,
      padding: 10,
      transition: 'all 0.4s',
      opacity: 0,
    },
    '& #infoicon': {
      background: `url("https://cdn4.iconfinder.com/data/icons/e-commerce-icon-set/48/Info-48.png")`,
      width: 30,
      height: 30,
      backgroundSize: 'cover',
      position: 'relative',
      top: -650,
      left: 440,
      opacity: 0,
      transition: 'all 0.4s',
    },
    '& #infoicon:hover': {
      background: `url("https://cdn4.iconfinder.com/data/icons/e-commerce-icon-set/48/Info_2-48.png")`,
      width: 30,
      height: 30,
      backgroundSize: 'cover',
    },
    '& #infoicon:hover+ #info': {
      display: 'block',
    },
    '& #info': {
      backgroundColor: ({ styleColor }) => styleColor,
      width: 120,
      height: 22,
      position: 'relative',
      top: -686,
      left: 250,
      borderRadius: 20,
      color: '#fff',
      fontFamily: `'Raleway', sans-serif`,
      fontSize: 20,
      fontWeight: 200,
      padding: 10,
      display: 'none',
      transition: 'all 0.4s',
    },
  },
});
