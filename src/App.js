import React, { Component} from 'react';
import List from './components/todos/List';
import Form from './components/todos/Form';
import Footer from './components/todos/Footer';

class App extends Component{
state = { todos: [
  {id: 1, title: 'Learn Rails', complete: true},
  {id: 2, title: 'Learn React', complete: true},
  {id: 3, title: 'Learn Hooks', complete: false},
],
filter: 'All'
}

setFilter = (incomingFilter) => {
this.setState({ filter: incomingFilter })
}

visibleTodos = () => {
  const { todos, filter } = this.state
  switch(filter){
    case 'Active':
      return todos.filter( t => !t.complete )
    case 'Complete':
      return todos.filter(t => t.complete )
    default:
      return todos;
  }
}

getUniqId = () => {
  //NOTE We are just using this as a helper function for id's since we aren't using a db yet
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
 }

 addTodo = (todo) => {
   const { todos } = this.state
   const newTodo = { id: this.getUniqId(), title: todo.title, complete: false }
   this.setState({ todos: [newTodo, ...todos]})
 }



  render(){
    const {todos, filter} = this.state
    return(
      <div>
        <Form addTodo={this.addTodo} />
        <List name='Coding todo list' todos={this.visibleTodos()} />
        <Footer filter={filter} setFilter={this.setFilter} />
      </div>
    )
  }
}
export default App;
