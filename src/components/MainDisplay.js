import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import Gallery from './Gallery'
import Nav from './Nav'
import SearchForm from './SearchBar'

const MainDisplay = ({handleSearch, searching, images}) => {
    const {query} = useParams()

    useEffect(() => {
        if(query)
        handleSearch(query)
    },[query, handleSearch])

    return (
      <>
        <SearchForm handleSearch={handleSearch} />
        <Nav />
        {searching
        ? <h2>Searching...</h2>
        :<Gallery images={images} searching={searching} />
        }
        
      </>
    )
  }

  export default MainDisplay;