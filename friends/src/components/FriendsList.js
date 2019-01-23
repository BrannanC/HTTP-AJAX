import React from 'react';
import axios from 'axios';

import Friend from './Friend';

class FriendsList extends React.Component {
    state = {
        friends: []
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

    render(){
        return (
            <ul className="FriendsList">
            {this.state.friends.map((friend, i)=> <Friend 
                                                    friendData={friend} 
                                                    key={`${friend.id} friend.name`} 
                                                    index={i}
                                                    />)}
            </ul>
        );
    }
}

export default FriendsList;