import React from 'react'

const CharacterItem = ({ item }) => {
    const url = `${item.thumbnail.path}.jpg`
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={url} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul  id="inner">
            <li>
              <strong>Description:</strong> {item.description}
            </li>        
           </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem