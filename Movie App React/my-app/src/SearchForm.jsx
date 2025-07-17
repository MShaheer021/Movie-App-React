import React from 'react'
import { UseGlobelContext } from './Context'

export default function SearchForm() {

    let {query,setquery,error} = UseGlobelContext()
    
  return (
    <div>
        <div className="w-[100%] ">
            <form onSubmit={(e)=> e.preventDefault()}>
                
            <h1 className='text-4xl font-serif font-bold ml-20 mt-10'>Search Movies</h1>
            <input
            className='p-3 ml-20 mt-5 outline-none bg-[white] rounded-lg text-lg font-serif text-[gray]'
            type="text" 
            value={query}
            onChange={(e)=> setquery(e.target.value)}
            />
            {error.show && <div className='text-xl text-[red] font-serif font-bold ml-20 mt-5'>{error.msg}</div>}
            </form>
        </div>
      
    </div>
  )
}
