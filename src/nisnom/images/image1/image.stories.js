import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Image1 } from '.';

storiesOf('nisnom|images')
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo({
      text: `
      [Demos](https://nisnom.com/veb-razrabotki/27-potryasayushhih-hover-effektov-dlya-izobrazhenij/)
  `,
      source: true,
    }),
  )
  .add('Image1', () => {
    return (
      <Image1
        src={text('src', 'https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg')}
        styleColor={text('styleColor', '#000000')}
      >
        {text('Children', 'Button')}
      </Image1>
    );
  });
