import React from 'react';
import { storiesOf } from '@storybook/react';

import { globalData } from '../../../.storybook/globalData';

import grid from './grid.twig';

const Grid = (
  grid({
    page_layout_modifier: globalData.page_layout_modifier,
    grid_label: 'Default',
    items: {
      1: '',
      2: '',
      3: '',
    },
  })
);

const cardGrid = (
  grid({
    page_layout_modifier: globalData.page_layout_modifier,
    grid_label: 'Card Grid',
    grid_type: 'card',
    item_type: 'card',
    items: {
      1: {
        card__image__src: 'https://placeimg.com/480/300/people',
        card__image__alt: 'People',
        card__image__output_image_tag: true,
        card__heading: 'Super Awesome Card',
        card__link__url: '#',
        card__link__text: 'Click here',
        card__subheading: 'Person of Interest',
        card__body: 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat.',
      },
      2: {
        card__image__src: 'https://placeimg.com/480/300/nature',
        card__image__alt: 'Nature',
        card__image__output_image_tag: true,
        card__heading: 'Card Number Two',
        card__subheading: 'Some pretty sweet nature',
        card__body: 'Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo.',
      },
      3: {
        card__image__src: 'https://placeimg.com/480/300/animals',
        card__image__alt: 'Animals',
        card__image__output_image_tag: true,
        card__heading: 'The Last Card Heading',
        card__subheading: 'Awesome animals',
        card__body: 'Tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat.. Nulla quis lorem ut libero malesuada feugiat.',
      },
    },
  })
);

const ctaGrid = (
  grid({
    page_layout_modifier: globalData.page_layout_modifier,
    grid_label: 'CTA Grid',
    item_type: 'cta',
    items: {
      1: {
        cta__heading: 'This is an awesome CTA',
        cta__button_text: 'Click me!',
      },
      2: {
        cta__heading: 'This is an even better CTA!!',
        cta__button_text: 'No, click me!',
      },
      3: {
        cta__heading: 'This is a boring CTA',
        cta__button_text: 'Click me, I guess...',
      },
    },
  })
);

/**
 * Add storybook definition for Grids.
 */
storiesOf('Organisms/Grids', module)
  .add('Default', () => (
    <div dangerouslySetInnerHTML={{ __html: Grid }} />
  ))
  .add('Card Grid', () => (
    <div dangerouslySetInnerHTML={{ __html: cardGrid }} />
  ))
  .add('CTA Grid', () => (
    <div dangerouslySetInnerHTML={{ __html: ctaGrid }} />
  ));
