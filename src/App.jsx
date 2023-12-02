// import { TvAirToday } from "./components/TvAirToday"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { TrendingMovie } from "./components/movies/TrendingMovie"
import { Movie } from "./components/movies/Movie"

export const App = () => {
  return (
  <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<TrendingMovie />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </div>
  </BrowserRouter>
  )
}
