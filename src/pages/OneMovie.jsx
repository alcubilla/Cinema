import React,  {useState, useEffect } from 'react';



const OneMovie= (props)=> {

    const id= props.match.params.id;
    const [movie, setMovie] = useState([]); 

useEffect(() => {
    const API_URL = 'https://api.themoviedb.org/3/';    
    const API_KEY = '0d59c137d4b1775154cc094577fbe290'; 
    const url = `${API_URL}movie/${id}?api_key=${API_KEY}&language=en-US`;
    fetch (url)
    .then (response => response.json())
    .then (data => {
    setMovie(data);
   
    })
}, [id ]);



const IMAGE_BASE_URL ='http://image.tmdb.org/t/p/';
const imgUrl = `${IMAGE_BASE_URL}w500${movie.poster_path}`;

const calcTime = (time) => {
    const hours = Math.floor( time / 60);
    const mins = time % 60;
    return `${hours}h ${mins}m`;
  }

return (
   
<div className="row" style={{ height: 'auto', background:({imgUrl}) , backgroundSize: 'cover'}}>

<div className="col-6" id="oneimg">

        <div className="card text-center responsive p-2" id="cart-1">
            <img className="card-img-top responsive p-0" src={imgUrl} alt="no se encontro"/>
            <div className="card-body p-0">
                    <h2 className="card-title p-0">{movie.title}</h2>
                    <p className="card-text"></p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item p-0 mb-0">
                    <p>Got a {movie.vote_average} 
                    <meter low="69" high="80" max="10"
                    value={movie.vote_average}></meter> 
                    on the raiting.</p></li>
                    <li className="list-group-item p-0">Running Time:  {calcTime(movie.runtime)}</li>
                    <li className="list-group-item p-0">Budget: {movie.budget}</li>
                    <p className="mb-0">Revenue: {movie.revenue} </p>
                </ul>
                <div className="card-footer text-muted p-0">
                    {movie.overview}
            
                </div>
            </div>
        </div>


 

</div>



);

}
export default OneMovie;