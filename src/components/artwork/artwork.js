import { useState } from "react";

function Artwork(props) {

    const [ description ] = useState(props.artwork.description);
    const [ name ] = useState(props.artwork.name);
    const [ type ] = useState(props.artwork.type);
    const [ year ] = useState(props.artwork.year);

    return(
        <div className="row justify-contents-center">
            <div className="card col-2 m-2 bg-grey text-center">
                <img src = "https://picsum.photos/id/237/180/150" className="card-img-top" alt={name}/>
                <div className="card-body">
                    <p className="card-text">{name}</p>
                </div>

            </div>
            <div className="card col-8 m-2 bg-grey">
                <div className="card-body">
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );

}

export default Artwork;