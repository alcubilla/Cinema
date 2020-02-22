import React, { useState, useEffect } from 'react';
import Movies from "../components/Movies";
// import MoreMovies from "../components/MoreMovies";
import Button from "../components/Button";

const Home = () => {

    const [newMovie, setNewMovie] = useState( [] ); 
    const [allMovies, setAllMovies] = useState( [] ); 
    
 

    useEffect(() => {
        const API_URL = 'https://api.themoviedb.org/3/';
        const API_KEY = '0d59c137d4b1775154cc094577fbe290'; 
        const url =`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    
        fetch (url)
        .then (response => response.json())
        .then (data => {
           
            setNewMovie(data.results[0]);
            setAllMovies(data.results);
        })
    }, [ ]);



    const IMAGE_BASE_URL ='http://image.tmdb.org/t/p/';
   
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
        <div class="col-xl-9 offset-md-3 p-4"> <Button title="ver mas" /> </div>
            
        </div>

      </>
   
    );
}

export default Home;