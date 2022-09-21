import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      monsters: [
        {
          id: 1,
          name: 'Frankstain'
        },
        {
          id: 2,
          name: 'Dracula'
        },
        {
          id: 3,
          name: 'Zombie'
        },
      ]
    }
  }

  render() {
    return (
      <>
        {
          this.state.monsters.map(monster => <div key={monster.id}>{monster.name}</div>)
        }
      </>
    )
  }
}

export default App;
