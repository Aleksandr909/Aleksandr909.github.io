import React from 'react';
import { text, withKnobs, color } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Button10 } from '.';

storiesOf('nisnom|buttons')
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo({
      text: `
      [Demos](https://nisnom.com/veb-razrabotki/knopka-na-css3-s-prostym-effektom-pri-navedenii/)
  `,
      source: true,
    }),
  )
  .add('Button10', () => {
    return (
      <Button10 styleColor={color('styleColor', '#000000')}>{text('Children', 'Button')}</Button10>
    );
  });
