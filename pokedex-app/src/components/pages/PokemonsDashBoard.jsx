import React, { useState, useEffect } from 'react'
import { getPokemons } from '../services/Api'
import logo from '../../logo.svg'
import PokemonList from '../pokemonList/PokemonList'

function PokemonsDashBoard () {

  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      const data = await getPokemons()
      setPokemons(data.results)
      setLoading(false)
    }
    getData()
  }, [])
  console.log(pokemons);

  if (loading) {
    return (
      <div>
        <img src={logo} className='App-logo' alt='logo' />
      </div>
    )
  }

  return (
    <div>
      <h1>Pokemons DashBoard</h1>
      <PokemonList pokemons={pokemons} />
      {/* <pre>{JSON.stringify(pokemons, null, 2)}</pre> */}
    </div>
  )
}

export default PokemonsDashBoard
