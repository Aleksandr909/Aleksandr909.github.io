import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

const StyledCheckbox = ({ styleColor, ...props }) => {
  const classes = useStyles({ styleColor });
  return <Checkbox className={classes.root} color="default" {...props} />;
};

StyledCheckbox.propTypes = {
  styleColor: PropTypes.string,
};

StyledCheckbox.defaultProps = {
  styleColor: '#000000',
};

const useStyles = makeStyles({
  root: {
    color: ({ styleColor }) => styleColor,
    '&$checked': {
      color: ({ styleColor }) => styleColor,
    },
  },
});

export default StyledCheckbox;
