import React from 'react';
import Todos from './Components/Todos'
import AddTodo from './Components/AddTodo'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  //take this stae and pass it to todo as property
  handelAddTodo(todo) {
    let todos = this.state.todos;
    todos.push(todo);
    //resetting the state after adding the todo
    this.setState({ todos: todos });
  }

  handelDeleteTodo(id) {
    let todos = this.state.todos;
    //findIndex will look through the ids and find the id which is being fwded
    let index = todos.findIndex(x => x.id === id &&
    console.log(x.id));
    todos.splice(index, 1);
    //resetting the state after deleting the todo
    this.setState({ todos: todos });

    

  }

  render() {
    return (

      <centre> <div className="App">
        <AddTodo addTodo={this.handelAddTodo.bind(this)} />
        <Todos todos={this.state.todos} onDelete={this.handelDeleteTodo.bind(this)} />
      </div>
      </centre>


    )
  }
}


export default App