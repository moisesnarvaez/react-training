import React, { Component } from 'react';


const NotificationBar = ( { isLoggedIn } ) => (
  isLoggedIn ? <div>Your al Logged now!</div> : null
  
);

const UserGreetings = () => (
  <h1>Welcome Back!</h1>
);

const GuestGreetings = () => (
  <h1>Please sign up.</h1>
);

const Greeting = ({ isLoggedIn }) => (
  isLoggedIn ? <UserGreetings/> : <GuestGreetings/>
)

const LoginButton = ({ onClick }) => (
  <button onClick={onClick}>
    Login
  </button>
);

const LogoutButton = ({ onClick }) => (
  <button onClick={onClick}>
    Logout
  </button>
);

const Mailbox = ({unreadMessages}) => (
  <div>
    <h1>Hello!</h1>
    <h2>You have {unreadMessages.length} unread messages.</h2>
  </div>
);

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false }
  };

  handleLoginClick = () => {
    this.setState({
      isLoggedIn: true
    });
  };

  handleLogoutClick = () => {
    this.setState({
      isLoggedIn: false
    });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button = null;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <NotificationBar isLoggedIn={isLoggedIn} />
        <Greeting isLoggedIn={isLoggedIn} />
        { isLoggedIn && 
          <Mailbox unreadMessages={ ['React', 'Re: React', 'Re:Re: React'] } />
        }
        {button}
      </div>
    );
  }
}

class ConditionalRendering extends Component {
  render() {
    return (
      <LoginControl />
    );
  }
}

export default ConditionalRendering;
