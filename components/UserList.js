import React from 'react';
import axios from 'axios';

export default class UserList extends React.Component{
  state = {
    users: []
  };

  componentDidMount(){
    axios.get('https://my-json-server.typicode.com/EventManagerGroup/UserInfo/users').then(res => {
      console.log(res);
      this.setState({ users: res.data});
    });
  }

  render(){
    return (
      <ul>
        {this.state.users.map(user => <li key={user.username}>{user.name}</li>)}
      </ul>
    )
  }
}
