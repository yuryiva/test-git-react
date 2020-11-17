import React from 'react'
import './App.css';
import Button from './components/Button'

const main = [
  {color: "red",
  text: "RED",
  size: "18"}
]


function App(props) {
  return (
    <div className="App">
     <Button 
      color = {main.color}
      text = {main.text}
      size = {main.size}
      
      />
    </div>
  );
}

export default App;
