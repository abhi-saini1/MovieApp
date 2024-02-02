import React,{createContext, useContext, useEffect, useState} from "react";

const MovieContext = createContext()

const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`;
const MovieProvider =({children})=>{
    const [Trendingmovie,setTrendingMovie] = useState([]);

    const fetchTrending = async () =>{
        const response = await fetch(API_URL)
        const data = await response.json()
        console.log(data);
        setTrendingMovie(data.results)
    }
    useEffect(()=>{
        fetchTrending();
    },[])

    return (
        <MovieContext.Provider value={{Trendingmovie}}>
            {children}
        </MovieContext.Provider>
    )
}
const useGlobalContext = ()=>{
    return useContext(MovieContext)
}
export {MovieContext,MovieProvider,useGlobalContext}
