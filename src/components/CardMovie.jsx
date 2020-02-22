import React from "react";
import {useHistory} from "react-router-dom";

const Movie = (props) => {
    let history =useHistory();
    const IMAGE_BASE_URL ='http://image.tmdb.org/t/p/';
    const imgUrl = `${IMAGE_BASE_URL}w500${props.data.poster_path}`;
    
    const goImage = () => {
        history.push(`/onemovie/${props.data.id}`);
    };

    return (
        <div className="card card-inverse responsive" id="img1" >
         <img src={imgUrl} className="card-img-top responsive" alt="No se encontro" value= {props.data.id} onClick={goImage} />
        </div>
    );
}

export default Movie;

