import React from 'react';
import Header from './Header.js';
import { withKnobs, text } from "@storybook/addon-knobs";
import * as style from '../../scss/index.scss';

export const HeaderStory = () => (
  <Header name={text('Name', 'JordanTucker')} />
);

export default {
  title: 'Header',
  component: HeaderStory,
  decorators: [withKnobs]
};