import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import Movie from "../components/Movie"

function Detail(){
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const {id} = useParams();
    const fetchUrl = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    
    useEffect(()=>{
        const getMovie = async () =>{
            const json = await( await fetch(fetchUrl)).json();
           console.log(json.data.movie);
            setMovie(json.data.movie);
            setLoading(false);
        };
        getMovie();
      },[fetchUrl])
    console.log();
    return <div>
            <img src={movie.medium_cover_image} alt={movie.title} />
            <h1>{movie.title}</h1>
            {loading? (<h1>Loading...</h1>) :(<h2>★{movie.rating}/10.0 : runtime 
                  {movie.runtime}</h2>)}
            <p>{movie.description_intro}</p>
            <ul>
                {movie.genres?.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
            
        </div>
}

export default Detail;