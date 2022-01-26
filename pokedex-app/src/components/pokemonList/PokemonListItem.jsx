import { Link } from 'react-router-dom'
import './PokemonListItemStyle.css'

function PokemonListItem (props) {

  const { pokemon } = props
  return (
    <div className='card'>
      {/* <div className="number">
        <small>#{id}</small>
      </div>
      <img src={image} alt={name} />
      <div className="detail-wrapper">
        <h3>{name}</h3>
        <small>Type : {type}</small>
      </div> */}
        {/* <h1>{pokemon.name}</h1> */}
        {/* <p>{pokemon.description}</p> */}
      {/* <Link to={`/pokemon/${pokemon._id}`} style={{ textDecoration: 'none', color: 'black' }}>
        <img className='card-img' src={`${process.env.REACT_APP_API_URL}${pokemon.photos[0].url}`} />
      </Link> */}
      <pre>{JSON.stringify(pokemon.name, null, 2)}</pre>
    </div>
  )
}

export default PokemonListItem
