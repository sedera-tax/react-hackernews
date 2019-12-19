import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        },
        {
          username: 'Sedera',
          online: true
        }
      ]
    }
  }
  render() {
    const usersOnline = this.state.users.filter(user => user.online);
    const renderOnline = usersOnline.map((item, i) => {
      return <li key={i}>{item.username}</li>
    });
    return (
       <div>
         <h1>Current Online Users:</h1>
         <ul>
           {renderOnline}
         </ul>
       </div>
    );
  }
};

export default MyComponent;
