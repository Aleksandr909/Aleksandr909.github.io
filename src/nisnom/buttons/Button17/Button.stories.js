import React from 'react';
import { text, withKnobs, color } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Button17 } from '.';

storiesOf('nisnom|buttons')
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo({
      text: `
      [Demos](https://nisnom.com/veb-razrabotki/prichudlivye-knopki-s-krasivymi-hover-effektami/)
  `,
      source: true,
    }),
  )
  .add('Button17', () => {
    return (
      <Button17 styleColor={color('styleColor', '#000000')}>{text('Children', 'Button')}</Button17>
    );
  });
