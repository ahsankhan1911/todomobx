import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'


class Todos extends React.Component {
  deleteTodo(id){
    this.props.onDelete(id);
  }
  render(){
    let todoItems;
    if(this.props.todos){
      todoItems = this.props.todos.map(todo => {
       return (
          <TodoItem onDelete={this.deleteTodo.bind(this)} key={todo.NewTodo} todo={todo}/>
        );
      });
    }
    return (
      <div className="Todos container">
        <h2> My Todos </h2>
          <table className="table">
          <thead>
      <tr>
        <th>S. No</th>
        <th>What To Do</th>
        <th>When To do</th>
        <th>Status</th>
      </tr>
    </thead>
      {todoItems}
       </table>
       
    </div>
    )
  }
}

Todos.propTypes= {
  todos: PropTypes.array,
  onDelete: PropTypes.func
}

export default Todos;