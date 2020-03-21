import React from 'react';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const InputWithMask = ({ error, helperText, maxLength, styleColor, disabled, ...props }) => {
  const classes = useStyles({ styleColor });
  return (
    <InputMask {...props} disabled={disabled}>
      {inputProps => (
        <TextField
          {...inputProps}
          className={classes.root}
          variant="outlined"
          error={error}
          helperText={error ? helperText : ''}
          disabled={disabled}
          inputProps={{
            maxLength,
          }}
        />
      )}
    </InputMask>
  );
};

InputWithMask.propTypes = {
  error: PropTypes.bool,
  helperText: PropTypes.string,
  maxLength: PropTypes.number,
  styleColor: PropTypes.string,
  disabled: PropTypes.bool,
};

InputWithMask.defaultProps = {
  error: false,
  helperText: '',
  maxLength: 1000,
  styleColor: '#000000',
  disabled: false,
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

export default InputWithMask;
