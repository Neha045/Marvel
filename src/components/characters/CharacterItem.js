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
          <ul>
            <li>
              <strong>Character Name:</strong> {item.name}
            </li>
            <li>
              <strong>Comics Available:</strong> {item.comics.available}
            </li>
            <li>
              <strong>Series Available:</strong> {item.series.available}
            </li>
            <li>
              <strong>Stories Available:</strong> {item.series.available}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem