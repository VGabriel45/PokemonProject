import React, { Component, useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

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
                            <Link to={{ pathname:"/types/Details", data: type.url }}>
                                {type.name}
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
            </div>
    )
}

export default TypeList
