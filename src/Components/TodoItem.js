import React from 'react';
import PropTypes from 'prop-types';


class TodoItem extends React.Component {
  deleteTodo(id){
    this.props.onDelete(id);
  }
  
  render(){
    return (
    <tbody>
      <tr>
        <td>{this.props.todo.S_No}</td>
        <td> {this.props.todo.NewTodo}</td>
        <td>{this.props.todo.TodoDate}</td>
        <td>{this.props.todo.status}</td>
        <td><input className="btn btn-success"  type="button" value="Completed" onClick={this.deleteTodo.bind(this,this.props.todo.id)} /></td>
      </tr>
    </tbody>  
    )
  }
}

TodoItem.propTypes= {
  todo: PropTypes.object,
  onDelete: PropTypes.func
}

export default TodoItem;
