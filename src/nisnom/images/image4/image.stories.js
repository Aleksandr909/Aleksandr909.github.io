import React from 'react';
import { text, withKnobs, color } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Image4 } from '.';

storiesOf('nisnom|images')
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo({
      text: `
      [Demos](https://nisnom.com/veb-razrabotki/hover-effekt-dlya-kruglogo-elementa-izobrazheniya/)
  `,
      source: true,
    }),
  )
  .add('Image4', () => {
    return (
      <Image4
        src={text('src', 'https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg')}
        styleColor={color('styleColor', '#000000')}
      >
        {text('Children', 'Image')}
      </Image4>
    );
  });
