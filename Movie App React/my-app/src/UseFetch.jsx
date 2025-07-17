import { useEffect, useState } from 'react'
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=c0953a27`

export default function UseFetch(url) {

    let [isloading, setloading] = useState(true)
    let [error, setError] = useState({ show: false, msg: "" })
    let [data, setdata] = useState(null)


    let FetchMovies = async (MovieData) => {
        setloading(true)
        try {

            let resp = await fetch(MovieData)
            let Data = await resp.json()
            if (Data.Response === "True") {
                setdata(Data.Search || Data)
                setError({ show: false, msg: "" })
            }
            else {
                setError({ show: true, msg: Data.Error })
            }
            setloading(false)
        } catch (error) {
      console.log(error)
        }
    }


    useEffect(() => {
        FetchMovies(`${API_ENDPOINT}${url}`)
    }, [url])
    return { isloading, error, data }


}
