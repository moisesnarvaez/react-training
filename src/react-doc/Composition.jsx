import React, { Component } from 'react';


const FancyBorder = ({ color, children}) => {
  return (
    <div className={'FancyBorder FancyBorder-' + color}>
      {children}
    </div>
  );
}

const Dialog = ({ title, message, children}) => {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {title}
      </h1>
      <p className="Dialog-message">
        {message}
      </p>
      {children}
    </FancyBorder>
  );
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {login: ''};
  }

  render() {
    return (
      <Dialog title="Mars Exploration Program"
              message="How should we refer to you?">
        <input value={this.state.login}
               onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      </Dialog>
    );
  }

  handleChange = e => {
    this.setState({login: e.target.value});
  }

  handleSignUp = () => {
    alert(`Welcome aboard, ${this.state.login}!`);
  }
}

class Composition extends Component{
  render() {
    return (
      <SignUpDialog />
    );
  }
}

export default Composition;
