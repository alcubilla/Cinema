import React from "react";
import CardMovie from "./CardMovie"

const Movies = (props) => {
  const movies = props.data.map((movie, idx) => (
    <div key={idx} className="col-3">
      <CardMovie data={movie} />
    </div>
  ));
            
  return (<>{movies} </>);
}
 
export default Movies;