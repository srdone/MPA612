import React from 'react';

export const Repeat = props => {
  let Child = props.children.type;
  return <ul className={props.parentClass}>{props.data.map((props, i) => <Child {...props} key={i} />)}</ul>;
}