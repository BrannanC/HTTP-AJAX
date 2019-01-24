import React from 'react';
import { ListGroupItem, Button } from 'reactstrap';

import UpdateForm from './UpdateForm';
import { POINT_CONVERSION_COMPRESSED } from 'constants';

const Friend = props => {
    return (
        <div>
        <ListGroupItem className="Friend" color="info" action >
        <div className="friend-text">
            <h2>{props.index + 1}. {props.friendData.name}</h2>
            <h4>Age: {props.friendData.age}</h4>
            <h4>{props.friendData.email}</h4>
        </div>
        <div className="buttons">
            <Button color="primary" onClick={(e) => props.clickUpdate(e, props.friendData.id)}>Update</Button>
            <Button color="danger" onClick={(e) => props.handleDelete(e, props.friendData.id)} >X</Button>
        </div>            
        </ListGroupItem>
        {props.updateItem.itemUpdating === props.friendData.id && <UpdateForm friend={props.friendData} updateItem={props.updateItem}
                        handleUpdate={props.handleUpdate}                    handleChangeUpdate={props.handleChangeUpdate} clickUpdate={props.clickUpdate}/>}
        </div>
    );
}

export default Friend;