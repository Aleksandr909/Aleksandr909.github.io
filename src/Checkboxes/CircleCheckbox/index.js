import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import CheckIcon from '@material-ui/icons/Check';

const CircleCheckbox = ({ styleColor, size, ...props }) => {
  const classes = useStyles({ styleColor, size });

  return (
    <Checkbox
      className={classes.root}
      color="default"
      checkedIcon={<CheckIcon className={`${classes.icon} ${classes.checkedIcon}`} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
};

CircleCheckbox.propTypes = {
  checked: PropTypes.bool,
  setChecked: PropTypes.func,
};

CircleCheckbox.defaultProps = {
  checked: true,
  setChecked: () => {},
};

const useStyles = makeStyles({
  root: {
    color: ({ styleColor }) => styleColor,
    '&$checked': {
      color: ({ styleColor }) => styleColor,
    },
  },
  icon: {
    width: ({ size }) => size,
    height: ({ size }) => size,
    border: ({ styleColor }) => `1px solid ${styleColor}`,
    borderRadius: '50%',
  },
  checkedIcon: {
    width: ({ size }) => size,
    height: ({ size }) => size,
    backgroundColor: ({ styleColor }) => styleColor,
    color: '#fff',
  },
});

export default CircleCheckbox;
