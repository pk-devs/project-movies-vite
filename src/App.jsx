// import { TvAirToday } from "./components/TvAirToday"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { TrendingMovie } from "./components/movies/TrendingMovie"
import { Movie } from "./components/movies/Movie"
import { Test } from "./components/Test"

export const App = () => {
  return (
  <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<TrendingMovie />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  </BrowserRouter>
  )
}
