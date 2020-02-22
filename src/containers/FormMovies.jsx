import React, { useState, useEffect } from 'react';
import Movies from "../components/Movies";

const Home = () => {

    const [newMovie, setNewMovie] = useState( [] ); 
    const [allMovies, setAllMovies] = useState( [] ); 
    const [currentPage, setCurrentPage] =useState (1);
    const API_URL = 'https://api.themoviedb.org/3/';
    const API_KEY = '0d59c137d4b1775154cc094577fbe290'; 
    const IMAGE_BASE_URL ='http://image.tmdb.org/t/p/';
   
  
 

    useEffect(() => {
    const url =`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    fetch (url)
    .then (response => response.json())
    .then (data => {
    setNewMovie(data.results[0]);
    setAllMovies(data.results);})}, [ ]);


  
    const goMore = (e) => {
    e.preventDefault();        
    const url = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage+1}`
    fetch(url)
    .then(response => response.json())
    .then(info => {   
    setAllMovies(info.results); });                
    setCurrentPage(currentPage+1)                       
    }

    const backUrl = `${IMAGE_BASE_URL}w1280${newMovie.backdrop_path}`;

    return (
        <>
            <div className="row container-fluid m-0 p-0" id="imagePadre">
                <img src={backUrl} className="img-fluid card-img responsive p-2"  alt="No se encontro la imagen"/> 
                <div className="card-title" id="card-title1">  
                {newMovie.title}   
                <p id="p1">{newMovie.overview}</p>    
                </div>
            </div> 
            
            <div className="row">   
                <Movies data={allMovies} />  
            </div>

            <div className="row ">   
                <button className="btn btn-secondary btn-lg btn-block" onClick={goMore} >
                    Ver más Películas
                </button>
            </div>
            
        </>
    );
}

export default Home;