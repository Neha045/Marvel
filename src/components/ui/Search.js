import React, { useState } from 'react'

const Search = ({ getQuery }) => {
  const [text, setText] = useState('')

  const onChange = (q) => {
    setText(q)
    getQuery(q)
  }

  return (
    <section className='container search'>
      <form>
        <label className="center">
          Search Characters:
          <input
            type='text'
            className='form-control'
            placeholder='Ironman'
            value={text}
            onChange={(e) => onChange(e.target.value)}
            autoFocus
            />
        </label>
      </form>
    </section>
  )
}

export default Search