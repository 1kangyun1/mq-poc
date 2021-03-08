import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About'
//import {v4 as uuidv4} from 'uuid';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://brian-todos.herokuapp.com/todoList')
      .then(res => this.setState({ todos: res.data }));
  }

  // Toggle Complete
  markComplete = (id) => {
    axios.post(`https://brian-todos.herokuapp.com/todoList/${id}`)
      .then(res => {
        console.log(res.data);
        this.setState({ todos: this.state.todos.map(todo => {
          if(todo.id === id){
            todo.finished = !todo.finished;
          }
          return todo;
        }) });
      })
  }

  // Delete Todo
  delTodo = (id) => {
    axios.delete(`https://brian-todos.herokuapp.com/todoList/delete/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }))
  }

  // Add Todo
  addTodo = (todo) => {
    axios.post('https://brian-todos.herokuapp.com/todoList/create',{
      todo: todo,
      finished: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }))
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/react-todo-app" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
              </React.Fragment>
            )} />
            <Route exact path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
