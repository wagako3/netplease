import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

export default function Preview(){
        const [trendingList, setTrendingList] = React.useState([])

        const getTrending = () => {
                fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=649f645abf4721a3027659369cc67c24')
                .then(response => response.json())
                .then(data => setTrendingList(data.results))
        }
        React.useEffect(() => {
                getTrending()
                },[])
        
        // const slideImage = [{trendingList}]


    return(
            <div className="preview--box">
                {trendingList.slice(0,1).map((movie, id) =>(
                        <div>
                                <img width="100%" height="100%" key={id} src={`https://www.themoviedb.org/t/p/original${movie.backdrop_path}`} />
                                <h1 className="preview--title">{movie.original_title}</h1>
                        </div>
                ))}
            </div>
        
        
    )
}
