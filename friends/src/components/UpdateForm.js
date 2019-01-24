import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const UpdateForm = (props) => {
    return (
        <Form className="UpdateForm" onSubmit={(e) => props.handleUpdate(e, props.friend.id)}>
            <FormGroup>
                <Label for="name">Name:</Label>
                <Input type="text" placeholder="Name" name="name" value={props.updateItem.name} onChange={props.handleChangeUpdate} />

                <Label for="age">Age:</Label>
                <Input type="number" placeholder="Age" name="age" value={props.updateItem.age} onChange={props.handleChangeUpdate} />

                <Label for="email">Email:</Label>
                <Input type="email" placeholder="Email" name="email" value={props.updateItem.email} onChange={props.handleChangeUpdate} />
            </FormGroup>
            <Button type="submit" >Update Friend</Button>
        </Form>
    );
}

export default UpdateForm;