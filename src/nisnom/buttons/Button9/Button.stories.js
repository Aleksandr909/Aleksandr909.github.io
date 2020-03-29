import React from 'react';
import { text, withKnobs, color } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Button9 } from '.';

storiesOf('nisnom|buttons')
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo({
      text: `
      [Demos](https://nisnom.com/veb-razrabotki/css-knopka-s-animirovannym-blikom-pri-navedenii/)
  `,
      source: true,
    }),
  )
  .add('Button9', () => {
    return (
      <Button9 styleColor={color('styleColor', '#000000')}>{text('Children', 'Button')}</Button9>
    );
  });
