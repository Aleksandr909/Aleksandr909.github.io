import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const InputField = ({ error, helperText, maxLength, styleColor, ...props }) => {
  const classes = useStyles({ styleColor });
  return (
    <TextField
      className={classes.root}
      variant="outlined"
      {...props}
      error={error}
      helperText={error ? helperText : ''}
      inputProps={{
        maxLength,
      }}
    />
  );
};

InputField.propTypes = {
  error: PropTypes.bool,
  helperText: PropTypes.string,
  maxLength: PropTypes.number,
  styleColor: PropTypes.string,
};

InputField.defaultProps = {
  error: false,
  helperText: '',
  maxLength: 1000,
  styleColor: '#000000',
};

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: 12,
    marginBottom: 12,
    '& .MuiOutlinedInput-root': {
      borderRadius: 50,
      '& input': {
        paddingLeft: 24.5,
      },
      '&.Mui-focused > fieldset': { border: ({ styleColor }) => `2px solid ${styleColor}` },
    },
    '& .Mui-focused.MuiInputLabel-root': {
      color: ({ styleColor }) => styleColor,
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: ({ styleColor }) => `${styleColor}`,
    },
    '& :not(.Mui-disabled):hover .MuiOutlinedInput-notchedOutline': {
      borderColor: ({ styleColor }) => styleColor,
      borderStyle: 'ridge',
    },
    '& label': {
      marginLeft: 10,
      borderRadius: 10,
    },
    '& legend': {
      marginLeft: 10,
      borderRadius: 10,
    },
    '& .MuiFormHelperText-root.Mui-error': {
      marginLeft: 24,
    },
  },
});

export default InputField;
