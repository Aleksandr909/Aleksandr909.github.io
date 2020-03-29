import React from 'react';
import { text, withKnobs, color } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Button14 } from '.';

storiesOf('nisnom|buttons')
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo({
      text: `
      [Demos](https://nisnom.com/veb-razrabotki/3-knopki-s-krasivymi-hover-effektami-i-ikonkami/)
  `,
      source: true,
    }),
  )
  .add('Button14', () => {
    return (
      <Button14 styleColor={color('styleColor', '#000000')}>{text('Children', 'Button')}</Button14>
    );
  });
