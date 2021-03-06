import React from 'react';
import { text, withKnobs, color, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Button3 } from './';

storiesOf('nisnom|buttons')
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo({
      text: `
      [Demos](https://nisnom.com/veb-razrabotki/ocherednaya-portsiya-stilnyh-css-effektov-pri-navedenii-na-knopki/)
  `,
      source: true,
    }),
  )
  .add('Button3', () => {
    return (
      <Button3 borderRadius={number('borderRadius', 6)} styleColor={color('styleColor', '#000000')}>
        {text('Children', 'Button')}
      </Button3>
    );
  });
