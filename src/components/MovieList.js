import {useState} from "react";
import './App.css'
import MovieCards from './MovieCard'
const MovieList = () => {


    const [movie]=useState({
        title:"",
        description:"",
        posterURL:"#",
        rating:"",
    });

    return (
        <div className="BigCardMovie">            


        <MovieCards title={movie.title="Breaking Bad"}
               desc={movie.description='Created by Vince Gilligan, the series follows the exploits of Walter White, who discovers a new purpose in life when he learns he has terminal cancer and turns to a life of crime to provide for his family"'}
               post={movie.posterURL="#"}
               rateing={movie.rating="3.8"}/>






                {/* <MovieLists titlelist={movie.title}
                   desclist={movie.description}
                   post={movie.posterURL}
                   rateinglist={movie.rating} /> */}

       
    

        </div>

     );
}

export default MovieList;