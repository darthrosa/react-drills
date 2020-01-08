import React, { Component } from 'react';
import './App.css';
import Todo from'./Todo'
class App extends Component {
  constructor(){
    super()
    this.state = {
      toDoList: [],
      input: ''
    }
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleInput(val){
    this.setState({input: val})
  }

  handleAdd(){
    this.setState({
      toDoList: [...this.state.toDoList, this.state.input],
      input: ''
    })
  }


  render() {
    let toDoList = this.state.toDoList.map((element, i) => {
      return <Todo key={i} task={element} />
    })
    return(
      <div className="App">
        <div>
          <h1>My to-do list:</h1>
          <input 
          placeholder='Enter new task'
          onChange={(e) => this.handleInput(e.target.value)}/>
          <button onClick={this.handleAdd}>Add</button>
        </div>
          {toDoList}
      </div>
    );
  }
}

export default App;
