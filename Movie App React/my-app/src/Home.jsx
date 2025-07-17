import React from 'react'
import SearchForm from './SearchForm'
import Movies from './Movies'

export default function Home() {
  return (
    <div className='w-[100%] bg-[gainsboro] p-1 pb-16'>
      <SearchForm />
      <Movies />
    </div>
  )
}
