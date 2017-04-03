import React, { Component } from 'react';

function TodoHeader() {
  return (
    <header className="header">
      <h1>todos</h1>
      <input className="new-todo" placeholder="What needs to be done?" />
    </header>
  )
}

function TodoItem(props) {
  return (
    <li className={props.checked ? 'completed' : ''}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={props.checked} />
        <label>{props.text}</label>
        <button className="destroy" />
      </div>
      <input className="edit" defaultValue="Create a TodoMVC template" />
    </li>
  )
}

function TodoList() {
  return (
    <ul className="todo-list">
      <TodoItem text="Taste JavaScript" checked={true} />
      <TodoItem text="Buy a unicorn" checked={false} />
    </ul>
  )
}

function TodoBody() {
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <TodoList />
    </section>
  )
}

function TodoFooter() {
  return (
    <footer className="footer">
      <span className="todo-count"><strong>0</strong> item left</span>
      <ul className="filters">
        <li>
          <a className="selected" href="#/">All</a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  )
}


export default function Todo() {
  return (
    <section className="todoapp">
      <TodoHeader />
      <TodoBody />
      <TodoFooter />
    </section>
  );
};
