import React from 'react';
import { text, withKnobs, color, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Button5 } from '.';

storiesOf('nisnom|buttons')
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo({
      text: `
      [Demos](https://nisnom.com/veb-razrabotki/6-stilnyh-hoverov-dlya-knopok/)
  `,
      source: true,
    }),
  )
  .add('Button5', () => {
    return (
      <Button5 borderRadius={number('borderRadius', 6)} styleColor={color('styleColor', '#000000')}>
        {text('Children', 'Button')}
      </Button5>
    );
  });
