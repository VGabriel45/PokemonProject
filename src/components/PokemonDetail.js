import React, { useState, useEffect } from 'react'

function PokemonDetail(match) {
    const [state, setState] = useState(
        {
            abilities: [],
            exp: 0,
            forms: [],
            height: 0,
            moves: []
        })

    useEffect(() => {
        fetch(match.location.data)
            .then(res => res.json())
            .then(data => setState({
                abilities: data.abilities,
                exp: data.base_experience,
                forms: data.forms,
                height: data.height,
                moves: data.moves
            }))
   
    });

    return (
        <div class="container">
            <h1>Abilities</h1>
            {state.abilities.map(ability =>
                <div>
                    <ul class="list-group">
                        <li class="list-group-item">
                            {ability.ability.name}
                        </li>
                    </ul>
                </div>
            )}
            <hr/>
            <h1>Experience: </h1>
            <div>
                <ul class="list-group">
                    <li class="list-group-item">
                        {state.exp}
                    </li>
                </ul>
            </div>
            <hr/>
            <h1>Forms: </h1>
            {state.forms.map(form => 
                <div>
                    <ul class="list-group">
                        <li class="list-group-item">
                            {form.name}
                        </li>
                    </ul>
                </div>
            )}
            <hr />
            <h1>Height</h1>
            <div>
                <ul class="list-group">
                    <li class="list-group-item">
                        {state.height}
                    </li>
                </ul>
            </div>
            <h1>Moves</h1>
            {state.moves.map(move =>
                <div>
                    <ul class="list-group">
                        <li class="list-group-item">
                            {move.move.name}
                        </li>
                    </ul>
                </div>
            )}
            <hr/>
        </div>
    )
}

export default PokemonDetail
