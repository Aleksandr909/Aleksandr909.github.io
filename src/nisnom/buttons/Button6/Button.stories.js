import React from 'react';
import { withKnobs, color, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Button6 } from '.';

storiesOf('nisnom|buttons')
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo({
      text: `
      [Demos](https://nisnom.com/veb-razrabotki/stylized-buttons-5-stilnyh-hover-effektov-dlya-knopok/)
  `,
      source: true,
    }),
  )
  .add('Button6', () => {
    return (
      <Button6
        borderRadius={number('borderRadius', 6)}
        styleColor={color('styleColor', '#000000')}
      />
    );
  });
