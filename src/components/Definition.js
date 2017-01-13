import React from 'react';

export const Definition = props => (<li className="definition" key={props.name}>
    <div className="definition__name">{props.name}</div> - <div className="definition__description">{props.description}</div>
</li>);