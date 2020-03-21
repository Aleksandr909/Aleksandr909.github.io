import React from 'react';
import { withKnobs, color, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import GlobalSetting from '.';

storiesOf('atoms|Typography')
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
  .add('GlobalSetting', () => {
    const variantOptions = {
      serif: 'serif',
      'sans-serif': 'sans-serif',
      monospace: 'monospace',
      cursive: 'cursive',
      fantasy: 'fantasy',
      'system-ui': 'system-ui',
      emoji: 'emoji',
      math: 'math',
      fangsong: 'fangsong',
    };

    return (
      <GlobalSetting
        styleColor={color('styleColor', '#000000')}
        fontFamily={select('fontFamily', variantOptions, 'serif')}
      />
    );
  });
