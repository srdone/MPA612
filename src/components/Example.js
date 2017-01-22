import React from 'react';

export const Example = props => <div className="example">
  {props.example &&
    <span>Example: {props.example}</span>
  }
  {!props.example &&
    <span>Incorrect: {props.incorrect}, Correct: {props.correct}</span>
  }
 </div>;

Example.defaultProps = {
  incorrect: 'No example',
  correct: 'No example'
}