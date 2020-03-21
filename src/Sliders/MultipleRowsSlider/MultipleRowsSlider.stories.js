import React from 'react';
import { withKnobs, color } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import MultipleRowsSlider from '.';

storiesOf('atoms|Sliders')
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo({
      text: `
      [API](https://material-ui.com/ru/api/typography/)

      [Глобальная настройка](https://material-ui.com/ru/customization/globals/#css)

      [Оформление текста](https://material-ui.com/ru/customization/typography/#typography-html-font-size)

      [Demos](https://material-ui.com/ru/components/typography/#typography)
  `,
    }),
  )
  .add('MultipleRowsSlider', () => {
    return <MultipleRowsSlider dotsColor={color('dotsColor', '#000000')} />;
  });
