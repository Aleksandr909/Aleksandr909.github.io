import React from 'react';
import { text, withKnobs, color } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Button16 } from '.';

storiesOf('nisnom|buttons')
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo({
      text: `
      [Demos](https://nisnom.com/veb-razrabotki/krasivye-effekty-pri-navedenii-s-pomoshhyu-box-shadow/)
  `,
      source: true,
    }),
  )
  .add('Button16', () => {
    return (
      <Button16 styleColor={color('styleColor', '#000000')}>{text('Children', 'Button')}</Button16>
    );
  });
