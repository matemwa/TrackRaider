import React from 'react';

const SingleParameter = props => {
    const { parameter, label, color } = props;
    const classes = `badge m-2 badge-${color}`
    return (
        <li className="list-group-item align-center align-items-center">
            {label}
            <span className={classes}>{parameter}</span>
        </li>);
}

export default SingleParameter;