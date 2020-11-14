import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

function PokemonList(props) {
    const [state, setState] = useState({ pokemons: [] })

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(res => res.json())
            .then(data => setState({
                pokemons: data.results
            }))
    });

    return (
        <div class="container">
            {state.pokemons.map(pokemon =>
                <div>
                    <ul class="list-group">
                        <div class="card" className={props.customColor && 'customBackground'} style={{width: '18rem'}}>
                            <div class="card-body">
                                <h5 class="card-title">
                                    <li class="list-group-item">
                                        <Link to={{ pathname:"/pokemonDetails", data: pokemon.url }}>
                                            {pokemon.name}
                                        </Link>
                                    </li>
                                </h5>
                            </div>
                        </div>
                        
                    </ul>
                </div>)}
        </div>
    )
}

export default PokemonList
