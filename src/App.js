import React, { Component} from 'react';
import List from './components/todos/List';

class App extends Component{
state = { todos: [
  {id: 1, title: 'Learn Rails', complete: true},
  {id: 2, title: 'Learn React', complete: true},
  {id: 3, title: 'Learn Hooks', complete: false},
]}



  render(){
    const {todos} = this.state
    return(
      <div>
        <List name='Coding todo list' todos={todos} />
      </div>
    )
  }
}
export default App;
