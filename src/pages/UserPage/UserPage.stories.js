import React from 'react';
import UserPage from './UserPage.js';
import { withKnobs, text, number } from "@storybook/addon-knobs";
import * as style from '../../scss/index.scss';

export const UserPageStory = () => (
  <UserPage user={text('userID', 'jordantucker')} />
);

export default {
  title: 'UserPage',
  component: UserPageStory,
  decorators: [withKnobs]
};
