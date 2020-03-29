import React from 'react';
import { text, withKnobs, color } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Button8 } from '.';

storiesOf('nisnom|buttons')
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo({
      text: `
      [Demos](https://nisnom.com/veb-razrabotki/knopka-s-hover-effektom-dlya-border-a-i-teksta/)
  `,
      source: true,
    }),
  )
  .add('Button8', () => {
    return (
      <Button8 styleColor={color('styleColor', '#000000')}>{text('Children', 'Button')}</Button8>
    );
  });
