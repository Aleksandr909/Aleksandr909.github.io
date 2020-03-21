import React from 'react';
import { text, withKnobs, boolean, color } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import InputField from '.';
import { withInfo } from '@storybook/addon-info';

storiesOf('atoms|Inputs')
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo({
      text: `
      [API](https://material-ui.com/api/text-field/#textfield-api)

      [Demos](https://material-ui.com/components/text-fields/)
  `,
    }),
  )
  .add('InputField', () => {
    return (
      <InputField
        styleColor={color('styleColor', '#000000')}
        label={text('label', 'label')}
        disabled={boolean('disabled', false)}
        error={boolean('error', false)}
        helperText={text('helperText', 'helperText')}
      />
    );
  });
