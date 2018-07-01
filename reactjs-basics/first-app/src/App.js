import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  onClick() {
    alert('Clicked!');
  }


  render() {
    let list = [
      'Item1',
      'Item2',
      'Another item',
    ];

    return (
    
      <div className="App">
        <h1>
          {
            list.map(item => {
              return (
                <div onClick={this.onClick}>{item}</div>
              );
            })

          }

        </h1>

      </div>
      
      
    );
  }
}

export default App;
