import { useState, React } from "react";
import { Navbar,Container,Nav,Form,FormControl,Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
const API_IMG="https://image.tmdb.org/t/p/w500/";
import MovieBox from "../components/MovieBox";


export default function Movies(){
    const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=62713f6075c9fb130af0c662da83b4fc&query"
    const [movie, setMovie] = useState([]);
    const [query, setQuery] = useState('')

    let location = useLocation();
    console.log('Location: ',location)

    const searchMovie = async(e)=>{
        e.preventDefault()
        console.log("Searching")
        try{
            const url =`https://api.themoviedb.org/3/search/movie?api_key=62713f6075c9fb130af0c662da83b4fc&query=${query}`
            const res= await fetch(url)
            const data= await res.json()
            console.log(data)
            setMovie(data.results)
            return 
        }
        catch(e){
            console.log(e)
        }
    }

    const handleChange=(e)=>{
        setQuery(e.target.value)
    }

    return(
        <div className="movieDiv">
            <div>
            <Form className="d-flex" onSubmit={searchMovie}>
                <FormControl
                type="search"
                placeholder="Movie Search"
                className="me-2"
                aria-label="search"
                name="query"
                value={query} onChange={handleChange}/>
                <Button variant="secondary" type="submit"> Search </Button>
            </Form>
            </div>
            <br />
        <div className="container" >
            <div className="grid">
                
                {/* if user.movieList display movies else disply search for a movie */}
                {movie ? (movie.map((movieReq)=><MovieBox key={movieReq.id} {...movieReq} className='list-item' state={location}/>)
                ): <h2>Sorry !! No Movies Found</h2>}
            </div>
        </div>







        </div>
    )
}