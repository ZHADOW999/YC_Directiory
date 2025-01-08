import React from 'react'

import Form from "next/form";
import SearchFormReset from './SearchFormReset';
import { Search } from 'lucide-react';



const SearchForm = ({query}:{query?:string}) => {
  // handle form submission and update query state when user types in search input



  return (
    <Form action="/" scroll={false} className='search-form'>
      <input
      name='query'
      defaultValue={query}
      className='search-input'
      placeholder='search Startups'
      />
      <div className='flex gap-2'>
        {query && <SearchFormReset/>}
        <button type='submit' className='search-btn text-white'><Search className='size-5'/> </button>
      </div>
    </Form>
  )
}

export default SearchForm