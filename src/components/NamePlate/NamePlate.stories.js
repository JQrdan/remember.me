import React from 'react';
import NamePlate from './NamePlate.js';
import { withKnobs, text, number } from "@storybook/addon-knobs";
import centered from '@storybook/addon-centered/react';
import * as style from '../../index.scss';

export const NamePlateStory = () => (
  <NamePlate name={text('Name', 'Jordan Tucker')} birthYear={number('Birth Year', 1997)} deathYear={number('Death Year', 2020)} />
);

export default {
  title: 'NamePlate',
  component: NamePlateStory,
  decorators: [withKnobs, centered]
};