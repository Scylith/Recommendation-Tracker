import { React } from 'react'
import './App.css'
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home'
import Dashboard from './pages/Dashboard'
import Movies from './pages/Movies'
import Anime from './pages/Anime';
import axios from 'axios';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MyNavbar from './components/MyNavbar';
import Song from './components/Song';
import SpotLog from './components/SpotLog';








function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}
const csrftoken = getCookie('csrftoken');
axios.defaults.headers.common["X-CSRFToken"]=csrftoken

function App() {

  

  return (
    <div >
      {/* <Navbar bdg="light" style={{marginBottom: "20px"}}>
        <Container>
            <Navbar.Brand href="#"> Tracker App </Navbar.Brand>
        </Container>

      </Navbar> */}
      
    
     <Router>
        
        {/* <Sidebar /> */}
     <MyNavbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/Movies' element={<Movies />} />
          <Route path='/Anime' element={<Anime />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Song' element={<SpotLog />} />
          <Route path='/Song' element={<Song />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
