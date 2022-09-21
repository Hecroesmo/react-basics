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
      <div className='App'>
        {
          this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
        }
      </div>
    )
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }
}

export default App;
