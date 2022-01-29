import React, { useState, useEffect } from 'react'
import axios from 'axios'
import logo from '../../logo.svg'
import Pokemon from '../pokemonList/PokemonCard'
import './pokemonDashBoard.css'

function PokemonsDashBoard () {

  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(false)

  const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    timeout: 10000
  })

  const getPokemonsList = async () => {
    let pokemonArray = [];
    for (let i = 1; i < 152; i++) {
      pokemonArray.push(await getPokemonsById(i))
    }
    setLoading(true)
    setPokemons(pokemonArray)
    setLoading(false)
  }
  
  const getPokemonsById = async (id) => {
    try {
      const res = await api.get(`/pokemon/${id}`)
      return res
    } catch (error) {
      console.error(error)
    }
  }
  
  useEffect(() => {
    const getData = async () => {
      getPokemonsList()
    }
    getData()
  }, [])

  if (loading) {
    return (
      <div>
        <img src={logo} className='App-logo' alt='logo' /> Fetching Pokemon
      </div>
    )
  }

  return (
    <div className='app-container'>
      <h1>PokeDex</h1>
      <div className="pokemon-container">
        <div className="all-container">
          {pokemons.map((pokemon, index) => (
              <Pokemon 
              id={pokemon.data.id}
              name={pokemon.data.name}
              image={pokemon.data.sprites.other.dream_world.front_default}
              type={pokemon.data.types[0].type.name}
              key={index}
              />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PokemonsDashBoard
