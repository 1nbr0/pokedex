import React from 'react'
import { Link } from 'react-router-dom'
import './Pokemon.css'

function PokemonCard({ id, name, image, type }) {

  const style = `pokemon ${type}`

  return <div className={style}>
  <Link to={`/pokemon/${id}`} className='link-card' >
    <div className="img-container">
      <img src={image} alt={name} style={{width : '6rem'}} />
    </div>
    <div className='info'>
      <span className="number">#{id.toString().padStart(3, '0')}</span>
      <h3 className="name">{name}</h3>
      <small className="type">Type: <span>{type}</span> </small>
  </div>
  </Link>
</div>
}

export default PokemonCard;
