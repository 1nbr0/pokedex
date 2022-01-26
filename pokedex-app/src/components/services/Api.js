import axios from 'axios'

const api = axios.create({
  // baseURL: process.env.REACT_APP_API_URL,
  baseURL: 'https://pokeapi.co/api/v2/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  timeout: 10000
})

// const getPokemons = async () => {
//   try {
//     const response = await api.get('pokemon')
//     return response.data
//   } catch (error) {
//     console.error(error)
//   }
// }

const getPokemonsById = async (id) => {
  try {
    const response = await api.get(`pokemon/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export {
  // getPokemons,
  getPokemonsById
}
