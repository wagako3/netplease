import React from "react"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { MovieContext } from "./App"

export default function Movies(){

    const {movieList, upcomingList, tvList, topRatedTvList, selectedMovie, setSelectedMovie} = useContext(MovieContext)
    // console.log(mov)
    

    function movieClicked(value) {
        // window.location = '/movieDetails';  
        setSelectedMovie(value)
    }

    return(
        <div className="movie--selection">
            <div className="movie--header">
                <div>Popular Movies</div>
                <Link to="/popularMovies">See all</Link>
            </div>
            <div className="movie--array">
                {movieList.slice(0, 6).map((movie, id) =>(
                    <Link to="/movieDetails">
                    <div className="movie--box"
                    key={id}
                    onClick={() => movieClicked(movie)}>
                        <div className="movie--image">
                            <img className="movie--poster" width="100%" height="100%" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                            <div className="movie--summary">
                                <p>{movie.overview}</p>
                            </div>
                        </div>
                        <p className="movie--name">{movie.original_title}</p>
                    </div>
                    </Link>
                ))}
            </div>
            
            <div className="movie--header">
                <div>Upcoming Movies</div>
                <Link to="/upcomingMovies">See all</Link>
            </div>
            <div className="movie--array">
                {upcomingList.slice(0, 6).map((movie, id) =>(
                    <Link to="/movieDetails">
                    <div className="movie--box"
                    key={id}
                    onClick={() => movieClicked(movie)}>
                        <div className="movie--image">
                            <img className="movie--poster" width="100%" height="100%" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                            <div className="movie--summary">
                                <p>{movie.overview}</p>
                            </div>
                        </div>
                        <p className="movie--name">{movie.original_title}</p>
                    </div>
                    </Link>
                ))}
            </div>

            <div className="movie--header">
                <div>TV Series</div>
                <Link to="/tvSeries">See all</Link>
            </div>
            <div className="movie--array">
                {tvList.slice(0, 6).map((movie, id) =>(
                    <Link to="/movieDetails">
                    <div className="movie--box"
                    key={id}
                    onClick={() => movieClicked(movie)}>
                        <div className="movie--image">
                            <img className="movie--poster" width="100%" height="100%" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                            <div className="movie--summary">
                                <p>{movie.overview}</p>
                            </div>
                        </div>
                        <p className="movie--name">{movie.name}</p>
                    </div>
                    </Link>
                ))}
            </div>

            <div className="movie--header">
                <div>Top Rated TV Series</div>
                <Link to="/topRatedTvSeries">See all</Link>
            </div>
            <div className="movie--array">
                {topRatedTvList.slice(0, 6).map((movie, id) =>(
                    <Link to="/movieDetails">
                    <div className="movie--box"
                    key={id}
                    onClick={() => movieClicked(movie)}>
                        <div className="movie--image">
                            <img className="movie--poster" width="100%" height="100%" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                            <div className="movie--summary">
                                <p>{movie.overview}</p>
                            </div>
                        </div>
                        <p className="movie--name">{movie.name}</p>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

