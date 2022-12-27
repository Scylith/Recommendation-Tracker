import React from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import { Container } from "react-bootstrap"
// import { Button } from "react-bootstrap"



export default function Home(){
    const [user, setUser]= useState(null)

const signOut = async ()=>{
    let myResponse = await axios.post('signOut/')
    if (myResponse.data["signOut"]=true){
        window.location.reload()

    }
        
}

const curr_user=async()=> {
    let myResponse=await axios.get('current_user')
    let theUser= myResponse.data && myResponse.data[0] && myResponse.data[0].fields
    console.log(theUser)
    setUser(theUser)
    
    
}

useEffect(()=> {

    
    user ? console.log('Use effect user: ', user) : curr_user()

    
}, [user])

    return(
        <div >
            
            <h1 class="needs-center">Welcome to IdleMe</h1>
            <div>{user && <h1 class="needs-center">{user.email}</h1>}</div>
            
            <Container className="needs-center mycont">
            {user && <button class="needs-center sign-out" onClick={signOut} >Sign Out</button>}
            {!user && <div>
                <Link to="/SignIn" element={<SignIn />} >
                    
                    <button className="needs-center signIn">Sign In </button>
                    
                    </Link>
                <Link to="/SignUp" element={<SignUp />} >
                    
                <button className="needs-center signUp">Sign Up </button> 
                    
                    </Link>     
                        
                    </div> }
                    </Container>
            
        </div>
        
    )
}