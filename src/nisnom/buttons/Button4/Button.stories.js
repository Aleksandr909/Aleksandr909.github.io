import React from 'react';
import { text, withKnobs, color, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Button4 } from '.';

storiesOf('nisnom|buttons')
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo({
      text: `
      [Demos](https://nisnom.com/veb-razrabotki/stylized-buttons-5-stilnyh-hover-effektov-dlya-knopok/)
  `,
      source: true,
    }),
  )
  .add('Button4', () => {
    return (
      <Button4 borderRadius={number('borderRadius', 6)} styleColor={color('styleColor', '#000000')}>
        {text('Children', 'Button')}
      </Button4>
    );
  });
