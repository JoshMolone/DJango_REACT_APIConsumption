import React,{ useState, useEffect } from 'react'; 

const PokemonApi = props =>{
    const [pokemonList, setPokemonList] = useState([]);

    const accessPokedex = e => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(results => {
                return results.json();
            })
            .then(results => {
                setPokemonList(results.results);
                console.log(results);
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div>
            <h1>Access Pokemon API Assignment</h1>
            <button onClick={accessPokedex}>FETCH POKEMON LIST</button>
            {/* Create list */}
            <ul>
                {/* Display each pokemon iteration index */}
                {pokemonList.map((poke, i) => (
                    <li key={i}>{poke.name}</li>
                ))}
            </ul>
        </div>
    )
}


export default PokemonApi; 
