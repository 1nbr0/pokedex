import { Link } from 'react-router-dom'
import './PokemonListItemStyle.css'

function PokemonListItem (props) {

  const { pokemon } = props
  return (
    <div className='card'>
        {/* <h1>{pokemon[0].name}</h1> */}
        {/* <p>{pokemon.description}</p> */}
      {/* <Link to={`/pokemon/${pokemon._id}`} style={{ textDecoration: 'none', color: 'black' }}>
        <img className='card-img' src={`${process.env.REACT_APP_API_URL}${pokemon.photos[0].url}`} />
      </Link> */}
      {/* <pre>{JSON.stringify(pokemon, null, 2)}</pre> */}
    </div>
  )
}

export default PokemonListItem
