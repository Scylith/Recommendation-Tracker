import { Modal,show,Button} from 'react-bootstrap';
import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
const API_IMG="https://image.tmdb.org/t/p/w500/";

  

const AnimeBox =({title, images, popularity, aired, synopsis})=>{
    
    console.log("Aired: ", aired)
    const [show, setShow]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);

    let location = useLocation()

    const addToList= async ()=>{
        let animeTitle = title
        let type= 'anime'
        let myResponse= await axios.post('api/task-create/', {'animeTitle': animeTitle, 'type': type})
        console.log(myResponse)

    }
    
    return(
        <div className="card text-center bg-secondary mb-3">
            <div className="card-body">
              <img className="card-img-top" src={images.jpg.image_url} />
              <div className="card-body">
                  <button type="button" className="moreButton" onClick={handleShow} > View More </button>
                  <button type="button" className="moreButton" onClick={addToList}> Add to List 
                  </button>
                  <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                      <img className="card-img-top" style={{width:'14rem'}}src={images.jpg.image_url} />
                      <h3>{title}</h3>
                      <h4>Jikan average vote: {popularity}</h4>
                      <h5>Started Airing: {aired.string} </h5>
                      <br></br>
                      <h6>Overview</h6>
                      <p>{synopsis}</p>
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

export default AnimeBox;