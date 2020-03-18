import React, { Component } from 'react';

class Form extends Component {

  state = { title: '' }

  //e = event, updates the state to what the user type for each input
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value})
  } 

  handleSubmit = (e) => {
    //stop the page from reloading and losing data, and not in the url bar
    e.preventDefault()
    // console.log(this.state.title)
    // add todo in our array
    this.props.addTodo(this.state)
    this.setState({title: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input

          required
          placeholder='add todo'

          name='title'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default Form;