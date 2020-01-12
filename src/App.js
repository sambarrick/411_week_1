import React from 'react';
// import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent';

class App extends React.Component{
state = {
  input: '',
  items: [],
  itemId: 0
  };


// toggle = () => {
//   this.setState({isOn: !this.state.isOn})
// }


inputUpdate= event => {
  this.setState({input: event.target.value})
}

formSubmit = event => {
  event.preventDefault()
  let itemId = this.state.itemId + 1;
  let input = this.state.input
  let newText = {id: itemId, text: input};
  //console.log("THIS IS STATE***", this.state.input);
  this.setState({
    items: [...this.state.items, newText],
    input: '',
    itemId: itemId
  })
  console.log(this.state.itemId)
}

deleteToDo = id => {
  let array = this.state.items;
  let deletedTarget = array.find(x => x.id === id);
  let index = array.indexOf(deletedTarget);
  //debugger 
  if (index !== -1) {
    array.splice(index, 1);
    this.setState({items: array});
  }
}

render(){
  console.log("see here",this.state.isOn)
  return (
    <div>
      <form onSubmit={this.formSubmit}>
    <input value={this.state.input} onChange={this.inputUpdate}/>
    {/* <button onClick={this.toggle}>{this.state.isOn ? 'Hello' : 'Goodbye'}</button>  ***THIS
  MAKES THE BUTTON TOGGLE BACK AND FORTH BETWEEN SAYING "HELLO" AND "GOODBYE". KEEPING AS A PLACEHOLDER AND REFERENCE FORTHE FUTURE*/} 
  <button>Submit</button>  
  </form>
  <ul>
  {this.state.items.map((item, index) => {
    return <li key={index}>{item.text} <button onClick={() => this.deleteToDo(item.id)}>Delete</button></li>
  })}</ul>
  <FirstComponent items={this.state.items}/>
    </div>
  );
}

}

export default App;
