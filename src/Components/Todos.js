import React, {Component} from 'react';
import TodoItem from './Todoitems';
import PropTypes from 'prop-types';

class Todos extends Component{
 
  
  render(){
     return this.props.todos.map((todo) => (
       <TodoItem key = {todo.id} todo = {todo} markComp=
       {this.props.markComp} delTodo={this.props.delTodo}/>
     
     ));
  
  }
}

Todos.propTypes = {
  todo: PropTypes.array.isRequired
}

export default Todos;

