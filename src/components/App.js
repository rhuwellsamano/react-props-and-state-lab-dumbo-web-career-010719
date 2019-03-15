import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  parameterForFetch = () => {
    // if else statements
    console.log('parameterForFetch fired!')
    // debugger
    if(this.state.filters.type === 'all') {
      return ('/api/pets')
    } else if (this.state.filters.type === 'cat') {
      return ('/api/pets?type=cat')
    } else if (this.state.filters.type === 'dog') {
      return ('/api/pets?type=dog')
    } else if (this.state.filters.type === 'micropig') {
      return ('/api/pets?type=micropig')
    }
    // all: '/api/pets',
    // cats: '/api/pets?type=cat',
    // dogs: '/api/pets?type=dog',
    // micropig: '/api/pets?type=micropig'
  }

  onChangeType = (event) => {
    let animal = event.target.value
    // debugger
    console.log('onChangeType fired!')
    this.setState({
      pets: [...this.state.pets],
      filters: {
        type: animal
      }
    })
  }

  onFindPetsClick = () => {
    console.log('onFindPetsClick fired!')

    this.setState({
      pets: []
    })

    fetch(this.parameterForFetch())
      .then(res => res.json())
      .then(petsData => this.setState({
        pets: petsData
      }))
  }

  onAdoptPet = () => {
    console.log('onAdoptPet fired!')
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser animals={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
