import React from 'react';

export const Example = props => <div className="example">Incorrect: {props.incorrect}, Correct: {props.correct}</div>;

Example.defaultProps = {
  incorrect: 'No example',
  correct: 'No example'
}