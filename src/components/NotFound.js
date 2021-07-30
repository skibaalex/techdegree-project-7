import React from 'react';
import { Image } from 'react-bootstrap';
import Nav from './Nav';
import SearchForm from './SearchBar';


const NotFound = ({handleSearchSubmit}) => {
    return (
        <>
            <SearchForm handleSubmitSearch={handleSearchSubmit} />
            <Nav />
            <Image src="https://media3.giphy.com/media/AKKhWXbQrmXFdOFNDf/giphy.gif?cid=ecf05e476pgzzx6yhxmsl20p1sood6cuihpjc0g30m5mzyz1&rid=giphy.gif&ct=g" alt="Oops Not found" />
            <h2 className="h2">404 PAGE NOT FOUND</h2>
        </>
    )
}

export default NotFound;