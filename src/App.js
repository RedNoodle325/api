import React, { Component } from 'react';
import './App.css';
import CardList from './CardList.js';
import SearchBox from './SearchBox.js';
import Scroll from './Scroll.js';

class App extends Component {
    constructor() {
        super()
        this.state = {
            pokemon: [],
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then(response=> response.json())
            .then(users => {this.setState({ pokemon: users.results })});
    }
    // What does this do? Why is it here?
    // This is a lifecycle method that is called when the component is mounted.
    // It is used to fetch data from an API and set the state of the component
    // to the data that is returned.

    render() {
            const filteredPokemon = this.state.pokemon.filter(pokemon => {
                return pokemon.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            })
        // only show pokemon that match the search term else show none
            return !this.state.pokemon.length ?
                <h1>Loading</h1> :
                (
                    <div className='tc pa1 dib bg-purple gold code'>
                        <h1 className='f1'>Pokemon</h1>
                        <SearchBox searchChange={this.onSearchChange} />
                        <Scroll>
                            <CardList pokemon={filteredPokemon} />
                        </Scroll>
                    </div>
        );
    }
//explain the above code
// This is a render method that returns the JSX that is rendered to the DOM.
    }
export default App;
