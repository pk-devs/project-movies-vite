import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom"

export const Movie = () => {
  const { id } = useParams()
  const [movieDetails, setMovieDetails] = useState(null);
  const apiKey = "ea6a347864d3baf0357cebd9eb28097c"
  
  useEffect(() => {
    
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("No connection")
            }
            return response.json()
        })
        .then(data => {
            setMovieDetails(data)
        })
        .catch(error => console.error("Error:", error))
  }, [id])

  if (!movieDetails) 
  return <div>Loading...</div>

  const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
  const posterUrl = `https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`

  return (
      <div className="movie-details" style={{ backgroundImage: `url(${backdropUrl})` }}>
         <Link to="/"> <button>Back to movies</button> </Link>
          <div className="movie-content">
              <img src={posterUrl} alt={movieDetails.title} className="movie-poster" />
              <div className="movie-info">
                  <h1>{movieDetails.title}</h1>
                  <p><strong>Rating: {movieDetails.vote_average.toFixed(1)} / 10</strong></p>
                  <p>{movieDetails.overview}</p>
              </div>
          </div>
      </div>
  )
}

