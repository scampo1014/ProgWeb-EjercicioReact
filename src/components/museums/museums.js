import { useEffect, useState } from "react";
import Museum from "../museum/museum";
import Artwork from "../artwork/artwork";

function Museums() {
    
    const url ="https://back-museums-uniandes.herokuapp.com/api/museums";

    const [museums, setMuseums] = useState([]);

    const [artworks, setArtworks] = useState([]);

    const [displayArtworks, setDisplayArtworks] = useState();

    const [museoName, setMuseoName] = useState("MUSEOS");

    useEffect(()=>{
        fetch(url).then(res=> res.json()).then(museums=>{
            //console.log("Museums",museums);
            setMuseums(museums);
        });
    });

    const showArtworks = (mid) => {
        //console.log("Showing Artworks", mid);
        //console.log("Museum: ", museums.find(m => m.id === mid))
        //console.log("Artworks: ", museums[id].artworks);
        //setArtworks(museums[id].artworks);
        const m = museums.find(m => m.id === mid);
        //console.log(m.artworks);
        setDisplayArtworks(1);
        setMuseoName(m.name + ": Obras principales");
        //console.log(displayArtworks);
        setArtworks(m.artworks);
    }

    const showMuseums = () => {
        setDisplayArtworks(undefined);
        setMuseoName("Museos");
    }

    const renderDisplay = () => {
        if(displayArtworks === undefined) {
            //console.log("museos");
            return museums.map(m => <Museum key = { m.id } museum = { m } showArtworks={ showArtworks }/>)
        }
        else {
            //console.log("no museos");
            return artworks.map(a => <Artwork key = { a.id } artwork = { a }/>)
        }
    } 

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">Home</li>
                    <li className="breadcrumb-item" onClick={ () => showMuseums() }>Museos</li>
                </ol>
            </nav>
            <div className="container-fluid">
                <div className="d-flex row bg-grey text-center">
                    <h1><strong>{museoName}</strong></h1>
                </div>
                <hr/>
                <div className="row">
                    
                    { renderDisplay() }
                    
                </div>    
            </div>
        </div>
    )
}

export default Museums;