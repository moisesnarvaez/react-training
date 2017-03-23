import React, { Component } from 'react';

const Avatar = ({ url}) => (
  <img alt='Profile' className='Avatar'
    src={url} />
);

const User = ({ user })  => (
  <div>
    <h3>{user.name}</h3>
    <Avatar url={user.avatarUrl}/>
  </div>
);

const Skill = ({ name }) => (
  <li>
    {name}
  </li>
);

const Skills = ({ skills }) => (
  <ul className="skills_set">
      {skills.map(skill => (
        <Skill key={skill} name={skill} />
      ))}
  </ul>
);

const Profile = ({ person }) => (
  <div className="profile">
    <User user={person.user}/>
    <Skills skills={person.skills}/>
  </div>
);

const moises = {
  user: {
    name: 'Moi',
    avatarUrl: 'http://graph.facebook.com/588121274/picture?type=square'
  },
  skills: ['Ruby on Rails', 'Angular JS', 'React JS']
};

class ComponentsAndProps extends Component {
  render() {
    return (
      <Profile person={moises}/>
    )
  }
}

export default ComponentsAndProps;


