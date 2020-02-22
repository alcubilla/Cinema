import React,  {useState, useEffect } from 'react';



const OneMovie= (props)=> {

    const id= props.id;
    const [movie, setMovie] = useState([]); 
    const [actors, setActors] = useState([]); 
    const [directors, setDirectors] =useState ({});
    const IMAGE_BASE_URL ='http://image.tmdb.org/t/p/';
    const imgUrl = `${IMAGE_BASE_URL}w500${movie.poster_path}`;
    const API_URL = 'https://api.themoviedb.org/3/';    
    const API_KEY = '0d59c137d4b1775154cc094577fbe290'; 


    useEffect(() => {
    const url = `${API_URL}movie/${id}?api_key=${API_KEY}&language=en-US`;
    fetch (url)
    .then (response => response.json())
    .then (data => {
    setMovie(data);
    })}, [id ]);


    useEffect(() => {
    const actorsUrl = `${API_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    fetch (actorsUrl)
    .then (response => response.json())
    .then (data => {
    setActors(data.cast);
    setDirectors(data.crew.filter(member => member.job === 'Director'));
    })}, [id]);
        
console.log(actors);

    const calcTime = (time) => {
    const hours = Math.floor( time / 60);
    const mins = time % 60;
    return `${hours}h ${mins}m`;}


    return (

       <>
        <div className="row responsive" style={{background:({imgUrl})}}>
            <div className="col-6" id="oneimg">
                <div className="card text-center responsive p-2" id="cart-1">
                    <img className="card-img-top responsive p-0" src={imgUrl} alt="no se encontro"/>
                    <div className="card-body p-0">
                        <h2 className="card-title p-0">{movie.title}</h2>
                        <p className="card-text"></p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item p-0 mb-0">
                            <p>Got a {movie.vote_average} -
                                <meter low="69" high="80" max="10"
                                    value={movie.vote_average}>
                                </meter> 
                                on the raiting.
                            </p>
                        </li>
                        <li className="list-group-item p-0">Running Time:  {calcTime(movie.runtime)}</li>
                        <li className="list-group-item p-0">Budget: {movie.budget}</li>
                        {directors.length > 0 && directors.map((directors) => 
                      { return <li className="list-group-item p-0" key={directors.id}>Director: {directors.name}</li>})}
                        <h5 className="mb-0">Revenue: {movie.revenue} </h5>
                    </ul>
                    <div className="card-footer text-muted p-0">{movie.overview}</div>
                </div> 
            </div>   
        </div>

        <table class="table table-borderless table-dark table-responsive">
        <tr>
            {actors.length > 0 && actors.map((actor) =>  { return <>
            <th scope="col">
            <img src={`${IMAGE_BASE_URL}w154/${actor.profile_path}`}  alt="No se encontro la imagen"/> 
            <p>{actor.name}</p> </th> </> })}
        </tr>
     
</table>
    </>
   
   





    );
}
export default OneMovie;