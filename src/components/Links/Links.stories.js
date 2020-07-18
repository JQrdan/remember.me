import React from 'react';
import Links from './Links.js';
import centered from '@storybook/addon-centered/react';
import * as style from '../../scss/index.scss';

export const LinksStory = () => (
  <Links items={
    [
      {text: 'Send Flowers', link: 'https://www.google.co.uk'},
      {text: 'Funeral Procession', link: 'https://www.google.co.uk'},
      {text: 'Another Link', link: 'https://www.google.co.uk'},
    ]
  } />
);

export default {
  title: 'Links',
  component: LinksStory,
  decorators: [centered]
};