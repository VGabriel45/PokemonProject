import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import TypeList from './components/TypeList'
import Home from './components/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import TypeDetails from './components/TypeDetails';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/pokemons" component={PokemonList} />
          <Route path="/types" exact component={TypeList} />
          <Route path="/pokemonDetails" component={PokemonDetail} />
          <Route path="/types/Details" component={TypeDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
