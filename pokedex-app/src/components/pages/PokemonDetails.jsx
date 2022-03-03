import React from 'react'
import logo from '../../logo.svg'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios';
import '../pokemonList/Pokemon.css'

const PokemonDetails = () => {

  const colors = {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#98d7a5",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#F5F5F5",
  };

  const params = useParams()
  const id = params.id
  const [pokemonDetails, setPokemonDetails] = useState()
  const [loading, setLoading] = useState(true)
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
  }, [])

  if (loading) {
    return (
      <div>
        <img src={logo} className='App-logo' alt='logo' />
      </div>
    )
  }

  const name = pokemonDetails.name
  const img = pokemonDetails.sprites.other.dream_world.front_default
  const type = pokemonDetails.types[0].type.name
  const color = colors[type]

  return <div className='pokemon-details' style={{backgroundColor : `${color}`}}>
  <Link to={'/'} className='link-card' >
    <h3>Retour</h3>
  </Link>
    <div className="img-container">
      <img src={img} alt={pokemonDetails.name} style={{width : '6rem'}} />
    </div>
    <div className='info'>
      <span className="number">#{id.toString().padStart(3, '0')}</span>
      <h3 className="name">{name}</h3>
      <small className="type">Type: <span>{type}</span> </small>
  </div>
</div>
};

export default PokemonDetails;
