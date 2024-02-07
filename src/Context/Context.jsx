import React, { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();




const MovieProvider = ({ children }) => {
  // Trending Movie
  const [Trendingmovie, setTrendingMovie] = useState([]);

  const fetchTrending = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${
      import.meta.env.VITE_API_KEY
    }`);
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

  // Upcoming movies
  const [tvseriesmovies, setTvSeriesMovies] =useState([]);
  const [upcomingVisible,setUpcomingVisible] = useState(12)

  const fetchTvSeriesmovies = async () =>{
    const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?&api_key=${import.meta.env.VITE_API_KEY}`);
    const TvseriesData = await response.json();
    // console.log(discoverData);
    setTvSeriesMovies(TvseriesData.results);
  }
  useEffect(()=>(
    fetchTvSeriesmovies()
  ),[])

  const upcomingHandle = ()=>{
    setUpcomingVisible((prevValue)=> prevValue + 4)
  }

  // Search Movies
  const [searchMovies,setSearchMovies] = useState([]);
  const [searchQuery,setSearchQuery] = useState('Avengers');

  const fetchSearchMovies = async ()=>{
    
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${searchQuery}`)
      const data = await response.json();
      setSearchMovies(data.results)

    
  }
  useEffect(()=>{
    fetchSearchMovies()
  },[])
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
        tvseriesmovies,
        upcomingVisible,
        upcomingHandle,
        searchMovies,searchQuery,setSearchQuery,fetchSearchMovies
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
