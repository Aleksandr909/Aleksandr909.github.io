import React from 'react';
import { text, withKnobs, boolean, color } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import InputWithMask from '.';
import { withInfo } from '@storybook/addon-info';

storiesOf('atoms|Inputs')
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo({
      text: `
      [API](https://material-ui.com/api/text-field/#textfield-api)

      [DOC](https://github.com/sanniassin/react-input-mask)

      [Demos](https://material-ui.com/components/text-fields/)
  `,
    }),
  )
  .add('InputWithMask', () => {
    return (
      <InputWithMask
        styleColor={color('styleColor', '#000000')}
        label={text('label', 'label')}
        disabled={boolean('disabled', false)}
        error={boolean('error', false)}
        helperText={text('helperText', 'helperText')}
        mask={text('mask', '99.99.9999')}
      />
    );
  });
