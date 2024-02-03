import React,{createContext, useContext, useEffect, useState} from "react";

const MovieContext = createContext()

const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`;

const API_URL_1 = `https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}`;
const MovieProvider =({children})=>{
    const [Trendingmovie,setTrendingMovie] = useState([]);
    const [Ratedmovie,setRatedMovie] = useState([]);

    const fetchTrending = async () =>{
        const response = await fetch(API_URL)
        const data = await response.json()
        // console.log(data);
        setTrendingMovie(data.results)
    }
    useEffect(()=>{
        fetchTrending();
    },[])

    // TOP RATED MOVIE
    const fetchRated = async () =>{
        const response = await fetch(API_URL_1)
        const rateddata = await response.json()
        // console.log(rateddata)
        setRatedMovie(rateddata.results)
    }
    useEffect(()=>{
        fetchRated();
    },[])
   
    return (
        <MovieContext.Provider value={{Trendingmovie,Ratedmovie}}>
            {children}
        </MovieContext.Provider>
    )
}
const useGlobalContext = ()=>{
    return useContext(MovieContext)
}
export {MovieContext,MovieProvider,useGlobalContext}
