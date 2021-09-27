import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function sum(a, b) {
  return a + b
}

function primeiroJSX() {
  return (
    <div className="teste">
      Rafael Maciel - ReactJS - Basic Introduction
      <h1>Soma: {sum(10, 60)}</h1>
    </div>
  )
}

const App = () => {
  return (
    <div className="App">
      {primeiroJSX()}
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)