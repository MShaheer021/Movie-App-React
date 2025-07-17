import React from 'react'
import { Link, useParams } from 'react-router-dom'
import UseFetch from './UseFetch'

export default function Profile() {
    let { id } = useParams()
    let { data } = UseFetch(`&i=${id}`)

    if(data){
        const { Poster: poster, Title: title, Plot: plot, Year: year } = data
        
        return (
            <div>
                <div className="w-[90%] m-auto mt-10 flex">
              <img src={poster} alt="" />
              <div className="w-[30%]">
                <h1 className='text-3xl font-bold font-serif ml-10'>{title}</h1>
                <p className="font-serif ml-10 mt-5 text-[gray]">{plot}</p>
                <h1 className='text-3xl font-bold font-serif mt-5 ml-10'>{year}</h1>
                <Link to={"/"}>
                    <button className='text-2xl font-serif font-bold text-[white] ml-10 mt-5 p-3 rounded-lg bg-[#0084ff]'>Back To Home</button>
                </Link>
              </div>
                </div>
            </div>
        )
        }
}
