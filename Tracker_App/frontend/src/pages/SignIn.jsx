import React from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

export default function SignIn(){

    const signIn = async ()=>{
        event.preventDefault()
        let email = document.getElementById("signInEmail").value
        let password = document.getElementById("signInPassword").value
        let myResponse = await axios.post('signIn/', {'email': email, 'password':password})
        console.log(myResponse.data)
        window.location.href="/"
    }
    

    return(
        <div>
            <div class="needs-center">
                <h2> Sign In </h2>
                </div>
            <form class="needs-center" onSubmit={signIn}>
                
                <input class="needs-center" id='signInEmail' placeholder="email" />
                <input class="needs-center" id='signInPassword' placeholder="password" type="password" />
                <button  class="needs-center signIn"onClick={signIn}>Sign In</button>
            </form>

        </div>
    )
}