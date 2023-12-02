import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

const apiKey = "ea6a347864d3baf0357cebd9eb28097c"
const timeWindow = "day"
const urlTrendingMovie = `https://api.themoviedb.org/3/trending/movie/${timeWindow}?api_key=${apiKey}`

export const TrendingMovie = () => {
 const [movies, setMovies] = useState([])

 useEffect (() => {
    fetch(urlTrendingMovie)
        .then(response => {
            if (!response.ok) {
                throw new Error("No connection")
            }
            return response.json()
        })
        .then(data => {
            setMovies(data.results)
            console.log(data)
        })
        .catch(error => console.error("Error:", error))
 }, [])

    const posterUrl = "https://image.tmdb.org/t/p/w342"
    
    return (
        <div className='grid-container2'>
            {movies.map(movie => (
                <div className='movie-container' key={movie.id}>
                    <img src={`${posterUrl}${movie.poster_path}`} alt={movie.title} />
                    <Link to={`/movie/${movie.id}`}>
                        <div className="overlay">
                            <h2>{movie.title}</h2>
                            <h3>Released: {movie.release_date}</h3>
                        </div> 
                    </Link>
                </div> 
            ))}
        </div>  
    )}

