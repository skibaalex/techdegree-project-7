import React from 'react';
import { useState } from 'react';
import {Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import {  useHistory } from 'react-router';
import SearchIcon from './SearchIcon';

const SearchForm = ({handleSearch}) => {
    const [value, setValue] = useState('')
    const history = useHistory()

    const handleSearchFormSubmit = () => {
        history.push(`/search/${value}`)
    }

    return (
        <Form className='search-form' onSubmit={(e) => { e.preventDefault(); handleSearchFormSubmit(); setValue(''); e.currentTarget.blur()}}>
        <InputGroup>
            <FormControl
            required
            placeholder="Search..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            />
            <Button type="submit">
                <SearchIcon />
            </Button>
        </InputGroup>
        </Form>
    )
}

export default SearchForm    