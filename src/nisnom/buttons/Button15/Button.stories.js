import React from 'react';
import { text, withKnobs, color } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Button15 } from '.';

storiesOf('nisnom|buttons')
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo({
      text: `
      [Demos](https://nisnom.com/veb-razrabotki/10-prostyh-hover-effektov-dlya-knopok/)
  `,
      source: true,
    }),
  )
  .add('Button15', () => {
    return (
      <Button15 styleColor={color('styleColor', '#000000')}>{text('Children', 'Button')}</Button15>
    );
  });
