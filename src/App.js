import React from 'react';
// import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent';

class App extends React.Component{
constructor(props){
  super(props)
  this.state = {
  input: '',
  items: []
  };
}

toggle = () => {
  this.setState({isOn: !this.state.isOn})
}

inputUpdate= event => {
  this.setState({input: event.target.value})
}

formSubmit = event => {
  event.preventDefault()
  console.log("THIS IS STATE***", this.state.input);
  this.setState({
    items : [...this.state.items, this.state.input],
    input: ''
  })
} 

deleteToDo = event => {
  let array = [...this.state.items];
  let index = array.indexOf(event.target.value);
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
    return <li key={index}>{this.state.items[index]} <button onClick={this.deleteToDo}>Delete</button></li>
  })}</ul>
  <FirstComponent items={this.state.items}/>
    </div>
  );
}

}



export default App;
