import { useState, React } from "react";
import { Navbar,Container,Nav,Form,FormControl,Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";


export default function SpotLog () {

    const CLIENT_ID = "ca6532944e264f4c83fbd96a7abeaaa6"
    const REDIRECT_URI = "http://127.0.0.1:8000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE= "token"

    return (
        <div>
            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
        </div>
    )
    
}