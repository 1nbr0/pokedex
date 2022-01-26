import axios from 'axios'

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  timeout: 10000
})

const getPokemons = async () => {
  try {
    const response = await api.get('/pokemon?limit=151')
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const getPokemonsByName = async (name) => {
  try {
    const response = await api.get(`/pokemon/${name}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export {
  getPokemons,
  getPokemonsByName
}
