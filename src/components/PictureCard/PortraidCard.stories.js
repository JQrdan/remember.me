import React from 'react';
import PictureCard from './PictureCard.js';
import { withKnobs, text, number } from "@storybook/addon-knobs";
import centered from '@storybook/addon-centered/react';
import * as style from '../../scss/index.scss';

export const PictureCardStory = () => (
  <PictureCard 
    pictureURL={text('Picture URL', 'https://www.ephotozine.com/articles/portrait-landscapes-16297/images/Field.jpg')}
    age={number('Age', '22')}
    comment={text('Comment', 'Some generic comment about this picture and a story of when it was taken.')}
    author={text('Author', 'Jordan')} />
);

export default {
  title: 'PictureCard',
  component: PictureCardStory,
  decorators: [withKnobs, centered]
};
