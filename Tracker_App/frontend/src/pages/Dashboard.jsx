import { useState, React } from "react";
import axios from "axios";
import { useEffect } from "react";
import { ListGroup, ListGroupItem, Col, Row, Container, Accordion } from 'react-bootstrap';
import { FaTrash, FaCheckCircle } from "react-icons/fa"



export default function Dashboard(){
    const [movie, setMovie] = useState([])
    const [anime, setAnime] = useState([])


    const getData = async ()=> {
        
        let myAnime = await axios.get('api/task-detail/')
        console.log(myAnime.data['myAnimeList'])
        setAnime(myAnime.data['myAnimeList'])

        let myMovie = await axios.get('api/task-detail/')
        console.log(myMovie.data['myMovieList'])
        setMovie(myMovie.data['myMovieList'])


    }
    
    useEffect(() => {
        console.log("useEffect")
        getData()
    }, [])

    const movieDelete = async (movieReq)=>{

        
        let movieResponse= await axios.post('api/movie-delete/', {'movieTitle': movieReq})
        getData()

    }

    const animeDelete = async (animeReq) =>{

        let animeResponse= await axios.post('api/anime-delete/', {'animeTitle': animeReq})
        getData()
      
    }
    return(
        <div>

            
        <Container>
        <Row>
            <Col md>
            <Accordion  flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header className="Thingy">Movies</Accordion.Header>
                    <Accordion.Body>
                    {movie ? (movie.map((movieReq)=> {
                        return ( 
                        
                        <div>
                            
                        <ListGroup variant="flush">
                            <ListGroupItem>{movieReq}
                            
                            <div>
                                <button className="button-complete task-button" onClick={() => movieDelete(movieReq)}>
                                    <FaCheckCircle />
                                     </button>
                                <button className="button-delete task-button" onClick={() => movieDelete(movieReq)}>
                                    <FaTrash />
                                     </button>
                            </div>

                            </ListGroupItem>
                        </ListGroup>
                        </div>



                        )

                })
                    ): <h2>Sorry !! No Movies Found</h2>}

                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
            </Col>
        </Row>
        </Container>
                <br />
        <Container>
        <Row>
            <Col md>
            <Accordion flush>
                <Accordion.Item eventKey="1">
                    <Accordion.Header >Anime</Accordion.Header>
                    <Accordion.Body >
                        {anime ? (anime.map((animeReq)=> {
                            return (
                
                                
                                <ListGroup>
                                    
                                    <ListGroupItem >{animeReq}
                                    <div>
                                        <button className="button-complete task-button" onClick={() => animeDelete(animeReq)}>
                                            <FaCheckCircle />
                                        </button>
                                        <button className="button-delete task-button" onClick={() => animeDelete(animeReq)}>
                                            <FaTrash />
                                        </button>
                            </div>
                                    </ListGroupItem>
                                    
                                </ListGroup>
                        
                                )
                        })
                            ): <h2>Sorry !! No Movies Found</h2>}

                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
        
            </Col>
        </Row>
        </Container>
            
            
        </div>
        
    )
}