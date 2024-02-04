import React, { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

// Trending Movie api
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${
  import.meta.env.VITE_API_KEY
}`;

const MovieProvider = ({ children }) => {
  // Trending Movie
  const [Trendingmovie, setTrendingMovie] = useState([]);

  const fetchTrending = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    // console.log(data);
    setTrendingMovie(data.results);
  };
  useEffect(() => {
    fetchTrending();
  }, []);

  // TOP RATED MOVIE Api
  const [Ratedmovie, setRatedMovie] = useState([]);
  // pageination
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchRated = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${
        import.meta.env.VITE_API_KEY
      }&page=${page}`
    );
    const rateddata = await response.json();
    // console.log(rateddata)
    setRatedMovie(rateddata.results);
    setTotalPages(rateddata.total_pages);
  };
  useEffect(() => {
    fetchRated();
  }, [page]);

  const nextPage = () => {
    setPage(page + 1);
  };
  const previousPage = () => {
    setPage(page - 1);
  };

  // Now Playing Movies
  const [NowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [visible, setVisible] = useState(12);

  const fetchNowPlayMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const nowplaydata = await response.json();
    console.log(nowplaydata);
    setNowPlayingMovies(nowplaydata.results);
  };
  useEffect(() => {
    fetchNowPlayMovies();
  }, []);

  const handleSeeMore = () => {
    setVisible((prevValue) => prevValue + 4);
  };
  return (
    <MovieContext.Provider
      value={{
        Trendingmovie,
        Ratedmovie,
        page,
        totalPages,
        nextPage,
        previousPage,
        NowPlayingMovies,
        handleSeeMore,
        visible,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(MovieContext);
};
export { MovieContext, MovieProvider, useGlobalContext };
