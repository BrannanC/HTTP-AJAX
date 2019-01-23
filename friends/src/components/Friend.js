import React from 'react';

const Friend = props => {
    return (
        <li className="Friend">
            <h2>{props.index + 1}. {props.friendData.name}</h2>
            <h4>Age: {props.friendData.age}</h4>
            <h4>{props.friendData.email}</h4>
        </li>
    );
}

export default Friend