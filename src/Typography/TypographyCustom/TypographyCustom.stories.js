import React from 'react';
import { withKnobs, select, color, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import TypographyCustom from '.';

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
  .add('TypographyCustom', () => {
    const variantOptions = [
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'subtitle1',
      'subtitle2',
      'body1',
      'body2',
      'caption',
      'button',
      'overline',
      'srOnly',
      'inherit',
    ];
    return (
      <TypographyCustom
        styleColor={color('styleColor', '#000000')}
        variant={select('type', variantOptions, 'body1')}
        lh={text('lh', 'auto')}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum nibh et diam
        varius, fermentum ullamcorper orci egestas. Mauris aliquam mattis velit, non volutpat urna
        aliquam a. Proin id malesuada libero. Donec tempor quam quis consectetur tristique.
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Proin sagittis cursus faucibus. Mauris consequat, ante non auctor faucibus, turpis
        libero auctor ligula, vitae aliquam nisl metus in leo. In ex arcu, suscipit et leo sed,
        sagittis dapibus nulla. Vivamus feugiat quam at nibh dictum sagittis. Vivamus vitae odio sed
        nisi ornare venenatis at id orci. Etiam pharetra tincidunt turpis, in vehicula dolor semper
        eget. Nullam facilisis interdum augue, et faucibus libero. Curabitur ultricies luctus nisl,
        sit amet mollis velit. Vivamus a varius nisi. Donec hendrerit lorem est. Integer et eros vel
        felis dictum consectetur et quis quam. Integer metus enim, efficitur in dolor in, mattis
        cursus quam. Nullam eros urna, lobortis sit amet tellus vitae, placerat facilisis turpis. Ut
        fringilla lacinia velit ut placerat.
      </TypographyCustom>
    );
  });
