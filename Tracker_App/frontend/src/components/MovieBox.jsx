import { Modal,show,Button} from 'react-bootstrap';
import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
const API_IMG="https://image.tmdb.org/t/p/w500/";

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
  

const MovieBox =({title, poster_path, vote_average, release_date, overview})=>{
    
    const [show, setShow]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);

    let location = useLocation()
    
    const addToList= async ()=>{
        let movieTitle = title
        let type= 'movie'
        let myResponse= await axios.post('api/task-create/', {'movieTitle': movieTitle, 'type': type})
        console.log(myResponse)

    }
    
    return(
        <div class="thingy" className="card text-center mb-3">
            <div className="card-body">
              <img className="card-img-top" src={API_IMG+poster_path} />
              <div className="card-body">
                  <button type="button" className="moreButton" onClick={handleShow} > View More </button>
                  <button type="button" className="moreButton" onClick={addToList}> Add to List </button>
                  <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                      <img className="card-img-top" style={{width:'14rem'}}src={API_IMG+poster_path} />
                      <h3>{title}</h3>
                      <h4>IMDb average vote: {vote_average}</h4>
                      <h5>Release Date: {release_date}</h5>
                      <br></br>
                      <h6>Overview</h6>
                      <p>{overview}</p>
                      </Modal.Body>
                      <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>Close</Button>
                      </Modal.Footer>
                  </Modal>
              </div>
            </div>
        </div>
    )
}

export default MovieBox;