#!/usr/bin/env node

const printFiveMoves = async (pokemonName) => {
    const response = await fetch(
        `https://pokeapi.co/api/v2/api/v2/pokemon/${pokemonName}`
    );
    const pokemon = await response.json();
    const moves = pokemon.moves.map(({move}) => move.name);
    console.log(moves.slice(0, 5));
};

printFiveMoves("charmander")