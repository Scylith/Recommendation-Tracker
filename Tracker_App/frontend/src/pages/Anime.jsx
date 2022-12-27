import { useState, React } from "react";
import { Navbar,Container,Nav,Form,FormControl,Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
const API_IMG="https://image.tmdb.org/t/p/w500/";
import AnimeBox from "../components/AnimeBox";

export default function Anime(){
    const [anime, setAnime] = useState([]);
    const [query, setQuery] = useState('')

    let location = useLocation();
    console.log('Location: ',location)

    const searchAnime = async(e)=>{
        e.preventDefault()
        console.log("Searching")
        try{
            const url =` https://api.jikan.moe/v4/anime?q=${query}`
            const res= await fetch(url)
            const data= await res.json()
            console.log('The Data: ', data.data[0])
            setAnime(data.data)
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
        <div >
            <div>
            <Form className="d-flex" onSubmit={searchAnime}>
                <FormControl
                type="search"
                placeholder="Anime Search"
                className="me-2"
                aria-label="search"
                name="query"
                value={query} onChange={handleChange}/>
                <Button variant="secondary" type="submit"> Search </Button>
            </Form>
            </div>
            <br />

        <div className="container">
            <div className="grid" > 
                
                {/* if user.movieList display movies else disply search for a movie */}
                {anime ? (anime.map((animeReq)=><AnimeBox key={animeReq.id} {...animeReq} className='list-item' state={location}/>)
                ): <h2>Sorry !! No Movies Found</h2>}
            </div>
        </div>






        </div>
    )
}