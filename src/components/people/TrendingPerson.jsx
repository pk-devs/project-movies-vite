
import { useEffect, useState } from 'react'

const apiKey = "ea6a347864d3baf0357cebd9eb28097c"
const timeWindow = "day"
const urlTrendingPerson = `https://api.themoviedb.org/3/trending/person/${timeWindow}?api_key=${apiKey}`


export const TrendingPeople = () => {
    const [person, setPerson] = useState([])

    useEffect(() => {
      fetch(urlTrendingPerson)
        .then(response => {
          if(!response.ok) {
            throw new Error("No connection")
          }
          return response.json()
        })
        .then(data => {
          setPerson(data.results)
          console.log(data)
        })
        .catch(error => console.error("Error:", error))
    }, [])


  const imageUrl = "https://image.tmdb.org/t/p/w300"

  return (
    <div>
      <h1>Trending People and movies they are known for</h1>
      <div className="grid-container">
      {person.map(person => (
        <div className='person' key={person.id}>
         <h2>{person.name} ({person.known_for_department})</h2>
          
          <div className='known-for'>
            {person.known_for.map((item, index) => (
              <div key={index}>
                {item.backdrop_path && (
                  
                  <img src={`${imageUrl}${item.backdrop_path}`} alt="Movie Image" />
                  // <div className="overlay">
                  //   <span>{item.title}</span>
                  // </div>
                )}
              </div>
            ))}

            

          </div>
          
          
        </div>
      ))}
    </div>
    </div>
  )
}
