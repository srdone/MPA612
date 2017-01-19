import React from 'react';

export const Definition = props => {
    let examples;
    if (props.examples) {
        examples = props.examples.map(i => <li className="example">{i}</li>)
    }

    return (<li className="definition" key={props.title}>
        <div className="definition__name">{props.title}</div> - <div className="definition__description">{props.description}</div>
        <ul className="examples">{examples}</ul>
    </li>)
};