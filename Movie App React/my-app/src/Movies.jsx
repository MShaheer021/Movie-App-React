import React from 'react'
import { UseGlobelContext } from './Context'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
const url =
    'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

export default function Movies() {
    let { data } = UseGlobelContext()

    if (data) {

        return (
            <div className="w-[90%] m-auto mt-10 flex flex-wrap justify-center">
                {data.map((movie) => {
                    const { imdbID: id, Poster: poster, Title: title, Year: year } = movie
                    return (
                        <Link to={`/movies/${id}`} key={id} className='w-[28%] ml-10 cursor-pointer mt-8 rounded-lg overflow-hidden relative Link_Hover'>
                            <img className='w-[100%]' src={poster ? poster : url} alt="" />
                            <div className="absolute Bottom1 w-[100%] h-[80px] bg-[black]">
                                <h1 className='text-2xl text-[white] text-center'>Name: {title}</h1>
                                <h1 className='text-2xl text-[white] text-center'>Year:{year}</h1>
                            </div>
                        </Link>
                    )
                })}

            </div>
        )
    }
}
