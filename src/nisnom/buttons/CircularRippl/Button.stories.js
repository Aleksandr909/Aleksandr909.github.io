import React from 'react';
import { text, withKnobs, color, object, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { CircularRippl } from './';

storiesOf('nisnom|buttons')
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo({
      text: `
      [Demos](https://nisnom.com/veb-razrabotki/circular-ripple-hover-effect-on-button/)
  `,
    }),
  )
  .add('CircularRippl', () => {
    return (
      <CircularRippl
        onClick={action('Кнопка')}
        styleColor={color('styleColor', '#000000')}
        style={object('style', { color: 'white' })}
        borderRadius={number('borderRadius', 6)}
      >
        {text('Children', 'Button')}
      </CircularRippl>
    );
  });
