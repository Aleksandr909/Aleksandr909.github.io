import React from 'react';
import { text, withKnobs, color } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Button11 } from '.';

storiesOf('nisnom|buttons')
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo({
      text: `
      [Demos](https://nisnom.com/veb-razrabotki/knopka-s-krasivym-effektom-i-gradientnym-svecheniem-pri-navedenii/)
  `,
      source: true,
    }),
  )
  .add('Button11', () => {
    return (
      <Button11 styleColor={color('styleColor', '#000000')}>{text('Children', 'Button')}</Button11>
    );
  });
