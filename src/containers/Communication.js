import React from 'react';

import { Repeat, Definition } from '../components';

import { grammarDefinitions } from '../data';

export const Communication = props => (
  <div>
    <h3>Grammar and Good Writing</h3>
    <Repeat data={grammarDefinitions} parentClass="definitions">
      <Definition/>
    </Repeat>
  </div>
);