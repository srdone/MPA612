import React from 'react';

import { Repeat, Definition, YouTubeVideo } from '../components';

import { econDefinitions, econVideos } from '../data';

export const Economics = props => (
  <div>
    <h3>Economics</h3>
    <Repeat data={econDefinitions} parentClass="definitions">
      <Definition/>
    </Repeat>
    <Repeat data={econVideos}>
      <YouTubeVideo />
    </Repeat>
  </div>
);