import React from 'react';

import { Example, Repeat } from '.';

export const Definition = props => {
    return (<li className="definition" key={props.title}>
        <div className="definition__name">{props.title}</div> - <div className="definition__description">{props.description}</div>
        <Repeat data={props.examples}>
            <Example />
        </Repeat>
    </li>)
};

Definition.defaultProps = {
    examples: []
}