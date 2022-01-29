import React from 'react'
import logo from '../../logo.svg'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const PokemonDetails = () => {

  const params = useParams()
  const id = params.id
  const [pokemonDetails, setPokemonDetails] = useState(null)
  const [loading, setLoading] = useState(false)

  const getPokemon = async (id) => {
    const details = await getPokemonData(id)
    setPokemonDetails(details.data);
    setLoading(false)
  }

  const getPokemonData = async (id) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return res
  }

  useEffect(() => {
    getPokemon(id)
  })

  if (loading) {
    return (
      <div>
        <img src={logo} className='App-logo' alt='logo' />
      </div>
    )
  }

  return <div>
    <h1>Pokemon Info</h1>
  </div>
};

export default PokemonDetails;
