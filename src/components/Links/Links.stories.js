import React from 'react';
import Links from './Links.js';
import centered from '@storybook/addon-centered/react';
import * as style from '../../index.scss';

export const LinksStory = () => (
  <Links items={
    [
      {text: 'Send Flowers', link: 'www.google.co.uk'},
      {text: 'Funeral Procession', link: 'www.google.co.uk'},
      {text: 'Another Link', link: 'www.google.co.uk'},
    ]
  } />
);

export default {
  title: 'Links',
  component: LinksStory,
  decorators: [centered]
};