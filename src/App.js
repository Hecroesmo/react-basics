import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';

import './App.css';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchField: '',
      monsters: []
    }
  }

  render() {
    const {searchField, monsters} = this.state
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return (
      <div className='App'>
        <SearchBox 
          placeHolder="search monsters..." 
          handleChange={(e) => this.setState({searchField: e.target.value})} 
        />
        <CardList monsters={filteredMonsters} />
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
