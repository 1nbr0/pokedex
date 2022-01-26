import { Route, Routes } from 'react-router-dom'
import PokemonsDashBoard from '../pages/PokemonsDashBoard'

function Navigator () {
  return (
    <Routes>
      <Route path='/' element={<PokemonsDashBoard />} />
    </Routes>
  )
}

export default Navigator
