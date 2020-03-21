import React from 'react';
import { withKnobs, boolean, color } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Checkbox from '.';
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
  .add('Checkbox', () => {
    return (
      <Checkbox styleColor={color('styleColor', '#000000')} checked={boolean('checked', false)} />
    );
  });
