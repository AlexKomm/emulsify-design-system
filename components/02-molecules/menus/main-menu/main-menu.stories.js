import React from 'react';
import { storiesOf } from '@storybook/react';
import { useEffect } from '@storybook/client-api';

import menu from './main-menu.twig';

import mainMenu from './main-menu';

const mainMenuTwig = (
  menu({
    menu_items: {
      1: {
        title: 'Menu Item 1',
        url: '#',
        below: {
          1: {
            title: 'Menu Item 1 Sub 1',
            url: '#',
          },
          2: {
            title: 'Menu Item 1 Sub 2',
            url: '#',
            below: {
              1: {
                title: 'Menu Item 1 Sub Sub 1',
                url: '#',
              },
              2: {
                title: 'Menu Item 1 Sub Sub 2',
                url: '#',
              },
            },
          },
          3: {
            title: 'Menu Item 1 Sub 3',
            url: '#',
          },
          4: {
            title: 'Menu Item 1 Sub 4',
            url: '#',
          },
        },
      },
      2: {
        title: 'Menu Item 2',
        url: '#',
        below: {
          1: {
            title: 'Menu Item 2 Sub 1',
            url: '#',
          },
          2: {
            title: 'Menu Item 2 Sub 2',
            url: '#',
          },
          3: {
            title: 'Menu Item 2 Sub 3',
            url: '#',
          },
        },
      },
      3: {
        title: 'Menu Item 3',
        url: '#',
        below: {
          1: {
            title: 'Menu Item 3 Sub 1',
            url: '#',
          },
          2: {
            title: 'Menu Item 3 Sub 2',
            url: '#',
          },
          3: {
            title: 'Menu Item 3 Sub 3',
            url: '#',
          },
          4: {
            title: 'Menu Item 3 Sub 4',
            url: '#',
          },
        },
      },
    },
  })
);

/**
 * Add storybook definition for Main Menus.
 */
storiesOf('Molecules/Menus', module)
  .add('Main', () => {
    useEffect(() => {
      mainMenu();
    }, []);
    return <div dangerouslySetInnerHTML={{ __html: mainMenuTwig }} />;
  });
