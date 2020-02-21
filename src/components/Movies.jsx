import React from "react";
import Movie from "./Movie"

const Movies = (props) => {
  

        const movies = props.data.map((movie, idx) => (
            <div key={idx} className="col-3">
             <Movie data={movie} />
            </div>
          ));
            
          return (<>{movies}</>);
   
     

}
 
export default Movies;