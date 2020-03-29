import React from 'react';
import { text, withKnobs, color, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ButtonWithCircle } from './';

storiesOf('nisnom|buttons')
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo({
      text: `
      [Demos](https://nisnom.com/veb-razrabotki/button-hover-by-katherine-kato/)

      \`\`\`JSX
      import React from 'react';
      import makeStyles from '@material-ui/core/styles/makeStyles';
      import PropTypes from 'prop-types';
      import { Typography } from '@material-ui/core';
      
      export const ButtonWithCircle = ({ children, styleColor, borderRadius, ...props }) => {
        const classes = useStyles({ styleColor, borderRadius });
      
        return (
          <button className={classes.button}>
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <Typography className="button-text">{children}</Typography>
          </button>
        );
      };
      ButtonWithCircle.propTypes = {
        children: PropTypes.node,
        borderRadius: PropTypes.number,
        styleColor: PropTypes.string,
      };
      
      ButtonWithCircle.defaultProps = {
        children: 'Button',
        borderRadius: 6,
        styleColor: '#000000',
      };
      
      const useStyles = makeStyles({
        button: {
          position: 'relative',
          display: 'inline-block',
          cursor: 'pointer',
          outline: 'none',
          border: 0,
          verticalAlign: 'middle',
          textDecoration: 'none',
          background: 'transparent',
          padding: 0,
          fontSize: 'inherit',
          fontFamily: 'inherit',
          width: '12rem',
          height: 'auto',
          '& .circle': {
            transition: 'all 0.45s cubic-bezier(0.65,0,.076,1)',
            position: 'relative',
            display: 'block',
            margin: 0,
            width: '3rem',
            height: '3rem',
            background: ({ styleColor }) => styleColor,
            borderRadius: '1.625rem',
            '& .icon': {
              transition: 'all 0.45s cubic-bezier(0.65,0,.076,1)',
              position: 'absolute',
              top: 0,
              bottom: 0,
              margin: 'auto',
              background: '$fff',
              '&.arrow': {
                transition: 'all 0.45s cubic-bezier(0.65,0,.076,1)',
                left: '0.625rem',
                width: '1.125rem',
                height: '0.125rem',
                background: 'none',
                '&::before': {
                  position: 'absolute',
                  content: '""',
                  top: '-0.25rem',
                  right: '0.0625rem',
                  width: '0.625rem',
                  height: '0.625rem',
                  borderTop: '0.125rem solid #fff',
                  borderRight: '0.125rem solid #fff',
                  transform: 'rotate(45deg)',
                },
              },
            },
          },
          '& .button-text': {
            transition: 'all 0.45s cubic-bezier(0.65,0,.076,1)',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            padding: '0.75rem 0',
            margin: '0 0 0 1.85rem',
            color: '#000',
            fontWeight: 700,
            lineHeight: 1.5,
            textAlign: 'center',
            textTransform: 'uppercase',
          },
          '&:hover': {
            '& .circle': {
              width: '100%',
              '.icon': {
                '&.arrow': {
                  background: '#fff',
                  transform: 'translate(1rem, 0)',
                },
              },
            },
            '& .button-text': {
              color: '#fff',
            },
          },
        },
      });
      \`\`\`
  `,
      source: true,
    }),
  )
  .add('ButtonWithCircle', () => {
    return (
      <ButtonWithCircle
        onClick={action('Кнопка')}
        styleColor={color('styleColor', '#000000')}
        style={object('style', { color: 'white' })}
      >
        {text('Children', 'Button')}
      </ButtonWithCircle>
    );
  });
