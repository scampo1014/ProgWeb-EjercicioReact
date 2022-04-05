import { useState } from "react";

function Museum(props) {
    //console.log("Props", props);

    const [ name ] = useState(props.museum.name);
    const [ city ] = useState(props.museum.city);
    const [ description ] = useState(props.museum.description);
    const [ address ] = useState(props.museum.address);
    const [ image ] = useState(props.museum.image);

    return(
        <div className="card col-3 m-3 bg-grey text-center" onClick={ () => props.showArtworks(props.museum.id) }>
            <img src={ image } className="card-img-top img-fluid my-2" alt={name}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{city}</p>
            </div>
        </div>
    );

}

export default Museum;