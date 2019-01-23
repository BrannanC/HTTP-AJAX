import React from 'react';
import axios from 'axios';
import { ListGroup } from 'reactstrap';

import Friend from './Friend';
import FriendForm from './FriendForm';

class FriendsList extends React.Component {
    state = {
        friends: [],
            name: "",
            age: '',
            email: ""
    }

    componentDidMount(){
        axios
        .get("http://localhost:5000/friends")
        .then(res => {
            console.log(res.data);
          this.setState({
            friends: res.data,
          });
        })
        .catch(err => {
          
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addFriend = (e) => {
        e.preventDefault();
        const { name, age, email } = this.state;
        const id = this.state.friends.length + 1
        axios
          .post(`http://localhost:5000/friends`, { name, age, email, id})
          .then(res => this.setState({
              friends: res.data
          }))
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
        .catch(error => this.setState({ error }));
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
                                                    />)}
            </ListGroup>
            <FriendForm 
                handleChange={this.handleChange}
                addFriend={this.addFriend}
                name={this.state.name}
                age={this.state.age}
                email={this.state.email}
            />
            </div>
        );
    }
}

export default FriendsList;