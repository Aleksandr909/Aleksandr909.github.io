import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    color: ({ styleColor }) => styleColor,
    lineHeight: ({ lh }) => lh,
  },
});

const TypographyCustom = ({ children, styleColor, lh, ...props }) => {
  const classes = useStyles({ styleColor, lh });
  return (
    <Typography {...props} classes={{ root: classes.root }}>
      {children}
    </Typography>
  );
};

TypographyCustom.propTypes = {
  children: PropTypes.node,
  lh: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  styleColor: PropTypes.string,
};

TypographyCustom.defaultProps = {
  children: '',
  lh: 'auto',
  styleColor: PropTypes.string,
};

export default TypographyCustom;
