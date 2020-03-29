import React from 'react';
import { text, withKnobs, color } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Button7 } from '.';

storiesOf('nisnom|buttons')
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo({
      text: `
      [Demos](https://nisnom.com/veb-razrabotki/5-stilnyh-effektov-dlya-knopok-sajta/)
  `,
      source: true,
    }),
  )
  .add('Button7', () => {
    return (
      <Button7 styleColor={color('styleColor', '#000000')}>{text('Children', 'Button')}</Button7>
    );
  });
