import React from 'react';
import { ListGroupItem, Button } from 'reactstrap';

const Friend = props => {
    return (
        <ListGroupItem className="Friend" color="info" action >
        <div className="friend-text">
            <h2>{props.index + 1}. {props.friendData.name}</h2>
            <h4>Age: {props.friendData.age}</h4>
            <h4>{props.friendData.email}</h4>
        </div>
            <Button color="danger" onClick={(e) => props.handleDelete(e, props.friendData.id)} >X</Button>
        </ListGroupItem>
    );
}

export default Friend