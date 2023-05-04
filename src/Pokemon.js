import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Pokemon() {
    const [pokemonInfo, setUsers] = useState();
    const { pokemonName } = useParams();

    const getApiData = async () => {
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`
        ).then((response) => response.json());

        setUsers(response);
    };

    useEffect(() => {
        getApiData();
    }, []);
    
    console.log(pokemonName)

    return (
        <div className="app">
            {pokemonInfo && (
                <div className="item-container">
                    Id: {pokemonInfo.id} - Title: {pokemonInfo.name}
                </div>
            )}
        </div>
    )

}