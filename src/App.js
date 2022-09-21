import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';

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
        <CardList monsters={this.state.monsters} />
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
