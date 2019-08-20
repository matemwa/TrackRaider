import React from 'react';

const MultiParameter = props => {
    const { label, parameters, color } = props;
    const classes = `badge m-2 badge-${color}`
    return (
        <li key={label} className="list-group-item justify-content-between ">
            {label}
            {parameters.map(parameter => <span className={classes}>{parameter}</span>)}
        </li>
    );
}

export default MultiParameter;