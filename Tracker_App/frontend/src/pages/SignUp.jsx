import React from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

export default function SignUp(){

    const signUp = async ()=>{
        event.preventDefault()
        let email = document.getElementById("signUpEmail").value
        let password = document.getElementById("signUpPassword").value
        let firstName = document.getElementById("firstName").value
        let lastName = document.getElementById("lastName").value
        let myResponse = await axios.post('signUp/', {'email': email, 'password':password, 'first_name': firstName, 'last_name': lastName})
        console.log(myResponse.data)
        window.location.href="http://127.0.0.1:8000/#/SignIn"
    }


    return(
        <div>
            <div>
                <h2 class="needs-center"> Sign Up </h2>
                </div>
            <form class="needs-center" onSubmit={signUp}>
                <input class="needs-center" id='firstName' placeholder="First Name" />
                <input class="needs-center" id='lastName' placeholder="Last Name" />
                <input class="needs-center" id='signUpEmail' placeholder="email" />
                <input class="needs-center" id='signUpPassword' placeholder="password" type="password" />
                <button onClick={signUp}>Sign Up</button>
            </form>

        </div>
    )
}