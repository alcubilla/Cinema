import React from "react";

const Movies = (props) => {

const IMAGE_BASE_URL ='http://image.tmdb.org/t/p/';
const imgUrl = `${IMAGE_BASE_URL}w500${props.data.poster_path}`;
          
return (


       
            <div className="card">
                <img src={imgUrl} className="card-img-top" alt="No se encontro"/>
                
            </div>
      );
   
     

}
 
export default Movies;