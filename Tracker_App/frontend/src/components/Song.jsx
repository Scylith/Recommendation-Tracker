import { useState, React, useEffect } from "react";
import { Navbar,Container,Nav,Form,FormControl,Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
const API_IMG="https://image.tmdb.org/t/p/w500/";
import SongBox from "../components/SongBox";

export default function Song(){
    const [songs, setSongs] = useState([]);
    const [query, setQuery] = useState('')
    const [login, setLogin] = useState(false)
    const [token, setToken] = useState("")
    const CLIENT_ID = "ca6532944e264f4c83fbd96a7abeaaa6"
    const REDIRECT_URI = "http://localhost:8000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE= "token"



    let location = useLocation();
    console.log('Location: ',location)

    const searchSongs = async(e)=>{
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

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        // getToken()


        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token)

    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }
    

    return(
        <div >
            <div>
            <Form className="d-flex" onSubmit={searchSongs}>
                <FormControl
                type="search"
                placeholder="Song Search"
                className="me-2"
                aria-label="search"
                name="query"
                value={query} onChange={handleChange}/>
                <Button variant="secondary" type="submit"> Search </Button>
            </Form>
            </div>
            <br />

        <div className="container">


            {!token ? <div>
            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
                    </div>
            
            : <button onClick={logout}>Logout</button>}
            
            
            
            <div className="grid" > 
                 
            {songs && token? (songs.map((songReq)=><SongBox key={songReq.id} {...songReq} className='list-item' state={location}/>)
            ): <h2>Sorry !! No Songs Found</h2>}
        </div>
            
            
        </div>






        </div>
    )
}