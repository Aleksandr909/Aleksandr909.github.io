import React from 'react';
import { text, withKnobs, color } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Button13 } from '.';

storiesOf('nisnom|buttons')
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo({
      text: `
      [Demos](https://nisnom.com/veb-razrabotki/animirovannaya-knopka-s-gradientom/)
  `,
      source: true,
    }),
  )
  .add('Button13', () => {
    return (
      <Button13 styleColor={color('styleColor', '#000000')}>{text('Children', 'Button')}</Button13>
    );
  });
