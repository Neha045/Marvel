import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from './components/ui/header'
import Search from './components/ui/Search'
import CharacterGrid from './components/characters/CharacterGrid'
import './App.css'


const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')
  const baseUrl = 'http://gateway.marvel.com/v1/public/characters?orderBy=-modified&limit=40&'
  const hash = "5a9800abdfa4e535d456db10566d85de"

  useEffect(() => {
    const fetchItems = async () => {
      if(!query){
        const result = await axios(
          `${baseUrl}ts=1&apikey=${process.env.REACT_APP_MARVEL_API}&hash=${hash}`
        )
        console.log(result.data)
        setItems(result.data)
        setIsLoading(false)
      }
      const result = await axios(
        `${baseUrl}nameStartsWith=${query}&ts=1&apikey=${process.env.REACT_APP_MARVEL_API}&hash=${hash}`
        )
      console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q)=> setQuery(q) }/>
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
