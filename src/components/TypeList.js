import React, {Component, useState, useEffect} from 'react'

function TypeList()  {

    const [state, setState] = useState({types:[]})

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/type')
            .then(res => res.json())
            .then(data => setState({
                types: data.results
            }))
    });
     
    return (
            <div class="container">
            {state.types.map(type =>
                <div>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <a href={type.url}>{type.name}</a>
                        </li>
                    </ul>
                </div>
            )}
            </div>
    )
}

export default TypeList
