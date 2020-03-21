import React from 'react';
import { text, withKnobs, boolean, color, select, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { RoundedButton } from '.';

storiesOf('atoms|RoundedButton')
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo({
      text: `
      [API](https://material-ui.com/api/button/#button-api)

      [Demos](https://material-ui.com/components/buttons/)
  `,
    }),
  )
  .add('Button', () => {
    const variantOptions = { contained: 'contained', text: 'text', outlined: 'outlined' };
    return (
      <RoundedButton
        onClick={action('Кнопка')}
        styleColor={color('styleColor', '#000000')}
        disabled={boolean('disable', true)}
        variant={select('variant', variantOptions)}
        style={object('style', { color: 'white' })}
      >
        {text('Children', 'Button')}
      </RoundedButton>
    );
  });
