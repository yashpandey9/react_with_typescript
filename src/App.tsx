import React from 'react';
// import logo from './logo.svg';
import './App.css';
import MyButton from './components/Button';

function App() {
  return (
    <div className="App">
       <MyButton onClick = {() => alert('Button Clicked')} text = 'Click Me' />
    </div>
  );
}

export default App;