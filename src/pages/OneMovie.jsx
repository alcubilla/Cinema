import React from 'react';
import FormOneMovie from "../containers/FormOneMovie"

const OneMovie= (props)=> {

    return (
       <FormOneMovie  id={props.match.params.id} />
    );
}
export default OneMovie;