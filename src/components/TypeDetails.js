import React, {useState, useEffect} from 'react'

export default function TypeDetails(match) {

    const [state, setState] = useState(
        {
            loading: true,
            details: [],
            moves: []
        })

    useEffect(() => {
        fetch(match.location.data)
            .then(res => res.json())
            .then(data => setState({moves: data.moves, loading: false}))
   
    });

    return (
        <div>
            <h1>Moves: </h1>
            <ul>
                {!state.loading ? state.moves.map(object =>
                    <li>{object.name}</li>
                ) : <p>Loading...</p>}
            </ul>
        </div>
    )
}
