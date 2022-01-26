import React from 'react';
import PokemonListItem from './PokemonListItem'

function PokemonList(props) {
  const { pokemons } = props
  return (
    <div className='list-container'>
      {
      pokemons.map((pokemon) => {
          return (
            <PokemonListItem key={pokemon.name} pokemon={pokemon} />
          )
        })
      }
      {/* <pre>{JSON.stringify(pokemons, null, 2)}</pre> */}
    </div>
  )
}

export default PokemonList;
