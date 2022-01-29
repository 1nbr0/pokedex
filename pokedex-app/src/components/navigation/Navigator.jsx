import { Route, Routes } from 'react-router-dom'
import PokemonDetails from '../pages/PokemonDetails'
import PokemonsDashBoard from '../pages/PokemonsDashBoard'

function Navigator () {
  return (
    <Routes>
      <Route path='/' element={<PokemonsDashBoard />} />
      <Route path='/pokemon/:id' element={<PokemonDetails/>} />
    </Routes>
  )
}

export default Navigator
