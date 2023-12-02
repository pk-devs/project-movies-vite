import { useEffect, useState } from 'react'


const apiKey = "ea6a347864d3baf0357cebd9eb28097c"
const urlAirToday = `https://api.themoviedb.org/3/tv/airing_today?api_key=${apiKey}`



export const TvAirToday = () => {
 const [tvShow, setTvShow] = useState([])

 useEffect (() => {
    fetch(urlAirToday)
        .then(response => {
            if (!response.ok) {
                throw new Error("No connection")
            }
            return response.json()
        })
        .then(data => {
            setTvShow(data.results)
        })
        .catch(error => console.error("Error:", error))
 }, [])

    return (
    <div>
        <h1 className='h1-tv'>Tv Shows Aired Today</h1>
        {tvShow.map(tvShow => (
            <div key={tvShow.id}>
                <h3>{tvShow.name}</h3>
                <h4>{tvShow.origin_country}</h4>
                <p>{tvShow.overview}</p>
            </div>
        ))}
    </div>
  )
}

