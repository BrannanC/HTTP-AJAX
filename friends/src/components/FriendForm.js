import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const FriendForm = (props) => {
    return (
        <Form className="FriendForm" onSubmit={props.addFriend}>
        <h1>Add a new friend!</h1>
            <FormGroup>
                <Label for="name">Name:</Label>
                <Input type="text" placeholder="Name" name="name" value={props.newItem.name} onChange={props.handleChange} />

                <Label for="age">Age:</Label>
                <Input type="number" placeholder="Age" name="age" value={props.newItem.age} onChange={props.handleChange} />

                <Label for="email">Email:</Label>
                <Input type="email" placeholder="Email" name="email" value={props.newItem.email} onChange={props.handleChange} />
            </FormGroup>
            <Button type="submit" >Add Friend</Button>
        </Form>
    );
}

export default FriendForm;