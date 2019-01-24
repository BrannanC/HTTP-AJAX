import React from 'react';
import axios from 'axios';
import { ListGroup } from 'reactstrap';

import Friend from './Friend';
import FriendForm from './FriendForm';

class FriendsList extends React.Component {
    state = {
        friends: [],
        updateItem: {
            name: "",
            age: null,
            email: "",
            itemUpdating: ''
        },
        newItem: {
            name: "",
            age: '',
            email: "",
        }
    }

    componentDidMount(){
        axios
        .get("http://localhost:5000/friends")
        .then(res => {
            console.log(res.data);
          this.setState({
            friends: res.data
          });
        })
        .catch(err => {
          console.log(err)
        });
    }

    handleChange = (e) => {
        this.setState({
            newItem: {
                ...this.state.newItem,
                [e.target.name]: e.target.value
            }
        })
    }

    handleChangeUpdate = (e) => {
        this.setState({
            updateItem: {
                ...this.state.updateItem,
                [e.target.name]: e.target.value
            }
        })
    }

    addFriend = (e) => {
        e.preventDefault();
        const { name, age, email } = this.state.newItem;
        axios
          .post(`http://localhost:5000/friends`, { name, age, email })
          .then(res => this.setState(prevState => ({
              friends: res.data
          })))
          .catch(err => console.log(err));
      };

    handleDelete = (e, id) => {
    e.preventDefault();
    axios
        .delete(`http://localhost:5000/friends/${id}`)
        .then(res =>
        this.setState({
            friends: res.data
        })
        )
        .catch(err => console.log(err));
    };

    clickUpdate = (e, id) => {
        e.preventDefault();
        this.setState(prevState => ({
            updateItem: {
                itemUpdating: id === prevState.updateItem.itemUpdating ? '' : id
            }
        }))
    }

    handleUpdate = (e, id) => {
        e.preventDefault();
        const { name, age, email } = this.state.updateItem;
        axios
            .put(`http://localhost:5000/friends/${id}`, { name, age, email })
            .then(res =>
            this.setState({
                friends: res.data,
                updateItem: {
                    name: "",
                    age: null,
                    email: "",
                    itemUpdating: ''
                }
            })
            )
            .catch(err => console.log(err));
        };
         
    render(){
        return (
            <div>
            <ListGroup className="FriendsList" >
            {this.state.friends.map((friend, i)=> <Friend 
                                                    friendData={friend} 
                                                    key={`${friend.id} ${friend.name}`} 
                                                    index={i}
                                                    handleDelete={this.handleDelete}
                                                    handleChangeUpdate={this.handleChangeUpdate}
                                                    clickUpdate={this.clickUpdate}
                                                    updateItem={this.state.updateItem}
                                                    handleUpdate={this.handleUpdate}
                                                    />)}
            </ListGroup>
            <FriendForm 
                handleChange={this.handleChange}
                addFriend={this.addFriend}
                newItem={this.state.newItem}
            />
            </div>
        );
    }
}

export default FriendsList;