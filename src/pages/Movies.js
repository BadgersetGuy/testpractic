
import { useEffect, useState } from "react";


const Movies = () => {

    const [movies, setMovies] = useState(null);

    useEffect(() => {

        // get data from api endpoint and set it in state
        fetch('https://api.tvmaze.com/shows')
        .then(response => response.json())
        .then(data => {
            console.log(data, 'data')
            setMovies(data);
        })

    }, [])

    return (
      <div className="flex flex-col items-center gap-8 p-8">
        {movies ? movies.map((movie, index) => {
            return (
                <div key={index} className="flex flex-wrap gap-8 p-8 bg-slate-100" style={{minWidth: "40vw"}}>
                    <div>
                        <img src={movie.image.medium} />
                    </div>

                    <div className="flex flex-col justify-between gap-8" style={{maxWidth: "50vmax"}}>
                        <div className="text-3xl font-bold">{movie.name}</div>

                        <p className="font-light">{movie.summary}</p>

                        <div className="flex gap-8 justify-between">
                            <div>{movie.genres.map((item, index) => item + (index == movie.genres.length -1 ? '' : ', '))}</div>

                            <div><span className="bold">Rating: </span>{movie.rating.average}</div>                        
                        </div>

                    </div>
                </div>
            )}
        ) : null}
        
      </div>
    );
  }
  
  export default Movies;