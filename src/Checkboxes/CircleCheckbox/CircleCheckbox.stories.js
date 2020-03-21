import React from 'react';
import { withKnobs, boolean, color, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import CircleCheckbox from '.';
import { withInfo } from '@storybook/addon-info';

storiesOf('atoms|Checkboxes')
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo({
      text: `
      [API](https://material-ui.com/api/checkbox/)

      [Demos](https://material-ui.com/components/checkboxes/)
  `,
    }),
  )
  .add('CircleCheckbox', () => {
    const options = {
      range: true,
      min: 1,
      max: 90,
      step: 1,
    };
    return (
      <CircleCheckbox
        styleColor={color('styleColor', '#000000')}
        checked={boolean('checked', false)}
        size={number('size', 24, options)}
      />
    );
  });
